import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  TrendingUp,
  Analytics,
  Speed,
  Security,
  AutoGraph,
  CheckCircle,
  Timeline,
  Dashboard,
  ShowChart,
  PlayArrow,
  People,
  Campaign,
  Groups,
  Insights,
  Schedule,
  RocketLaunch,
  Search,
  Email,
  Smartphone,
  DesignServices,
  BarChart,
  ArrowRight,
  ArrowDownward,
  TrendingFlat,
  Star,
  Bolt,
  TrendingDown,
  Percent,
  Timeline as TimelineIcon,
  Assessment,
  Psychology
} from "@mui/icons-material";

const Home = () => {
  const [activeService, setActiveService] = useState('seo');
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const heroRef = useRef(null);
  
  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const marketingServices = [
    {
      id: 'seo',
      name: 'SEO',
      icon: <Search />,
      description: 'Dominate search rankings with comprehensive optimization strategies',
      features: [
        'Technical SEO Audit',
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Content Strategy',
        'Link Building',
        'Local SEO'
      ],
      budget: 'From $999/month',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ppc',
      name: 'PPC Advertising',
      icon: <BarChart />,
      description: 'Drive immediate results with data-driven paid advertising campaigns',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Remarketing Campaigns',
        'Conversion Optimization',
        'ROI Tracking'
      ],
      budget: 'From $1,499/month',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'social',
      name: 'Social Media Marketing',
      icon: <Groups />,
      description: 'Build brand awareness and engagement across social platforms',
      features: [
        'Content Strategy',
        'Community Management',
        'Social Advertising',
        'Influencer Partnerships',
        'Performance Analytics',
        'Crisis Management'
      ],
      budget: 'From $1,199/month',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'content',
      name: 'Content Marketing',
      icon: <DesignServices />,
      description: 'Create valuable content that attracts and converts your audience',
      features: [
        'Content Strategy',
        'Blog Writing & Optimization',
        'Video Production',
        'Infographic Design',
        'Email Newsletters',
        'Content Distribution'
      ],
      budget: 'From $1,299/month',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'email',
      name: 'Email Marketing',
      icon: <Email />,
      description: 'Nurture leads and drive conversions with personalized email campaigns',
      features: [
        'Email Strategy Development',
        'Automated Workflows',
        'List Segmentation',
        'A/B Testing',
        'Performance Analytics',
        'GDPR Compliance'
      ],
      budget: 'From $799/month',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'mobile',
      name: 'Mobile Marketing',
      icon: <Smartphone />,
      description: 'Reach customers on their mobile devices with optimized campaigns',
      features: [
        'Mobile-First Design',
        'SMS Marketing',
        'Push Notifications',
        'App Store Optimization',
        'Mobile Advertising',
        'Location-Based Marketing'
      ],
      budget: 'From $899/month',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const marketingFeatures = [
    {
      icon: <Psychology />,
      title: "AI-Powered Insights",
      description: "Advanced analytics and machine learning to predict trends and optimize campaigns",
      color: "from-purple-600 to-pink-600",
      delay: 0
    },
    {
      icon: <Assessment />,
      title: "Real-Time Analytics",
      description: "Live dashboards with actionable insights for data-driven decisions",
      color: "from-blue-600 to-cyan-600",
      delay: 100
    },
    {
      icon: <Bolt />,
      title: "Rapid Implementation",
      description: "Quick campaign setup with continuous optimization for maximum impact",
      color: "from-green-600 to-emerald-600",
      delay: 200
    },
    {
      icon: <TimelineIcon />,
      title: "Predictive ROI",
      description: "Forecast campaign performance and ROI before implementation",
      color: "from-orange-600 to-red-600",
      delay: 300
    }
  ];

  const marketingStats = [
    { number: "300%", label: "Average ROI", icon: <TrendingUp />, color: "from-green-500 to-emerald-500" },
    { number: "245%", label: "Leads Growth", icon: <ArrowDownward />, color: "from-blue-500 to-cyan-500" },
    { number: "89%", label: "Cost Reduction", icon: <TrendingDown />, color: "from-orange-500 to-red-500" },
    { number: "99%", label: "Client Satisfaction", icon: <Star />, color: "from-purple-500 to-pink-500" }
  ];

  const caseStudies = [
    {
      client: "Tech Startup",
      service: "Full Stack Marketing",
      challenge: "Zero to market in 6 months",
      solution: "Integrated growth strategy with rapid testing",
      results: [
        "450% revenue growth",
        "320% user acquisition",
        "65% lower CAC"
      ],
      budget: "$15,000/month",
      duration: "6 months",
      growth: 450
    },
    {
      client: "E-commerce Giant",
      service: "Performance Marketing",
      challenge: "Plateaued growth at scale",
      solution: "Advanced attribution modeling & retargeting",
      results: [
        "280% ROAS increase",
        "45% lower CPA",
        "3.5x conversion rate"
      ],
      budget: "$50,000/month",
      duration: "8 months",
      growth: 280
    },
    {
      client: "B2B Enterprise",
      service: "Account-Based Marketing",
      challenge: "Long sales cycles, low engagement",
      solution: "Personalized multi-channel approach",
      results: [
        "220% more qualified leads",
        "40% shorter sales cycle",
        "5x engagement rate"
      ],
      budget: "$25,000/month",
      duration: "4 months",
      growth: 220
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const currentService = marketingServices.find(s => s.id === activeService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-16 relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-200/10 to-purple-200/10"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"
      >
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <motion.span 
                  className="text-white"
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(168, 85, 247, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Digital Presence
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Data-driven marketing solutions that deliver 
                <span className="text-blue-400 font-semibold"> measurable results </span>
                and accelerate growth
              </motion.p>
            </motion.div>

            {/* Animated CTA buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white overflow-hidden inline-flex items-center gap-2"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/demo"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  <PlayArrow />
                  <span>Watch Demo</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated metrics */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { value: "300%", label: "Average ROI" },
                { value: "24/7", label: "Monitoring" },
                { value: "99%", label: "Uptime" },
                { value: "<3mo", label: "Time to ROI" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownward className="text-white/50 text-2xl" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Marketing Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to grow, from acquisition to retention
            </p>
          </motion.div>

          {/* Animated service cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketingServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setActiveService(service.id)}
                className={`relative cursor-pointer group ${
                  activeService === service.id 
                    ? 'ring-2 ring-blue-500 ring-offset-2' 
                    : ''
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full transition-all duration-300 group-hover:shadow-2xl">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-blue-600 font-semibold">
                    {service.budget}
                  </div>
                  <motion.div 
                    className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowRight className="text-blue-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details Panel */}
          <AnimatePresence mode="wait">
            {currentService && (
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentService.color} flex items-center justify-center text-white`}>
                          {currentService.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {currentService.name}
                          </h3>
                          <p className="text-blue-600 font-semibold">
                            {currentService.budget}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg mb-6">
                        {currentService.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Included Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentService.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                          >
                            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                              <CheckCircle className="text-green-600 text-sm" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets proven marketing strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '400% 400%',
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ number: 0 }}
                  whileInView={{ number: parseInt(stat.number) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {({ number }) => `${Math.floor(number)}%`}
                </motion.div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies with Horizontal Scroll Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from brands that trusted our expertise
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="min-w-[90vw] md:min-w-[600px] snap-center"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100 h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {study.client}
                        </h3>
                        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                          {study.service}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="text-xl font-bold text-green-600">
                          {study.budget}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Results:</h4>
                        <div className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <motion.div
                              key={resultIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: resultIndex * 0.1 }}
                              className="flex items-center gap-3 text-green-600"
                            >
                              <TrendingUp />
                              <span>{result}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated growth bar */}
                    <div className="mt-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Growth Achieved</span>
                        <span className="text-2xl font-bold text-gray-900">
                          {study.growth}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(study.growth, 100)}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Particle Animation */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          {/* Animated particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Growth?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ companies already scaling with our platform
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
                >
                  Start Free Trial
                  <RocketLaunch />
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/demo"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <PlayArrow />
                  Watch Full Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated counter */}
            <motion.div 
              className="mt-12 flex justify-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                { value: "24", label: "Hours to Setup" },
                { value: "500+", label: "Happy Clients" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;