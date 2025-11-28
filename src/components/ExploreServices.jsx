import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreServices = () => {
  const [activePlatform, setActivePlatform] = useState('google');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const platforms = [
    {
      id: 'google',
      name: 'Google Ads',
      icon: '🔍',
      description: 'Reach customers actively searching for your products or services',
      budget: 'From $500/month'
    },
    {
      id: 'facebook',
      name: 'Meta Ads',
      icon: '👥',
      description: 'Target specific demographics across Facebook and Instagram',
      budget: 'From $300/month'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Ads',
      icon: '💼',
      description: 'Reach professionals and decision-makers',
      budget: 'From $1,000/month'
    },
    {
      id: 'amazon',
      name: 'Amazon Ads',
      icon: '🛒',
      description: 'Capture high-intent shoppers on Amazon',
      budget: 'From $750/month'
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Immediate Results',
      description: 'Start driving traffic within hours'
    },
    {
      icon: '🎯',
      title: 'Precise Targeting',
      description: 'Reach your ideal customers'
    },
    {
      icon: '📊',
      title: 'Measurable ROI',
      description: 'Track every dollar spent'
    },
    {
      icon: '🔄',
      title: 'Scalable Growth',
      description: 'Scale successful campaigns'
    }
  ];

  const metrics = [
    { icon: '📱', value: '2.3x', label: 'Higher Conversion' },
    { icon: '💰', value: '48%', label: 'Lower Cost' },
    { icon: '🎯', value: '5.2x', label: 'ROI' },
    { icon: '🚀', value: '24/7', label: 'Management' }
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden w-full">
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
    <div className="max-w-7xl mt-16 mx-auto px-4 py-6">
      <div className="flex flex-col items-center justify-center text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-3">
            PPC Services
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">Professional Advertising Management</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 pb-20">
        {/* Hero Stats */}
        <motion.div 
          className="grid grid-cols-2 gap-3 mb-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-xl p-3 border border-white/20 backdrop-blur-sm animate-fade-in-up group"
              variants={itemVariants}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="text-2xl mb-1">{metric.icon}</div>
                <div className="text-lg font-bold text-white mb-1">{metric.value}</div>
                <div className="text-white/70 text-xs">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {platforms.map((platform, index) => (
            <motion.button
              key={platform.id}
              onClick={() => setActivePlatform(platform.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                activePlatform === platform.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-black/20 text-white/80 hover:bg-white/10 border border-white/10'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base">{platform.icon}</span>
              {platform.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Platform Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            {currentPlatform && (
              <motion.div 
                className="bg-black/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 animate-fade-in-up"
                whileHover={{ y: -2 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {currentPlatform.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{currentPlatform.name}</h3>
                      <p className="text-purple-300 font-semibold text-sm">{currentPlatform.budget}</p>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{currentPlatform.description}</p>
                  
                  <Link to="/contact">
                    <motion.button 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-colors w-full max-w-[200px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start with {currentPlatform.name}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-3 mb-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-black/20 backdrop-blur-lg rounded-xl p-3 border border-white/20 animate-fade-in-up group"
              variants={itemVariants}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
              whileHover={{ y: -2 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                <p className="text-white/70 text-xs">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-lg font-bold text-white mb-2"
            variants={itemVariants}
          >
            Ready to Drive More Leads?
          </motion.h2>
          <motion.p 
            className="text-white/80 text-sm mb-4"
            variants={itemVariants}
          >
            Get your free PPC audit and discover how we can help you achieve your goals.
          </motion.p>
          <motion.div 
            className="flex flex-col gap-3 justify-center"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg font-bold text-sm hover:from-purple-600 hover:to-pink-600 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Get Free Audit
              </motion.button>
            </Link>
            <Link to="/404">
              <motion.button 
                className="w-full border-2 border-white/30 text-white px-4 py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
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

export default ExploreServices;