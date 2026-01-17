export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Industry-Ready Skills',
      description: 'Learn the latest technologies and frameworks used by top companies worldwide.',
    },
    {
      icon: '🎨',
      title: 'Project-Based Learning',
      description: 'Build real-world applications and create an impressive portfolio while you learn.',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of hands-on development experience.',
    },
    {
      icon: '📱',
      title: 'Learn Anywhere',
      description: 'Access courses on any device - desktop, tablet, or mobile with seamless sync.',
    },
    {
      icon: '⚡',
      title: 'Self-Paced Learning',
      description: 'Study at your own pace with lifetime access to all course materials and updates.',
    },
    {
      icon: '🎓',
      title: 'Certificates',
      description: 'Earn certificates of completion to showcase your achievements to employers.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Why Choose <span className="text-gradient">NextMind Academy</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Experience world-class education with comprehensive courses designed to transform your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-dark-50 dark:from-dark-800 dark:to-dark-900 border border-dark-200 dark:border-dark-700 hover:border-primary-400 dark:hover:border-primary-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
