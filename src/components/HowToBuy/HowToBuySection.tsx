
import { useState } from 'react';
import { Sparkles, Coins, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BuyStepCard from './BuyStepCard';
import TokenInfoCard from './TokenInfoCard';
import PurchaseWidget from './PurchaseWidget';
import ModernRoadmapStep from '../Roadmap/ModernRoadmapStep';

const HowToBuySection = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "0xc3597879e51c671f2d2b9910b4639664555596";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      number: 1,
      title: "Get a Wallet",
      description: "You'll need a wallet like Metamask to store your $ZACRO tokens",
      icon: CreditCard
    },
    {
      number: 2,
      title: "Get some BNB",
      description: "ZACRO is on Binance Smart Chain Blockchain, so you'll need some BNB or USDT tokens to purchase it",
      icon: Coins
    },
    {
      number: 3,
      title: "Buy on our website",
      description: "Click on Buy Now, connect wallet, enter the amount, and complete the transaction",
      icon: Sparkles
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 relative overflow-hidden grid-bg">
      {/* Content */}
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            How to <span className="text-zacro-400">Buy?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8 animate-fade-up">
            <div className="cube-card p-6">
              {steps.map((step, index) => (
                <ModernRoadmapStep
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isActive={index === 0}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>

            <TokenInfoCard 
              tokenName="ZacroTribe"
              symbol="ZACRO"
              address={tokenAddress}
              onCopy={copyToClipboard}
              copied={copied}
            />
          </div>

          <div className="animate-fade-up animate-delay-200">
            <PurchaseWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
