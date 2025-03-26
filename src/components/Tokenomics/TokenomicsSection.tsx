
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

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
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-2 text-white text-sm">
          <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="tokenomics" className="py-24 bg-gradient-to-b from-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zacro-500/30 to-transparent"></div>
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="badge mb-4">Tokenomics</div>
          <h2 className="section-title">
            <span className="text-zacro-500">Tokenomics</span>
          </h2>
          <p className="section-subtitle">
            ZacroTribe's tokenomics model supports sustainable growth and active user rewards. Here's how our token distribution works:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart side */}
          <div className="h-[400px] w-full animate-fade-in">
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
            <div className="text-center mt-4 text-xl font-medium">
              <span className="text-zacro-500">1</span> Billion ZACRO
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-8 animate-fade-up animate-delay-300">
            <h3 className="text-2xl font-bold mb-6">Token Allocation</h3>
            
            <div className="space-y-4">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }}></div>
                  <div className="flex-1 flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-medium">{item.value}% ({item.value * 10}M)</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6">Vesting Schedule</h3>
              <p className="text-gray-300 mb-4">Team tokens are locked for 12 months, then released linearly over the next 24 months.</p>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Locked Period: 12 months</span>
                <span className="text-sm text-gray-400">Linear Release: 24 months</span>
              </div>
              <div className="bg-dark-800 h-2 rounded-full overflow-hidden">
                <div className="bg-zacro-500 h-full w-1/3"></div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Token Utility</h3>
              <ul className="space-y-2">
                {tokenUtility.map((utility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-zacro-500 mr-2">•</div>
                    <span className="text-gray-300">{utility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
