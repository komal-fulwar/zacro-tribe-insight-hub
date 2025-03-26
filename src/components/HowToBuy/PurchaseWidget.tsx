
import { useState } from 'react';
import { ArrowDownCircle, Wallet, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const PurchaseWidget = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState('BNB');
  const [amount, setAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('0');
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    
    // Calculate ZACRO amount based on exchange rate (1 BNB = 53100.40 ZACRO)
    if (value && !isNaN(parseFloat(value))) {
      const zacroAmount = parseFloat(value) * 53100.40;
      setReceiveAmount(zacroAmount.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    } else {
      setReceiveAmount('0');
    }
  };
  
  const handleConnectWallet = () => {
    toast({
      title: "Wallet Connection",
      description: "This feature will be available soon!",
      variant: "default",
    });
  };

  return (
    <Card className="glass-card border-white/10 overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Current Price Info */}
          <div className="bg-gradient-to-r from-zacro-600 to-zacro-500 -mx-6 -mt-6 p-6 text-white rounded-b-xl">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium">1 Zacro = $0.01</span>
              <span className="text-sm bg-white/20 px-2 py-1 rounded-full">Next = $0.02</span>
            </div>
            
            <div className="w-full bg-white/20 h-3 rounded-full mb-2 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-white h-full rounded-full"
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span>Remaining: 38.5M ZACRO</span>
              <span>75% Sold</span>
            </div>
            
            <div className="text-right mt-3 text-white/90">
              <span>Total Raised: $130,725.00</span>
            </div>
          </div>
          
          {/* Exchange Rate */}
          <div>
            <p className="mb-2 text-sm text-gray-400">Exchange Rate: 1 BNB = 53,100.40 ZACRO</p>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.0"
                className="w-full bg-dark-800/50 text-white rounded-lg p-4 pr-24 border border-white/10 focus:outline-none focus:ring-2 focus:ring-zacro-500/50"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Button variant="outline" className="bg-yellow-500 text-black border-none hover:bg-yellow-600">
                  BNB ▼
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-1 ml-1">Balance: 0 BNB</p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center">
            <div className="bg-dark-800/50 rounded-full p-2">
              <ArrowDownCircle className="h-6 w-6 text-zacro-500" />
            </div>
          </div>
          
          {/* Receive Amount */}
          <div className="relative">
            <input
              type="text"
              value={receiveAmount}
              readOnly
              className="w-full bg-dark-800/50 text-white rounded-lg p-4 pr-24 border border-white/10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Button variant="outline" className="bg-zacro-500 text-white border-none hover:bg-zacro-600">
                ZACRO
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-1 ml-1">You will receive</p>
          </div>
          
          {/* Blockchain Selection */}
          <div>
            <p className="mb-2 text-sm text-gray-400">Select Blockchain</p>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                className={`border ${selectedBlockchain === 'BNB' ? 'bg-yellow-500 text-black' : 'bg-dark-800/50 text-gray-400'} border-white/10 hover:bg-yellow-500 hover:text-black justify-center`}
                onClick={() => setSelectedBlockchain('BNB')}
              >
                <span className="text-yellow-700 mr-2">●</span> BNB Chain
              </Button>
              <Button 
                variant="outline" 
                className={`border ${selectedBlockchain === 'ETH' ? 'bg-blue-500 text-white' : 'bg-dark-800/50 text-gray-400'} border-white/10 hover:bg-blue-500 hover:text-white justify-center`}
                onClick={() => setSelectedBlockchain('ETH')}
              >
                <span className="text-blue-700 mr-2">●</span> Ethereum
              </Button>
            </div>
          </div>
          
          {/* Accepting */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Accepting</p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold">T</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold">B</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold">Z</span>
              </div>
            </div>
          </div>
          
          {/* Connect Wallet */}
          <Button variant="outline" className="w-full border-white/20 bg-dark-800/50 text-white" onClick={handleConnectWallet}>
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet
          </Button>
          
          {/* Buy Button */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="w-full bg-zacro-500 hover:bg-zacro-600 py-6 text-lg">
              Buy $ZACRO Now
            </Button>
          </motion.div>
          
          {/* Terms */}
          <div className="text-center text-xs text-gray-400">
            <p>By purchasing you agree to our <a href="#" className="text-zacro-500 hover:underline">Terms of Service</a></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PurchaseWidget;
