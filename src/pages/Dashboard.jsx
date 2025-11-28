import { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

// Enhanced Animated Number Component
const AnimatedNumber = ({ value, duration = 1500, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {typeof value === 'string' ? value.replace(/[0-9]+/, count.toLocaleString()) : count.toLocaleString()}
    </span>
  );
};

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Colorful gradient themes
  const gradients = [
    'from-purple-500 via-pink-500 to-red-500',
    'from-blue-500 via-cyan-500 to-green-500',
    'from-green-500 via-emerald-500 to-teal-500',
    'from-orange-500 via-amber-500 to-yellow-500',
  ];

  // Performance Data with vibrant colors
  const performanceData = [
    { month: 'Jan', revenue: 45200, traffic: 12500, conversions: 1250, color: '#8B5CF6' },
    { month: 'Feb', revenue: 51200, traffic: 14200, conversions: 1420, color: '#EC4899' },
    { month: 'Mar', revenue: 63200, traffic: 16800, conversions: 1680, color: '#3B82F6' },
    { month: 'Apr', revenue: 58200, traffic: 15200, conversions: 1520, color: '#10B981' },
    { month: 'May', revenue: 71200, traffic: 19800, conversions: 1980, color: '#F59E0B' },
    { month: 'Jun', revenue: 82500, traffic: 22500, conversions: 2250, color: '#EF4444' }
  ];

  // Quick Stats with animated icons
  const quickStats = [
    { 
      title: 'Revenue', 
      value: '$82,500', 
      change: '+18.2%', 
      trend: 'up', 
      icon: '💰',
      gradient: gradients[0],
      description: 'Monthly growth'
    },
    { 
      title: 'Visitors', 
      value: '82.5K', 
      change: '+24.5%', 
      trend: 'up', 
      icon: '👥',
      gradient: gradients[1],
      description: 'Total visitors'
    },
    { 
      title: 'Conversion', 
      value: '2.73%', 
      change: '+8.2%', 
      trend: 'up', 
      icon: '📈',
      gradient: gradients[2],
      description: 'Conversion rate'
    },
    { 
      title: 'ROI', 
      value: '325%', 
      change: '+12.8%', 
      trend: 'up', 
      icon: '🎯',
      gradient: gradients[3],
      description: 'Return on investment'
    }
  ];

  // Campaign Performance
  const campaignPerformance = [
    { 
      name: 'Summer Sale', 
      value: 48500, 
      growth: '+32%',
      color: '#8B5CF6',
      icon: '🛍️'
    },
    { 
      name: 'Brand Launch', 
      value: 45200, 
      growth: '+18%',
      color: '#EC4899',
      icon: '🚀'
    },
    { 
      name: 'Product Launch', 
      value: 75800, 
      growth: '+42%',
      color: '#3B82F6',
      icon: '⭐'
    },
    { 
      name: 'Lead Gen', 
      value: 33800, 
      growth: '+28%',
      color: '#10B981',
      icon: '🎯'
    }
  ];

  // Social Media Metrics
  const socialMetrics = [
    { 
      platform: 'Facebook', 
      engagement: '4.8%', 
      growth: '+12.3%', 
      followers: '45.2K',
      color: '#1877F2',
      icon: '📘'
    },
    { 
      platform: 'Instagram', 
      engagement: '6.2%', 
      growth: '+18.7%', 
      followers: '38.7K',
      color: '#E4405F',
      icon: '📷'
    },
    { 
      platform: 'Twitter', 
      engagement: '3.2%', 
      growth: '+8.4%', 
      followers: '22.1K',
      color: '#1DA1F2',
      icon: '🐦'
    },
    { 
      platform: 'LinkedIn', 
      engagement: '2.8%', 
      growth: '+5.9%', 
      followers: '15.6K',
      color: '#0A66C2',
      icon: '💼'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Floating Gradient Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4', '#F59E0B', '#10B981'][i % 6]
              }, ${
                ['#A78BFA', '#F472B6', '#60A5FA', '#22D3EE', '#FBBF24', '#34D399'][(i + 3) % 6]
              })`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
              filter: 'blur(15px)'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10">
        <div className="bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mt-16 mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r mt-4 from-purple-300 to-pink-400 bg-clip-text text-transparent">
                  Analytics Pro
                </h1>
                <p className="text-purple-200 text-sm mt-1">Real-time Marketing Dashboard</p>
              </div>
              <div className="text-white text-sm">
                Live
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 pb-20">
        {/* Quick Stats Grid - Improved mobile layout */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl p-3 border border-white/20 backdrop-blur-sm animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-80 group-hover:opacity-100 transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-base animate-bounce">{stat.icon}</span>
                      <p className="text-white/90 text-xs font-medium truncate">{stat.title}</p>
                    </div>
                    <p className="text-lg font-bold text-white mb-1 truncate">
                      <AnimatedNumber value={stat.value} duration={2000} />
                    </p>
                    <p className="text-white/70 text-xs truncate">{stat.description}</p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full flex-shrink-0 ml-2 ${
                    stat.trend === 'up' ? 'bg-green-500/30' : 'bg-red-500/30'
                  }`}>
                    <span className="text-white text-xs">{stat.change}</span>
                    <span className="text-white text-xs">{stat.trend === 'up' ? '↑' : '↓'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Revenue Chart */}
        <div className="bg-black/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 mb-6 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-base">Revenue Analytics</h2>
            <div className="text-white/70 text-xs">Last 6 months</div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="month" 
                  fontSize={10}
                  stroke="rgba(255,255,255,0.7)"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  fontSize={10}
                  stroke="rgba(255,255,255,0.7)"
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '10px',
                    color: 'black',
                    fontSize: '12px'
                  }}
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Bar 
                  dataKey="revenue" 
                  radius={[4, 4, 0, 0]}
                  animationBegin={0}
                  animationDuration={1500}
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="bg-black/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 mb-6 animate-fade-in-up">
          <h2 className="text-white font-semibold text-base mb-4">Campaign Performance</h2>
          <div className="space-y-3">
            {campaignPerformance.map((campaign, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="text-lg flex-shrink-0">{campaign.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">{campaign.name}</p>
                    <p className="text-green-400 text-xs">{campaign.growth}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-3">
                  <p className="text-white font-bold text-sm">${campaign.value.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {socialMetrics.map((platform, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-lg rounded-xl p-3 border border-white/20 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                  <span className="text-base flex-shrink-0">{platform.icon}</span>
                  <span className="text-white text-sm font-medium truncate">{platform.platform}</span>
                </div>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse flex-shrink-0 ml-2"
                  style={{ backgroundColor: platform.color }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-xs">Engagement</span>
                  <span className="text-green-400 text-xs font-bold">{platform.engagement}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-xs">Growth</span>
                  <span className="text-cyan-400 text-xs font-bold">{platform.growth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-xs">Followers</span>
                  <span className="text-white text-xs font-bold truncate">{platform.followers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traffic & Conversions Chart */}
        <div className="bg-black/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 animate-fade-in-up">
          <h2 className="text-white font-semibold text-base mb-4">Traffic & Conversions</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="month" 
                  fontSize={10}
                  stroke="rgba(255,255,255,0.7)"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  fontSize={10}
                  stroke="rgba(255,255,255,0.7)"
                  axisLine={false}
                  tickLine={false}
                  width={40}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '12px'
                  }}
                />
                <Bar 
                  dataKey="traffic" 
                  fill="#8B5CF6"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  name="Traffic"
                />
                <Bar 
                  dataKey="conversions" 
                  fill="#EC4899"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  name="Conversions"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) translateX(5px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) translateX(-5px) rotate(240deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 20s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }

        /* Improved mobile responsiveness */
        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 380px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;