
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Shield, BarChart4 } from 'lucide-react';

const TokenomicsSection = () => {
  const tokenData = [
    { name: 'Presale', value: 30, color: '#7F45FB' },
    { name: 'Team & Advisors', value: 15, color: '#A377FB' },
    { name: 'Marketing', value: 15, color: '#BA99FC' },
    { name: 'Community Rewards', value: 20, color: '#00CFE8' },
    { name: 'Staking Pool', value: 8, color: '#28C76F' },
    { name: 'Liquidity Pool', value: 10, color: '#007BFF' },
    { name: 'Airdrop & Bonus', value: 2, color: '#7367F0' },
  ];

  const tokenUtility = [
    {
      title: 'Governance',
      description: 'Voting on platform decisions and future developments',
      icon: <BarChart4 className="h-5 w-5 text-crypto-blue" />
    },
    {
      title: 'Premium Content',
      description: 'Access to exclusive analysis and market insights',
      icon: <Sparkles className="h-5 w-5 text-crypto-yellow" />
    },
    {
      title: 'Rewards',
      description: 'Earn tokens for content creation and curation',
      icon: <TrendingUp className="h-5 w-5 text-crypto-green" />
    },
    {
      title: 'Discounts',
      description: 'Reduced fees on platform services and transactions',
      icon: <Shield className="h-5 w-5 text-crypto-purple" />
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="crypto-card p-3 text-white text-sm">
          <p className="font-bold text-zacro-300">{`${payload[0].name}: ${payload[0].value}%`}</p>
          <p className="text-xs text-gray-300">{`${payload[0].value * 10}M tokens`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="tokenomics" className="py-24 bg-crypto-grid relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zacro-500/30 to-transparent"></div>
      <div className="absolute -left-64 top-1/3 w-96 h-96 bg-zacro-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-crypto-blue/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">Tokenomics</div>
          <h2 className="section-title">
            <span className="text-zacro-500">Token</span> Distribution
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            ZacroTribe's tokenomics model is designed for sustainable growth, community rewards, and long-term value creation in the decentralized financial ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="crypto-card p-6 rounded-xl neon-border"
          >
            <div className="h-[400px] w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-medium text-white/70">Total Supply</p>
                  <p className="text-4xl font-bold text-white">
                    <span className="text-zacro-500">1</span> Billion ZACRO
                  </p>
                </div>
              </div>
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="crypto-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-zacro-500 to-zacro-600 flex items-center justify-center mr-3">
                  <span className="text-white text-sm">1</span>
                </div>
                Token Allocation
              </h3>
              
              <div className="space-y-4">
                {tokenData.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between mb-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${item.value}%`, 
                          backgroundColor: item.color 
                        }}
                      ></div>
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
              className="crypto-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-zacro-500 to-zacro-600 flex items-center justify-center mr-3">
                  <span className="text-white text-sm">2</span>
                </div>
                Vesting Schedule
              </h3>
              <p className="text-gray-300 mb-6">Team tokens are locked for 12 months, then released linearly over the next 24 months.</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Locked Period</span>
                    <span className="text-sm text-white">12 months</span>
                  </div>
                  <div className="bg-dark-800 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "33.333%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="bg-zacro-500 h-full"
                    ></motion.div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Linear Release</span>
                    <span className="text-sm text-white">24 months</span>
                  </div>
                  <div className="bg-dark-800 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "66.666%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-crypto-blue h-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="crypto-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-zacro-500 to-zacro-600 flex items-center justify-center mr-3">
                  <span className="text-white text-sm">3</span>
                </div>
                Token Utility
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tokenUtility.map((utility, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-dark-900/50 rounded-lg border border-white/5 hover:border-zacro-500/20 transition-all duration-300"
                  >
                    <div className="mr-3 mt-1">{utility.icon}</div>
                    <div>
                      <p className="font-medium text-white">{utility.title}</p>
                      <p className="text-sm text-gray-400">{utility.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
