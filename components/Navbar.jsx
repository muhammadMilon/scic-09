'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg border-b border-dark-200/50 dark:border-dark-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 relative">
          
          {/* Mobile Logo (Visible only on mobile) */}
          <div className="md:hidden flex-1">
            <Link
              href="/"
              className="text-2xl font-bold font-display text-gradient"
            >
              NextMind
            </Link>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end pr-32 lg:pr-40">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              About
            </button>
          </div>

          {/* Centered Logo (Desktop) */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Link
              href="/"
              className="text-2xl lg:text-3xl font-bold font-display text-gradient hover:scale-105 transition-transform px-4 py-2 bg-white/80 dark:bg-dark-900/80 rounded-lg backdrop-blur-md pointer-events-auto whitespace-nowrap"
            >
              NextMind Academy
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-start pl-32 lg:pl-40">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Services
            </button>
            <Link
              href="/courses"
              className="text-sm font-semibold uppercase tracking-wider text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Courses
            </Link>
            <button
              className="text-sm font-semibold uppercase tracking-wider px-6 py-2 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-700 animate-slide-down shadow-xl">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg"
            >
              Services
            </button>
            <Link
              href="/courses"
              className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <div className="pt-4 border-t border-dark-100 dark:border-dark-700">
              <button
                className="block w-full text-center px-4 py-3 gradient-primary text-white rounded-xl hover:shadow-lg transition-all font-bold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
