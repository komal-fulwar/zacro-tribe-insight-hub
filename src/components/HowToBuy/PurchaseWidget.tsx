
import { useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const PurchaseWidget = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState('BNB');

  return (
    <Card className="glass-card border-white/10 overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Current Price Info */}
          <div className="bg-zacro-500 -mx-6 -mt-6 p-6 text-white">
            <div className="flex justify-between items-center mb-2">
              <span>1 Zacro = $0.01</span>
              <span>Next Stage = $ 0.02</span>
            </div>
            
            <div className="w-full bg-white/20 h-2 rounded-full mb-2">
              <div className="bg-white h-full rounded-full w-3/4"></div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Remaining Tokens: 38527500.00 ZACRO</span>
            </div>
            
            <div className="text-right mt-2">
              <span>Total Raised: $130725.00</span>
            </div>
          </div>
          
          {/* Exchange Rate */}
          <div>
            <p className="mb-2">1 BNB = 53100.40 ZACRO</p>
            <div className="flex justify-between items-center">
              <span>Balance: 0 MAX</span>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">●</span>
                <span>0</span>
                <Button variant="outline" className="bg-yellow-500 text-black border-none hover:bg-yellow-600">
                  BNB ▼
                </Button>
              </div>
            </div>
          </div>
          
          {/* Receive Amount */}
          <div className="flex justify-between items-center">
            <span>Receive =</span>
            <div className="flex items-center gap-2">
              <span className="text-zacro-500">●</span>
              <span>0</span>
              <Button variant="outline" className="bg-zacro-500 text-white border-none hover:bg-zacro-600">
                Zacro
              </Button>
            </div>
          </div>
          
          {/* Blockchain Selection */}
          <div>
            <p className="mb-2">Select Blockchain</p>
            <Button variant="outline" className="w-full bg-yellow-500 text-black border-none hover:bg-yellow-600 justify-center">
              <span className="text-yellow-700 mr-2">●</span> BNB
            </Button>
          </div>
          
          {/* Accepting */}
          <div>
            <p className="mb-2">Accepting</p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">T</div>
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">B</div>
            </div>
          </div>
          
          {/* Connect Wallet */}
          <Button variant="outline" className="w-full border-white/20">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 12C16 10.8954 16.8954 10 18 10H22V14H18C16.8954 14 16 13.1046 16 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Connect Wallet
          </Button>
          
          {/* Buy Button */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full bg-zacro-500 hover:bg-zacro-600">
              $ZACRO Presale
            </Button>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseWidget;
