
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden grid-bg">
      {/* Background with overlay and grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-900/70 to-dark-950/80 z-0">
        {/* Abstract background elements */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-zacro-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 backdrop-blur-md text-white mb-6 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-zacro-400 mr-2"></span>
            MODERN LIQUIDITY PLATFORM
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Unlock your <span className="text-white">biggest assets.</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-400 animate-fade-in animate-delay-100">
            Learn how our trading platform works.
          </h2>

          <p className="text-lg text-gray-300 max-w-xl mb-10 animate-fade-up animate-delay-200">
            ZacroTribe uses secure live data connections to your banking, billing, and accounting software to turn your future revenue into a tradable asset.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-up animate-delay-300">
            <Button className="modern-button group">
              Start Now <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="aspect-square max-w-md mx-auto relative animate-float">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/80 backdrop-blur-md rounded-xl shadow-xl z-10 flex items-center justify-center">
              <span className="font-bold text-lg text-dark">ROYALTIES</span>
            </div>
            
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-dark-700/80 backdrop-blur-md rounded-xl shadow-md flex items-center justify-center">
              <span className="text-sm text-white/80">RECEIVABLES</span>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-dark-700/80 backdrop-blur-md rounded-xl shadow-md flex items-center justify-center">
              <span className="text-sm text-white/80">SUBSCRIPTIONS</span>
            </div>
            
            <div className="absolute bottom-1/6 left-2/3 w-16 h-16 bg-dark-800/80 backdrop-blur-md rounded-xl shadow-md flex items-center justify-center">
              <span className="text-xs text-white/70">OTHER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
