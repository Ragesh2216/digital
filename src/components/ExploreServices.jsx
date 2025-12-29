import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence ,useInView } from 'framer-motion';
import { 
  TrendingUp,
  Bolt,
  RocketLaunch,
  Analytics,
  AutoGraph,
  Speed,
  Security,
  Smartphone,
  Language,
  Campaign,
  People,
  ShowChart,
  ArrowRight,
  ArrowDownward,
  Star,
  CheckCircle,
  Timeline,
  Devices,
  LocalFireDepartment,
  TrendingFlat
} from '@mui/icons-material';

// Fix: Add function keyword or use arrow function
const ExploreServices = () => {
  const [activeTrend, setActiveTrend] = useState('ai');
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const trendsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const heroControls = useAnimation();
  const statsControls = useAnimation();
  const trendsControls = useAnimation();
  const ctaControls = useAnimation();
  
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const trendsInView = useInView(trendsRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
  }, [heroControls, heroInView]);

  useEffect(() => {
    if (statsInView) {
      statsControls.start('visible');
    }
  }, [statsControls, statsInView]);

  useEffect(() => {
    if (trendsInView) {
      trendsControls.start('visible');
    }
  }, [trendsControls, trendsInView]);

  useEffect(() => {
    if (ctaInView) {
      ctaControls.start('visible');
    }
  }, [ctaControls, ctaInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  // Trending Digital Services
  const trendingServices = [
    {
      id: 'ai',
      name: 'AI-Powered Marketing',
      icon: <AutoGraph />,
      description: 'Leverage artificial intelligence for predictive analytics and automated optimization',
      features: [
        'Predictive Customer Insights',
        'Automated Ad Optimization',
        'AI Content Generation',
        'Real-time Performance Analysis'
      ],
      budget: 'From $1,999/month',
      color: 'from-purple-500 to-pink-500',
      growth: '350%',
      demand: 'High'
    },
    {
      id: 'voice',
      name: 'Voice Search Optimization',
      icon: <Language />,
      description: 'Optimize for voice-activated devices and natural language queries',
      features: [
        'Voice SEO Strategy',
        'Conversational Content',
        'Local Voice Optimization',
        'Smart Speaker Integration'
      ],
      budget: 'From $1,299/month',
      color: 'from-blue-500 to-cyan-500',
      growth: '280%',
      demand: 'Growing'
    },
    {
      id: 'metaverse',
      name: 'Metaverse Marketing',
      icon: <Devices />,
      description: 'Establish presence in virtual worlds and immersive digital experiences',
      features: [
        'Virtual Storefronts',
        'NFT Integration',
        'AR/VR Campaigns',
        'Digital Community Building'
      ],
      budget: 'From $2,499/month',
      color: 'from-green-500 to-emerald-500',
      growth: '420%',
      demand: 'Emerging'
    },
    {
      id: 'video',
      name: 'Short-Form Video',
      icon: <Smartphone />,
      description: 'Capture attention with engaging short-form video content across platforms',
      features: [
        'TikTok Strategy',
        'Reels & Shorts Production',
        'Video SEO',
        'Interactive Content'
      ],
      budget: 'From $1,599/month',
      color: 'from-orange-500 to-red-500',
      growth: '310%',
      demand: 'High'
    }
  ];

  // Digital Transformation Stats
  const transformationStats = [
    { 
      icon: <TrendingUp />, 
      value: '89%', 
      label: 'Digital Adoption',
      description: 'Businesses accelerating digital transformation'
    },
    { 
      icon: <Bolt />, 
      value: '3.2x', 
      label: 'Growth Rate',
      description: 'Digital-first companies grow faster'
    },
    { 
      icon: <People />, 
      value: '72%', 
      label: 'Market Reach',
      description: 'Increase in potential audience'
    },
    { 
      icon: <Analytics />, 
      value: '45%', 
      label: 'Cost Reduction',
      description: 'Through automation & optimization'
    }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      icon: <RocketLaunch />,
      title: 'Rapid Implementation',
      description: 'Get your digital strategy live in weeks, not months',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Security />,
      title: 'Enterprise Security',
      description: 'Bank-level security for all digital assets and data',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Speed />,
      title: 'Performance Focused',
      description: 'Lightning-fast solutions for optimal user experience',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <ShowChart />,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business',
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive analysis of your digital presence',
      icon: <Analytics />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom roadmap for digital transformation',
      icon: <Campaign />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Multi-channel deployment and integration',
      icon: <RocketLaunch />
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous improvement and scaling',
      icon: <AutoGraph />
    }
  ];

  const currentTrend = trendingServices.find(t => t.id === activeTrend);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        initial={{ width: 0 }}
        animate={{ width: `${(scrollY / (document.body?.scrollHeight || 1000)) * 100}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      />

      {/* Hero Section - Optimized for 320px */}
      <section 
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-16"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${Math.random() * 80 + 20}px`,
                height: `${Math.random() * 80 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['#8B5CF6', '#EC4899', '#3B82F6'][i % 3]
                } 0%, transparent 70%)`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroControls}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium mb-4">
                <LocalFireDepartment className="mr-1 text-sm" />
                Trending Now
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 px-2 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Transformation
              </span>
              <br />
              <span className="text-white">For The Modern Era</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-sm xs:text-base sm:text-lg text-gray-300 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto mb-6 px-2 leading-relaxed"
            >
              Cutting-edge digital services powered by AI, automation, and data-driven insights to propel your business forward
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center px-2 mb-8"
            >
              <Link to="/contact">
                <motion.button
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Digital Journey
                </motion.button>
              </Link>
              <Link to="/404">
                <motion.button
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.button>
              </Link>
            </motion.div>

            {/* Animated Stats Preview */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 max-w-sm mx-auto px-2"
            >
              {[
                { value: '300%', label: 'ROI' },
                { value: '24/7', label: 'Support' },
                { value: '99.9%', label: 'Uptime' },
                { value: '<30', label: 'Days Setup' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                  whileHover={{ y: -2 }}
                >
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDownward className="text-white/50 text-xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsControls}
            className="text-center mb-8"
          >
            <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Digital Transformation Impact
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
              Real results from businesses embracing digital innovation
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={statsControls}
          >
            {transformationStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 text-center"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-3 mx-auto`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trending Services Section */}
      <section ref={trendsRef} className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={trendsControls}
            className="text-center mb-8"
          >
            <motion.div variants={itemVariants} className="mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                <TrendingUp className="mr-1 text-sm" />
                Trending Digital Services 2024
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              What's Hot in Digital
            </motion.h2>
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
              Stay ahead with the latest digital marketing innovations
            </motion.p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate={trendsControls}
          >
            {trendingServices.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTrend(service.id)}
                variants={itemVariants}
                className={`px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeTrend === service.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.icon}
                {service.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Service Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrend}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              {currentTrend && (
                <motion.div 
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-lg"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentTrend.color} flex items-center justify-center text-white`}>
                          {currentTrend.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{currentTrend.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-semibold text-sm">{currentTrend.budget}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              currentTrend.demand === 'High' 
                                ? 'bg-green-100 text-green-700'
                                : currentTrend.demand === 'Growing'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-purple-100 text-purple-700'
                            }`}>
                              {currentTrend.growth} Growth
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {currentTrend.description}
                      </p>
                      <Link to="/404">
                        <motion.button 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-purple-600 transition-colors w-full sm:w-auto"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Explore {currentTrend.name}
                        </motion.button>
                      </Link>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {currentTrend.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Why Choose Digital Transformation
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
              Comprehensive solutions for modern business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200 text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our 4-Step Process
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
              A proven methodology for digital success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-xl p-5 border border-gray-200"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={ctaControls}
            className="text-center"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready for Digital Transformation?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-blue-100 mb-6 max-w-sm sm:max-w-md md:max-w-xl mx-auto leading-relaxed"
            >
              Get your free digital audit and discover how we can accelerate your business growth
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/contact">
                <motion.button 
                  className="w-full sm:w-auto bg-white text-gray-900 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Digital Audit
                </motion.button>
              </Link>
              <Link to="/404">
                <motion.button 
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Success Stories
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center gap-4 text-white/80"
            >
              <div className="flex items-center gap-2 text-sm">
                <Star className="text-yellow-300" />
                <span>4.9/5 Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="text-green-300" />
                <span>100+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Timeline className="text-blue-300" />
                <span>300% Average ROI</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExploreServices;