
import React from 'react';
import { Shield, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import MissionCard from './MissionCard';
import ValueCard from './ValueCard';

const MissionSection = () => {
  const missionItems = [
    {
      icon: Shield,
      title: "Accessibility to all",
      description: "No matter your background, professional level, knowledge, and educational resources to guide you."
    },
    {
      icon: CheckCircle,
      title: "Verifying blockchain news",
      description: "We ensure accurate verification of all content with community oversight."
    },
    {
      icon: Users,
      title: "Collaboration and rewards",
      description: "We encourage active contribution to the ecosystem through participation and rewards."
    }
  ];

  const valueItems = [
    {
      icon: "/lovable-uploads/a263ca17-4aab-4185-bb87-d8f851e0042d.png",
      title: "Trusted Content",
      description: "Get reliable, curated content without the hassle of sorting through noise. Begin your investment journey with confidence.",
      link: "#"
    },
    {
      icon: "/lovable-uploads/d5c1f634-3a78-4fe3-9b07-196b4611418f.png",
      title: "Advanced Analytics",
      description: "Take advantage of advanced analytics, technical insights, and a thriving community to sharpen your strategy and maximize returns.",
      link: "#"
    },
    {
      icon: "/lovable-uploads/9cd31b14-1279-4301-a121-7a06d74009b0.png",
      title: "Community Engagement",
      description: "Engage with relevant financial news while earning rewards for your participation and connecting with others in the community.",
      link: "#"
    }
  ];

  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 z-0"></div>
      
      <div className="section-container relative z-10">
        {/* Mission & Vision */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="badge mb-4">About Us</div>
            <h2 className="section-title">
              Our <span className="text-zacro-500">Mission & Vision</span>
            </h2>
            <p className="section-subtitle">
              ZacroTribe is driven by a mission to democratize financial information, empower every individual, and build a vibrant community. Here's how we achieve this:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionItems.map((item, index) => (
              <MissionCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Why ZacroTribe */}
        <div>
          <div className="text-center mb-12">
            <div className="badge mb-4">Benefits</div>
            <h2 className="section-title">
              Why <span className="text-zacro-500">ZacroTribe?</span>
            </h2>
            <p className="section-subtitle">
              Discover how ZacroTribe transforms the way you interact with financial news and information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueItems.map((item, index) => (
              <ValueCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
