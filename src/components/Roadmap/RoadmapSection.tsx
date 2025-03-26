
import React from 'react';
import { motion } from 'framer-motion';
import RoadmapCard from './RoadmapCard';
import RoadmapTimeline from './RoadmapTimeline';

const RoadmapSection = () => {
  const phases = [
    {
      title: "Q1 2024",
      items: [
        "Launch platform with decentralized news aggregation",
        "Implement token utility and community governance model",
        "Deploy smart contracts and perform security audits",
        "Establish ICO and partnerships with global regulatory bodies"
      ],
      position: "left" as const
    },
    {
      title: "Q2 2024",
      items: [
        "Launch enhanced AI analytics tools for market analysis",
        "Release mobile apps for iOS and Android",
        "Develop integration into major exchange global financial news centers",
        "Establish cross-chain integration and strategic partnerships"
      ],
      position: "right" as const
    },
    {
      title: "Q3 2024",
      items: [
        "Introduce peer-to-peer content creation and NFT monetization",
        "Implement advanced AI prediction tools for market analytics",
        "Expand community governance and sector collaboration features"
      ],
      position: "left" as const
    },
    {
      title: "Q4 2024",
      items: [
        "Establish institutional partnerships with banks and investment firms",
        "Expand gateway and integrate for powered content creation",
        "Implement cross-chain interoperability and chain routing",
        "Transition to DAO governance and enhance sustainable tokenomics"
      ],
      position: "right" as const
    }
  ];

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900 z-0"></div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">Future Plans</div>
          <h2 className="section-title">
            Roadmap <span className="text-zacro-500">to Success</span>
          </h2>
          <p className="section-subtitle">
            The roadmap for ZacroTribe outlines a clear and ambitious trajectory for the platform's growth, development, and long-term success.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <RoadmapTimeline />
          
          <div className="grid grid-cols-1 gap-16">
            {phases.map((phase, index) => (
              <div key={index} className={`flex ${phase.position === 'right' ? 'justify-end' : 'justify-start'}`}>
                <RoadmapCard
                  title={phase.title}
                  items={phase.items}
                  position={phase.position}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
