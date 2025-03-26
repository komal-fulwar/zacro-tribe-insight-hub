
import { AlertTriangle, LineChart, Timer } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Centralization',
      description: 'Moving past media monopolies to allow diverse voices in shaping narratives.',
    },
    {
      icon: LineChart,
      title: 'Lack of Transparency',
      description: 'Verifying blockchain news to ensure content remains truthful and reliable.',
    },
    {
      icon: Timer,
      title: 'Inefficient Information Flow',
      description: 'Ensuring news reaches you in real-time, without bias or delay.',
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden grid-bg">
      {/* Content */}
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">Our Vision</div>
          <h2 className="section-title">
            The Challenges in <span className="text-zacro-400">Financial News</span> Today
          </h2>
          <p className="section-subtitle">
            ZacroTribe is addressing the key challenges in today's financial news ecosystem with innovative blockchain solutions.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`animate-fade-up animate-delay-${index * 100} cube-card`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
