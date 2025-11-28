import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreServices = () => {
  const [activePlatform, setActivePlatform] = useState('google');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    budget: '',
    goals: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const bounceIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const platforms = [
    {
      id: 'google',
      name: 'Google Ads',
      icon: '🔍',
      description: 'Reach customers actively searching for your products or services',
      features: [
        'Search Network Campaigns',
        'Display Network Advertising',
        'YouTube Video Ads',
        'Shopping Campaigns',
        'Google Smart Campaigns'
      ],
      budget: 'From $500/month',
      bestFor: ['Lead Generation', 'E-commerce', 'Local Businesses']
    },
    {
      id: 'facebook',
      name: 'Meta Ads',
      icon: '👥',
      description: 'Target specific demographics and interests across Facebook and Instagram',
      features: [
        'Advanced Audience Targeting',
        'Carousel & Collection Ads',
        'Stories Advertising',
        'Lead Generation Forms',
        'Retargeting Campaigns'
      ],
      budget: 'From $300/month',
      bestFor: ['Brand Awareness', 'E-commerce', 'B2C Products']
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Ads',
      icon: '💼',
      description: 'Reach professionals and decision-makers in your industry',
      features: [
        'B2B Lead Generation',
        'Sponsored Content',
        'Message Ads',
        'Dynamic Ads',
        'Account-Based Marketing'
      ],
      budget: 'From $1,000/month',
      bestFor: ['B2B Services', 'Recruitment', 'Professional Services']
    },
    {
      id: 'amazon',
      name: 'Amazon Advertising',
      icon: '🛒',
      description: 'Capture high-intent shoppers on the world\'s largest e-commerce platform',
      features: [
        'Sponsored Products',
        'Sponsored Brands',
        'Sponsored Display',
        'Amazon DSP',
        'Video Ads'
      ],
      budget: 'From $750/month',
      bestFor: ['E-commerce', 'Product Brands', 'Amazon Sellers']
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Immediate Results',
      description: 'Start driving qualified traffic and leads within hours of campaign launch'
    },
    {
      icon: '🎯',
      title: 'Precise Targeting',
      description: 'Reach your ideal customers based on demographics, behavior, and intent'
    },
    {
      icon: '📊',
      title: 'Measurable ROI',
      description: 'Track every dollar spent with detailed analytics and conversion tracking'
    },
    {
      icon: '🔄',
      title: 'Scalable Growth',
      description: 'Quickly scale successful campaigns while maintaining optimal performance'
    },
    {
      icon: '💰',
      title: 'Cost Control',
      description: 'Set exact budgets and bids to maximize your advertising investment'
    },
    {
      icon: '📈',
      title: 'Real-Time Optimization',
      description: 'Continuously improve performance with data-driven campaign adjustments'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Comprehensive analysis of your goals, audience, and competitive landscape',
      activities: ['Goal Setting', 'Audience Research', 'Keyword Analysis', 'Budget Planning']
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Technical implementation of tracking, ad creation, and platform configuration',
      activities: ['Tracking Setup', 'Ad Creation', 'Landing Pages', 'Bid Strategy']
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Campaign activation with continuous performance monitoring and optimization',
      activities: ['Campaign Launch', 'Performance Tracking', 'A/B Testing', 'Budget Management']
    },
    {
      step: '04',
      title: 'Scale & Expand',
      description: 'Strategic expansion of successful campaigns and exploration of new opportunities',
      activities: ['Performance Analysis', 'Campaign Scaling', 'New Channel Testing', 'ROI Optimization']
    }
  ];

  const caseStudies = [
    {
      client: 'E-commerce Fashion Brand',
      platform: 'Google & Facebook Ads',
      challenge: 'High customer acquisition costs and low conversion rates',
      solution: 'Multi-platform retargeting strategy with dynamic product ads',
      results: [
        '62% reduction in cost per acquisition',
        '185% increase in return on ad spend',
        '3.2x higher conversion rate'
      ],
      budget: '$15,000/month',
      duration: '6 months'
    },
    {
      client: 'B2B SaaS Company',
      platform: 'LinkedIn Ads',
      challenge: 'Low lead quality and poor demo sign-up conversion',
      solution: 'Account-based marketing with targeted content offers',
      results: [
        '45% lower cost per lead',
        '220% more qualified demos',
        '35% faster sales cycle'
      ],
      budget: '$8,000/month',
      duration: '4 months'
    },
    {
      client: 'Local Service Business',
      platform: 'Google Local Services',
      challenge: 'Limited local visibility and inconsistent leads',
      solution: 'Hyper-local targeting with Google Guaranteed program',
      results: [
        '#1 in local search results',
        '78% more service requests',
        '4.8-star average rating'
      ],
      budget: '$2,500/month',
      duration: '3 months'
    }
  ];

  const metrics = [
    { icon: '📱', value: '2.3x', label: 'Higher Conversion Rate' },
    { icon: '💰', value: '48%', label: 'Lower Cost Per Lead' },
    { icon: '🎯', value: '5.2x', label: 'Return on Ad Spend' },
    { icon: '🚀', value: '24/7', label: 'Campaign Management' }
  ];

  const faqs = [
    {
      question: 'How much should I budget for PPC advertising?',
      answer: 'PPC budgets vary based on industry, competition, and goals. Most businesses start with $1,000-$5,000 monthly, while competitive industries may require $10,000+. We recommend starting with a test budget and scaling based on performance.'
    },
    {
      question: 'How long until I see results from PPC?',
      answer: 'You can see initial results within 24-48 hours of campaign launch. However, optimal performance typically takes 2-4 weeks as we gather data and optimize campaigns. Significant ROI is usually achieved within the first 1-3 months.'
    },
    {
      question: 'Do you manage PPC campaigns in-house?',
      answer: 'Yes, all campaigns are managed by our certified PPC specialists. We have Google Ads, Facebook Blueprint, and LinkedIn Marketing certified experts who handle strategy, implementation, and ongoing optimization.'
    },
    {
      question: 'What tracking and reporting do you provide?',
      answer: 'We provide comprehensive tracking including conversion tracking, ROI analysis, and custom dashboards. Clients receive weekly performance reports, monthly strategy reviews, and 24/7 access to real-time campaign data.'
    }
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatform);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
     

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>🚀</span>
                Trusted by 500+ Growing Businesses
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Professional PPC Management
            </motion.h1>

            <motion.p 
              className="text-xl sm:text-2xl mb-8 text-green-100 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Drive immediate, measurable results with data-driven paid advertising campaigns across all major platforms.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={itemVariants}
            >
              <motion.button 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 Get Free PPC Audit
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Book Strategy Call
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
              variants={containerVariants}
            >
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {metric.icon}
                  </motion.div>
                  <motion.div 
                    className="text-2xl font-bold mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 1, type: "spring", stiffness: 200 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-green-200 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          

          

            {/* Platform Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentPlatform && (
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                    whileHover={{ 
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)",
                      y: -5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <motion.div variants={slideInLeft}>
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div 
                            className="text-4xl"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {currentPlatform.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{currentPlatform.name}</h3>
                            <p className="text-green-600 font-semibold">{currentPlatform.budget}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg mb-6">{currentPlatform.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-bold text-gray-800 mb-3">Best For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentPlatform.bestFor.map((item, index) => (
                              <motion.span
                                key={index}
                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                              >
                                {item}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={slideInRight}>
                        <h4 className="font-bold text-gray-800 mb-4">Campaign Features:</h4>
                        <ul className="space-y-3">
                          {currentPlatform.features.map((feature, index) => (
                            <motion.li 
                              key={index} 
                              className="flex items-center text-gray-600"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.span 
                                className="text-green-500 mr-3 text-xl"
                                whileHover={{ scale: 1.2 }}
                              >
                                ✓
                              </motion.span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
      
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Professional PPC Management?
            </h2>
            <p className="text-xl text-gray-600">
              Maximize your advertising ROI with expert campaign management
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="text-3xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Our PPC Management Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to driving measurable advertising results
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                custom={index}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                <ul className="space-y-2 text-left">
                  {step.activities.map((activity, activityIndex) => (
                    <motion.li 
                      key={activityIndex} 
                      className="text-sm text-gray-600 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: activityIndex * 0.1 + index * 0.2 }}
                    >
                      <motion.span 
                        className="text-green-500 mr-2"
                        whileHover={{ scale: 1.5 }}
                      >
                        •
                      </motion.span>
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section 
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              PPC Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real results from our managed PPC campaigns
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{study.client}</h3>
                    <p className="text-green-400 text-sm">{study.platform}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Budget</div>
                    <div className="text-green-400 font-semibold">{study.budget}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-300">Challenge:</h4>
                  <p className="text-gray-400 text-sm">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-300">Solution:</h4>
                  <p className="text-gray-400 text-sm">{study.solution}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-300">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <motion.li 
                        key={resultIndex} 
                        className="text-green-400 text-sm flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: resultIndex * 0.1 + index * 0.2 }}
                      >
                        <motion.span 
                          className="mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: resultIndex * 0.5 }}
                        >
                          📈
                        </motion.span>
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-400">
                  Duration: {study.duration}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              PPC Advertising FAQs
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our PPC management services
            </p>
          </motion.div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      
    
    
    </motion.div>
  );
};

export default ExploreServices;