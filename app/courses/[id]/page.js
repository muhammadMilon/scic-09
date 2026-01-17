'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CourseDetailsPage() {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourseDetails();
  }, [params.id]);

  const fetchCourseDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/courses?id=${params.id}`);
      
      if (!response.ok) {
        throw new Error('Course not found');
      }
      
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error('Error fetching course:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark-900">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
        </div>
      </main>
    );
  }

  if (error || !course) {
    return (
      <main className="min-h-screen bg-white dark:bg-dark-900">
        <Navbar />
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Course Not Found</h1>
          <p className="text-xl text-dark-600 dark:text-dark-400 mb-8">
            The course you're looking for doesn't exist.
          </p>
          <Link
            href="/courses"
            className="px-8 py-3 gradient-primary text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Navbar />

      {/* Hero Section with Course Image */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark opacity-95">
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-white hover:text-primary-300 mb-8 transition-colors text-lg"
          >
            <span className="mr-2">←</span> Back to Courses
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-fade-in">
              <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
                {course.name}
              </h1>
              <p className="text-xl text-dark-200 mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">⭐</span>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="ml-1 text-dark-300">rating</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👤</span>
                  <span className="font-semibold">{course.students.toLocaleString()}</span>
                  <span className="ml-1 text-dark-300">students</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏱️</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📊</span>
                  <span className="font-semibold">{course.level}</span>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1 animate-scale-in">
              <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-2xl border border-dark-200 dark:border-dark-700 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {course.price}
                  </div>
                  <p className="text-dark-600 dark:text-dark-400">One-time payment</p>
                </div>

                <button className="w-full py-4 gradient-primary text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all mb-4">
                  Enroll Now
                </button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-dark-700 dark:text-dark-300">
                    <span className="mr-3">✓</span>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center text-dark-700 dark:text-dark-300">
                    <span className="mr-3">✓</span>
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center text-dark-700 dark:text-dark-300">
                    <span className="mr-3">✓</span>
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center text-dark-700 dark:text-dark-300">
                    <span className="mr-3">✓</span>
                    <span>Access on mobile and desktop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 bg-dark-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold font-display mb-6 text-foreground">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">✓</span>
                      <span className="text-dark-700 dark:text-dark-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Syllabus */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold font-display mb-6 text-foreground">
                  Course Syllabus
                </h2>
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-dark-50 dark:bg-dark-800 rounded-xl hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                        {item.week}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Week {item.week}</h4>
                        <p className="text-dark-600 dark:text-dark-400">{item.topic}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Instructor */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold font-display mb-4 text-foreground">
                  Your Instructor
                </h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold mr-4">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{course.instructor}</h4>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">Expert Instructor</p>
                  </div>
                </div>
                <p className="text-dark-700 dark:text-dark-300">
                  Industry professional with years of experience in {course.category.toLowerCase()}.
                </p>
              </div>

              {/* Course Info */}
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold font-display mb-4 text-foreground">
                  Course Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-dark-600 dark:text-dark-400">Duration</span>
                    <span className="font-semibold text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-600 dark:text-dark-400">Level</span>
                    <span className="font-semibold text-foreground">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-600 dark:text-dark-400">Students</span>
                    <span className="font-semibold text-foreground">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-600 dark:text-dark-400">Rating</span>
                    <span className="font-semibold text-foreground">⭐ {course.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
