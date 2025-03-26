
import { ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/90 to-dark-950/95">
        {/* Abstract background elements */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-zacro-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white mb-6 animate-fade-in">
          <span className="inline-block w-2 h-2 rounded-full bg-zacro-500 mr-2"></span>
          The Most Secure Crypto Currency
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-zacro-500">ZacroTribe</span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">
          Your <span className="text-zacro-400">Gateway</span> to<br /> Decentralized Financial <span className="text-white">Insights</span>
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-up animate-delay-200">
          A pioneering, cutting-edge decentralized financial news platform that is transforming how you stay informed and engaged with the financial world.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-up animate-delay-300">
          <Button className="bg-zacro-500 hover:bg-zacro-600 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zacro-500/25">
            Buy Token <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6 rounded-full text-lg font-medium backdrop-blur-sm">
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
