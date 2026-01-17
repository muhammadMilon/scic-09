import { NextResponse } from 'next/server';

// Sample course data - in a real app, this would come from a database
const courses = [
  {
    id: 1,
    name: 'Full-Stack MERN Development',
    description: 'Master MongoDB, Express, React, and Node.js to build modern web applications',
    price: '$99.99',
    duration: '12 weeks',
    level: 'Intermediate',
    students: 1250,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    features: [
      'Build 5+ real-world projects',
      'Learn MongoDB database design',
      'Master React hooks and state management',
      'Deploy to production environments',
      'RESTful API development',
      'Authentication & Authorization'
    ],
    syllabus: [
      { week: 1, topic: 'Introduction to MERN Stack' },
      { week: 2, topic: 'MongoDB Fundamentals' },
      { week: 3, topic: 'Express.js & API Development' },
      { week: 4, topic: 'React Basics & Components' },
      { week: 5, topic: 'State Management & Hooks' },
      { week: 6, topic: 'Full-Stack Integration' },
    ]
  },
  {
    id: 2,
    name: 'Next.js 15 Mastery',
    description: 'Learn the latest Next.js features including App Router, Server Components, and more',
    price: '$89.99',
    duration: '8 weeks',
    level: 'Advanced',
    students: 890,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=600&fit=crop',
    instructor: 'Michael Chen',
    category: 'Web Development',
    features: [
      'App Router deep dive',
      'Server & Client Components',
      'Advanced routing patterns',
      'Performance optimization',
      'SEO best practices',
      'Deployment strategies'
    ],
    syllabus: [
      { week: 1, topic: 'Next.js Fundamentals' },
      { week: 2, topic: 'App Router Architecture' },
      { week: 3, topic: 'Server Components' },
      { week: 4, topic: 'Data Fetching Patterns' },
      { week: 5, topic: 'Performance & SEO' },
      { week: 6, topic: 'Production Deployment' },
    ]
  },
  {
    id: 3,
    name: 'AI Integration for Developers',
    description: 'Integrate AI capabilities into your applications using modern AI APIs and frameworks',
    price: '$129.99',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 650,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    instructor: 'Dr. Emily Rodriguez',
    category: 'Artificial Intelligence',
    features: [
      'OpenAI API integration',
      'Build AI-powered chatbots',
      'Image generation & processing',
      'Natural language processing',
      'Vector databases',
      'AI workflow automation'
    ],
    syllabus: [
      { week: 1, topic: 'Introduction to AI APIs' },
      { week: 2, topic: 'OpenAI & GPT Integration' },
      { week: 3, topic: 'Building Chatbots' },
      { week: 4, topic: 'Image AI & DALL-E' },
      { week: 5, topic: 'Vector Databases' },
      { week: 6, topic: 'AI Workflow Systems' },
    ]
  },
  {
    id: 4,
    name: 'Modern UI/UX with Tailwind CSS',
    description: 'Create stunning, responsive interfaces with Tailwind CSS and modern design principles',
    price: '$79.99',
    duration: '6 weeks',
    level: 'Beginner',
    students: 1580,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    instructor: 'Alex Martinez',
    category: 'Design',
    features: [
      'Tailwind CSS fundamentals',
      'Responsive design patterns',
      'Component libraries',
      'Dark mode implementation',
      'Animation & transitions',
      'Design system creation'
    ],
    syllabus: [
      { week: 1, topic: 'Tailwind Basics' },
      { week: 2, topic: 'Responsive Design' },
      { week: 3, topic: 'Components & Patterns' },
      { week: 4, topic: 'Advanced Styling' },
      { week: 5, topic: 'Animations' },
      { week: 6, topic: 'Design Systems' },
    ]
  },
  {
    id: 5,
    name: 'TypeScript for JavaScript Developers',
    description: 'Level up your JavaScript skills with TypeScript for safer, more maintainable code',
    price: '$69.99',
    duration: '5 weeks',
    level: 'Intermediate',
    students: 2100,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    instructor: 'David Kim',
    category: 'Programming',
    features: [
      'TypeScript fundamentals',
      'Type system mastery',
      'Generics & advanced types',
      'React with TypeScript',
      'Node.js with TypeScript',
      'Best practices & patterns'
    ],
    syllabus: [
      { week: 1, topic: 'TypeScript Basics' },
      { week: 2, topic: 'Type System' },
      { week: 3, topic: 'Advanced Types' },
      { week: 4, topic: 'React + TypeScript' },
      { week: 5, topic: 'Production Patterns' },
    ]
  },
  {
    id: 6,
    name: 'Docker & DevOps Essentials',
    description: 'Master containerization and DevOps practices for modern application deployment',
    price: '$94.99',
    duration: '7 weeks',
    level: 'Intermediate',
    students: 780,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=600&fit=crop',
    instructor: 'James Wilson',
    category: 'DevOps',
    features: [
      'Docker fundamentals',
      'Container orchestration',
      'CI/CD pipelines',
      'Kubernetes basics',
      'Cloud deployment',
      'Monitoring & logging'
    ],
    syllabus: [
      { week: 1, topic: 'Docker Basics' },
      { week: 2, topic: 'Docker Compose' },
      { week: 3, topic: 'CI/CD with GitHub Actions' },
      { week: 4, topic: 'Kubernetes Introduction' },
      { week: 5, topic: 'Cloud Deployment' },
      { week: 6, topic: 'Monitoring & Scaling' },
    ]
  }
];

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const category = searchParams.get('category');

    // If ID is provided, return single course
    if (id) {
      const course = courses.find(c => c.id === parseInt(id));
      if (!course) {
        return NextResponse.json(
          { error: 'Course not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(course);
    }

    // Filter by category if provided
    let filteredCourses = courses;
    if (category) {
      filteredCourses = courses.filter(c => 
        c.category.toLowerCase() === category.toLowerCase()
      );
    }

    return NextResponse.json(filteredCourses);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
