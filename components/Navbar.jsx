'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/check');
        const data = await res.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    window.addEventListener('scroll', handleScroll);
    
    // Check auth on focus or occasionally
    const interval = setInterval(checkAuth, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const scrollToSection = (sectionId) => {
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl shadow-sm border-dark-100 dark:border-dark-800'
          : 'bg-white/50 dark:bg-dark-900/50 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold font-display text-gradient tracking-tight hover:opacity-80 transition-opacity"
            >
              NextMind
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-10">
            {[
              { id: 'home', label: 'Home' },
              { id: 'features', label: 'Features' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[13px] font-semibold uppercase tracking-[0.15em] text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/courses"
              className="text-[13px] font-bold uppercase tracking-[0.1em] text-dark-700 dark:text-dark-100 hover:text-primary-600 transition-colors"
            >
              Marketplace
            </Link>
            {isAuthenticated && (
              <Link
                href="/courses/add"
                className="text-[13px] font-bold uppercase tracking-[0.1em] text-primary-600 hover:text-primary-700 transition-colors"
              >
                Add Course
              </Link>
            )}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2.5 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-dark-900 dark:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-dark-900/10 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-0 bottom-0 right-0 w-[280px] z-50 bg-white dark:bg-dark-900 shadow-2xl transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold font-display text-gradient">NextMind</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
          <button
            onClick={() => scrollToSection('home')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
          >
            Services
          </button>
          <Link
            href="/courses"
            className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-dark-800 dark:text-dark-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          {isAuthenticated && (
            <Link
              href="/courses/add"
              className="block w-full text-center px-4 py-3 rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800 transition-colors font-medium text-lg text-primary-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Add Course
            </Link>
          )}
          <div className="pt-6 border-t border-dark-100 dark:border-dark-700 mt-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full text-center px-4 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 hover:shadow-lg transition-all font-bold text-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="block w-full text-center px-4 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 hover:shadow-lg transition-all font-bold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
}
