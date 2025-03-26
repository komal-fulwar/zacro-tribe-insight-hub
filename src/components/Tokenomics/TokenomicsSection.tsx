
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const TokenomicsSection = () => {
  const tokenData = [
    { name: 'Presale', value: 30, color: '#E0151D' },
    { name: 'Team & Advisors', value: 15, color: '#F0666D' },
    { name: 'Marketing', value: 15, color: '#F5999E' },
    { name: 'Community Rewards', value: 20, color: '#FF9500' },
    { name: 'Staking Pool', value: 8, color: '#35C759' },
    { name: 'Liquidity Pool', value: 10, color: '#007AFF' },
    { name: 'Airdrop & Bonus', value: 2, color: '#5856D6' },
  ];

  const tokenUtility = [
    'Governance voting on platform decisions',
    'Access to premium content and analysis',
    'Rewards for content creation and curation',
    'Discounts on platform services'
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 text-white text-sm">
          <p className="font-bold">{`${payload[0].name}: ${payload[0].value}%`}</p>
          <p className="text-xs text-gray-300">{`${payload[0].value * 10}M tokens`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="tokenomics" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zacro-500/30 to-transparent"></div>
      <div className="absolute -left-64 top-1/3 w-96 h-96 bg-zacro-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-zacro-500/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">Tokenomics</div>
          <h2 className="section-title">
            <span className="text-zacro-500">Token</span> Distribution
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            ZacroTribe's tokenomics model supports sustainable growth and active user rewards. 
            Our token distribution is designed to ensure long-term project sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl border border-white/10"
          >
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={150}
                    paddingAngle={2}
                    dataKey="value"
                    strokeWidth={1}
                    stroke="#121212"
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <p className="text-xl font-medium">Total Supply</p>
              <p className="text-3xl font-bold">
                <span className="text-zacro-500">1</span> Billion ZACRO
              </p>
            </div>
          </motion.div>

          {/* Text side */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Token Allocation</h3>
              
              <div className="space-y-4">
                {tokenData.map((item, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                    <div className="flex-1 flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.value}% <span className="text-gray-400">({item.value * 10}M)</span></span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Vesting Schedule</h3>
              <p className="text-gray-300 mb-6">Team tokens are locked for 12 months, then released linearly over the next 24 months.</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Locked Period</span>
                    <span className="text-sm text-white">12 months</span>
                  </div>
                  <div className="bg-dark-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-zacro-500 h-full w-1/3"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Linear Release</span>
                    <span className="text-sm text-white">24 months</span>
                  </div>
                  <div className="bg-dark-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Token Utility</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tokenUtility.map((utility, index) => (
                  <li key={index} className="flex items-start p-2 bg-dark-800/50 rounded-lg">
                    <div className="text-zacro-500 mr-2 mt-0.5">•</div>
                    <span className="text-gray-300">{utility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
