
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Hero from "@/components/Hero/Hero";
import FeaturesSection from "@/components/Features/FeaturesSection";
import EcosystemSection from "@/components/Ecosystem/EcosystemSection";
import TokenomicsSection from "@/components/Tokenomics/TokenomicsSection";
import CtaSection from "@/components/CTA/CtaSection";
import HowToBuySection from "@/components/HowToBuy/HowToBuySection";
import RoadmapSection from "@/components/Roadmap/RoadmapSection";
import MissionSection from "@/components/Mission/MissionSection";
import FeaturedSection from "@/components/Featured/FeaturedSection";

const Index = () => {
  // Smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hashval = anchor.getAttribute('href');
        const targetElement = document.querySelector(hashval!);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update the URL without a page reload
          window.history.pushState(null, '', hashval);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden grid-bg">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <MissionSection />
        <EcosystemSection />
        <RoadmapSection />
        <TokenomicsSection />
        <HowToBuySection />
        <FeaturedSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
