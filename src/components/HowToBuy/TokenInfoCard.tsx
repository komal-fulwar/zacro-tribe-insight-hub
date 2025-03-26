
import { Copy, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface TokenInfoCardProps {
  tokenName: string;
  symbol: string;
  address: string;
  onCopy: () => void;
  copied: boolean;
}

const TokenInfoCard = ({ tokenName, symbol, address, onCopy, copied }: TokenInfoCardProps) => {
  return (
    <Card className="glass-card border-white/10 overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Add {symbol} Token in your wallet</h3>
        
        <div className="space-y-3">
          <div>
            <p className="text-gray-400 text-sm mb-1">Token Name:</p>
            <p className="font-medium">{tokenName}</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm mb-1">Symbol:</p>
            <p className="font-medium">{symbol}</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm mb-1">Address:</p>
            <div className="flex items-center gap-2 bg-dark-800 p-2 rounded-lg">
              <p className="text-sm font-mono overflow-hidden overflow-ellipsis whitespace-nowrap flex-1">
                {address}
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onCopy}
                className="p-1 hover:bg-white/10 rounded-md transition-colors"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-400" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mt-4">
          Once added, users will be able to see their ZACRO tokens in their wallets.
        </p>
      </CardContent>
    </Card>
  );
};

export default TokenInfoCard;
