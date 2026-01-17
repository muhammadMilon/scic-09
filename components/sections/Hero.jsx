'use client';


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-dark opacity-95">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-white">
            Welcome to{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              NextMind Academy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-200 mb-8 max-w-3xl mx-auto">
            Master modern web development with our comprehensive courses in MERN Stack,
            AI Integration, and cutting-edge technologies.
          </p>
          <p className="text-lg text-dark-300 mb-12 max-w-2xl mx-auto">
            Learn from industry experts and build real-world projects with the latest
            tools and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#features"
              className="px-8 py-4 gradient-primary text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-80">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <p className="text-dark-300 text-sm">React</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">▲</span>
              </div>
              <p className="text-dark-300 text-sm">Next.js</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-dark-300 text-sm">Tailwind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <p className="text-dark-300 text-sm">AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
