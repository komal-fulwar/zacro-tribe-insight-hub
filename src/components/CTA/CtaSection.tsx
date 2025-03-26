
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-dark-950 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zacro-900/30 via-transparent to-dark-900/20 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-zacro-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zacro-500/10 rounded-full blur-3xl z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-card border border-white/10 p-10 md:p-16 rounded-2xl overflow-hidden relative">
          {/* Red accent border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zacro-400/0 via-zacro-500 to-zacro-400/0"></div>
          
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Announcing Zacro</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-zacro-500">Airdrop</span> Program
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Buy Zacro Token For <span className="text-green-500 font-semibold">5000 USDT</span><br />
              And Join In Our Airdrop Program
            </p>
            <div className="text-xl md:text-2xl mb-10">
              Airdrop Allocation <span className="text-green-500 font-semibold">5M USDT</span> Worth Of Zacro
            </div>
            <p className="text-lg mb-10">Be A Part Of It.</p>
            
            <div className="flex justify-center">
              <Button className="bg-zacro-500 hover:bg-zacro-600 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zacro-500/25 group">
                Join Airdrop 
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
