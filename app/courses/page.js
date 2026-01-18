'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchCourses();
  }, [selectedCategory]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const url = selectedCategory === 'all' 
        ? '/api/courses' 
        : `/api/courses?category=${selectedCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'Web Development', 'Artificial Intelligence', 'Design', 'Programming', 'DevOps'];

  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Our <span className="text-gradient">Courses</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of courses designed to help you master modern technologies
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                }`}
              >
                {category === 'all' ? 'All Courses' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-dark-600 dark:text-dark-400">No courses found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-dark-200 dark:border-dark-700">
                    {/* Course Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image || 'https://placehold.co/600x400?text=No+Image'}
                        alt={course.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white dark:bg-dark-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {course.level}
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {course.category}
                        </span>
                        <div className="flex items-center text-yellow-500">
                          <span className="mr-1">⭐</span>
                          <span className="text-sm font-semibold">{course.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-600 transition-colors">
                        {course.name}
                      </h3>

                      <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex items-center justify-between mb-4 text-sm text-dark-600 dark:text-dark-400">
                        <span>👤 {course.students.toLocaleString()} students</span>
                        <span>⏱️ {course.duration}</span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-dark-200 dark:border-dark-700">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {course.price}
                        </span>
                        <span className="text-primary-600 dark:text-primary-400 font-semibold group-hover:translate-x-2 transition-transform">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
