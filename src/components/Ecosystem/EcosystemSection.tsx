
import { Layers, BarChart3, Zap, Shield } from 'lucide-react';

const EcosystemSection = () => {
  const ecosystemItems = [
    {
      icon: <Layers className="h-8 w-8 text-zacro-400" />,
      title: 'Verified sources and AI-powered filtering',
      description: 'for real-time financial news',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-zacro-400" />,
      title: 'AI-driven insights and trading signals',
      description: 'to inform your decisions',
    },
    {
      icon: <Zap className="h-8 w-8 text-zacro-400" />,
      title: 'Earn ZAC tokens',
      description: 'for engaging, sharing, and contributing',
    },
    {
      icon: <Shield className="h-8 w-8 text-zacro-400" />,
      title: 'Get the most curated news updates',
      description: 'before anyone else',
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden grid-bg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zacro-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zacro-500/50 to-transparent"></div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">Use Cases</div>
          <h2 className="section-title">
            The <span className="text-zacro-500">ZacroTribe</span> Ecosystem
          </h2>
          <p className="section-subtitle">
            More than just news - discover the complete suite of tools and services in the ZacroTribe ecosystem
          </p>
        </div>

        {/* Ecosystem items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecosystemItems.map((item, index) => (
            <div 
              key={index}
              className="cube-card p-6 flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-dark-800/50 backdrop-blur-lg border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
