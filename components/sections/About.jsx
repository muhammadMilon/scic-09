export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              About <span className="text-gradient">NextMind Academy</span>
            </h2>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
              NextMind Academy is your premier destination for mastering modern web development
              and cutting-edge technologies. We offer comprehensive courses designed by industry
              experts to help you build real-world skills.
            </p>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
              Our curriculum covers everything from MERN Stack development to AI integration,
              with hands-on projects and practical applications that prepare you for the
              challenges of modern software development.
            </p>
            <p className="text-lg text-dark-700 dark:text-dark-300 mb-8 leading-relaxed">
              Join thousands of students who have transformed their careers through our
              expert-led courses and supportive learning community.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Expert-Led Courses</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Learn from industry professionals with years of real-world experience
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Hands-On Projects</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Build real applications and portfolios while you learn
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Lifetime Access</h4>
                  <p className="text-dark-600 dark:text-dark-400">
                    Learn at your own pace with unlimited access to all course materials
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-6">🎓</div>
                  <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">5K+</div>
                      <div className="text-sm">Students</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm">Courses</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">4.8</div>
                      <div className="text-sm">Avg Rating</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-sm">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
