
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const FeaturedSection = () => {
  const featuredLogos = [
    { name: "CoinDesk", logo: "/lovable-uploads/c3db203b-258d-4f52-b134-512bf463b40c.png" },
    { name: "Binance", logo: "/lovable-uploads/c3db203b-258d-4f52-b134-512bf463b40c.png" },
    { name: "CoinMarketCap", logo: "/lovable-uploads/c3db203b-258d-4f52-b134-512bf463b40c.png" },
    { name: "Etherscan", logo: "/lovable-uploads/c3db203b-258d-4f52-b134-512bf463b40c.png" },
    { name: "Blockchain.com", logo: "/lovable-uploads/c3db203b-258d-4f52-b134-512bf463b40c.png" },
    { name: "Coinbase", logo: "/lovable-uploads/c3db203b-258d-4f52-b134-512bf463b40c.png" },
  ];

  return (
    <section id="featured" className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Featured In
          </h2>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredLogos.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="h-16 bg-dark-800/50 rounded-lg flex items-center justify-center p-2 mx-2"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-8 max-w-full object-contain"
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
