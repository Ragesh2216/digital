import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  BarChart
} from "@mui/icons-material";

const Home = () => {
  const [activeService, setActiveService] = useState('seo');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const marketingServices = [
    {
      id: 'seo',
      name: 'SEO',
      icon: <Search className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
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
      icon: <BarChart className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
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
      icon: <Groups className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
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
      icon: <DesignServices className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
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
      icon: <Email className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
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
      icon: <Smartphone className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
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
      icon: <AutoGraph className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Data-Driven Strategy",
      description: "AI-powered insights and analytics to optimize your marketing performance",
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      icon: <Analytics className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "ROI-Focused Approach",
      description: "Every campaign is designed to deliver measurable business results",
      color: "from-blue-500 to-cyan-500",
      delay: 100
    },
    {
      icon: <Speed className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Rapid Implementation",
      description: "Quick campaign setup with continuous optimization for maximum impact",
      color: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: <Security className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Transparent Reporting",
      description: "Clear, comprehensive reporting with actionable insights",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const marketingStats = [
    { number: "300%", label: "Average ROI Increase", icon: <TrendingUp /> },
    { number: "245%", label: "More Qualified Leads", icon: <CheckCircle /> },
    { number: "89%", label: "Faster Growth", icon: <Speed /> },
    { number: "24/7", label: "Campaign Monitoring", icon: <Security /> }
  ];

  const marketingProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive audit of your current marketing and business goals",
      icon: <Analytics />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom marketing roadmap tailored to your specific objectives",
      icon: <Dashboard />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Multi-channel campaign execution with best practices",
      icon: <RocketLaunch />
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous improvement based on performance data and insights",
      icon: <AutoGraph />
    },
    {
      step: "05",
      title: "Scale & Expand",
      description: "Strategic expansion of successful campaigns and channels",
      icon: <ShowChart />
    }
  ];

  const caseStudies = [
    {
      client: "E-commerce Fashion Brand",
      service: "SEO + Social Media",
      challenge: "Low organic visibility and poor social engagement",
      solution: "Integrated SEO and social media strategy with influencer partnerships",
      results: [
        "320% increase in organic traffic",
        "185% more social media engagement",
        "245% higher conversion rate"
      ],
      budget: "$12,000/month",
      duration: "6 months"
    },
    {
      client: "B2B SaaS Company",
      service: "PPC + Content Marketing",
      challenge: "High customer acquisition costs",
      solution: "Account-based marketing with targeted content and PPC",
      results: [
        "45% lower cost per lead",
        "220% more qualified demos",
        "3.2x higher ROI"
      ],
      budget: "$8,500/month",
      duration: "4 months"
    },
    {
      client: "Local Service Business",
      service: "Local SEO + Google Ads",
      challenge: "Limited local visibility and inconsistent leads",
      solution: "Hyper-local SEO with Google Guaranteed and local PPC",
      results: [
        "#1 in local search results",
        "78% more service requests",
        "65% lower cost per acquisition"
      ],
      budget: "$3,500/month",
      duration: "3 months"
    }
  ];

  const benefitsData = [
    {
      title: "Increased Revenue",
      description: "Drive more qualified traffic and convert visitors into customers",
      improvement: "300%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Brand Authority",
      description: "Build trust and establish your brand as an industry leader",
      improvement: "245%",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Customer Loyalty",
      description: "Create lasting relationships that drive repeat business",
      improvement: "189%",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const currentService = marketingServices.find(s => s.id === activeService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-8 min-[320px]:py-10 sm:py-12 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 left-4 w-8 h-8 min-[320px]:w-10 min-[320px]:h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-blue-500 rounded-full opacity-20"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 8, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-4 min-[320px]:right-6 sm:right-10 lg:right-20 w-6 h-6 min-[320px]:w-8 min-[320px]:h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-purple-500 rounded-full opacity-20"
          ></motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-[320px]:mb-8 lg:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Comprehensive Digital Marketing
            </h1>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 lg:mb-8 text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              End-to-end digital marketing solutions that drive growth, increase revenue, and build lasting customer relationships.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-[320px]:w-auto"
              >
                <Link 
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg transition-all duration-300 shadow-lg sm:shadow-2xl w-full text-center"
                >
                  Get Free Marketing Audit
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-[320px]:w-auto"
              >
                <Link 
                  to="/case-studies"
                  className="inline-block border border-white min-[320px]:border-2 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full text-center"
                >
                  <PlayArrow className="mr-1 min-[320px]:mr-2 inline-block text-sm" />
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Marketing Metrics Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-4xl mx-auto mt-6 min-[320px]:mt-7 sm:mt-8 lg:mt-12 px-3 min-[320px]:px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 lg:p-6 border border-white/20">
            <div className="flex flex-col min-[320px]:flex-row items-center justify-between mb-3 min-[320px]:mb-4 gap-1 min-[320px]:gap-2">
              <div className="text-white font-semibold text-sm min-[320px]:text-base sm:text-lg">Marketing Performance Dashboard</div>
              <div className="text-blue-300 text-xs min-[320px]:text-sm">Live Preview</div>
            </div>
            <div className="h-16 min-[320px]:h-18 sm:h-20 lg:h-32 bg-black/20 rounded-lg p-2 min-[320px]:p-3 lg:p-4">
              <div className="flex items-end justify-between h-full space-x-1 lg:space-x-2">
                {[20, 35, 50, 65, 80, 95, 120, 145, 170, 200, 230, 245].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.min(height, 100)}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`w-2 min-[320px]:w-2.5 sm:w-3 lg:w-4 xl:w-8 rounded-t ${
                      height > 180 ? 'bg-green-400' : 
                      height > 120 ? 'bg-blue-400' : 'bg-purple-400'
                    }`}
                  ></motion.div>
                ))}
              </div>
            </div>
            <div className="flex flex-col min-[320px]:flex-row justify-between text-xs text-gray-300 mt-1 min-[320px]:mt-2 gap-1">
              <span className="text-xs">Month 1</span>
              <span className="text-blue-300 text-xs">Accelerated Growth</span>
              <span className="text-xs">Current</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-8 min-[320px]:h-10 sm:h-12 lg:h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Complete Digital Marketing Services
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              From SEO to social media, we offer comprehensive solutions to grow your business online.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 min-[320px]:gap-3 sm:gap-4 mb-6 min-[320px]:mb-8">
              {marketingServices.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-3 min-[320px]:px-4 sm:px-5 py-2 min-[320px]:py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm min-[320px]:text-base ${
                    activeService === service.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1 min-[320px]:mr-2">{service.icon}</span>
                  {service.name}
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentService && (
                  <motion.div 
                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 lg:p-8 shadow-xl border border-gray-100"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[320px]:gap-8">
                      <div>
                        <div className="flex items-center gap-4 mb-4 min-[320px]:mb-6">
                          <div className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${currentService.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white`}>
                            {currentService.icon}
                          </div>
                          <div>
                            <h3 className="text-xl min-[320px]:text-2xl sm:text-3xl font-bold text-gray-900">{currentService.name}</h3>
                            <p className="text-blue-600 font-semibold text-sm min-[320px]:text-base">{currentService.budget}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm min-[320px]:text-base lg:text-lg mb-4 min-[320px]:mb-6 leading-relaxed">
                          {currentService.description}
                        </p>
                        
                        <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 min-[320px]:p-4">
                          <h4 className="font-bold text-gray-800 mb-2 min-[320px]:mb-3 text-sm min-[320px]:text-base">Ideal For:</h4>
                          <div className="flex flex-wrap gap-1 min-[320px]:gap-2">
                            {['Startups', 'E-commerce', 'B2B Companies', 'Local Businesses', 'Enterprise'].map((item, index) => (
                              <motion.span
                                key={index}
                                className="bg-white text-blue-800 px-2 min-[320px]:px-3 py-1 rounded-full text-xs min-[320px]:text-sm font-medium border border-blue-200"
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
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-3 min-[320px]:mb-4 text-lg min-[320px]:text-xl">Service Includes:</h4>
                        <div className="grid grid-cols-1 min-[320px]:grid-cols-2 gap-2 min-[320px]:gap-3">
                          {currentService.features.map((feature, index) => (
                            <motion.div 
                              key={index}
                              className="flex items-center text-gray-600 bg-white rounded-lg p-2 min-[320px]:p-3 shadow-sm border border-gray-100"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.span 
                                className="text-green-500 mr-2 min-[320px]:mr-3 text-lg"
                                whileHover={{ scale: 1.2 }}
                              >
                                ✓
                              </motion.span>
                              <span className="text-xs min-[320px]:text-sm">{feature}</span>
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
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Why Choose Our Digital Marketing?
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-4 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8">
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 text-center"
              >
                <div className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-base min-[320px]:text-lg sm:text-xl font-bold text-gray-900 mb-2 min-[320px]:mb-3 lg:mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs min-[320px]:text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 min-[320px]:grid-cols-2 lg:grid-cols-4 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8"
          >
            {marketingStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 min-[320px]:p-4 lg:p-6"
              >
                <div className="w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 min-[320px]:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium text-xs min-[320px]:text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Our Digital Marketing Process
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              A proven framework for driving sustainable growth and measurable results.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-5 gap-3 min-[320px]:gap-4 lg:gap-8 relative z-10">
              {marketingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 lg:p-6 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-base min-[320px]:text-lg lg:text-xl mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-blue-600 mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 min-[320px]:mb-2 lg:mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs min-[320px]:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320px]:mb-4 leading-tight">
              Digital Marketing Success Stories
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              Real results from our comprehensive digital marketing campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 lg:p-8 hover:bg-gray-750 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-3 min-[320px]:mb-4">
                  <div>
                    <h3 className="text-lg min-[320px]:text-xl font-bold mb-1">{study.client}</h3>
                    <p className="text-blue-400 text-sm">{study.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Budget</div>
                    <div className="text-green-400 font-semibold text-sm min-[320px]:text-base">{study.budget}</div>
                  </div>
                </div>

                <div className="mb-3 min-[320px]:mb-4">
                  <h4 className="font-semibold mb-1 min-[320px]:mb-2 text-gray-300 text-sm">Challenge:</h4>
                  <p className="text-gray-400 text-xs min-[320px]:text-sm">{study.challenge}</p>
                </div>

                <div className="mb-3 min-[320px]:mb-4">
                  <h4 className="font-semibold mb-1 min-[320px]:mb-2 text-gray-300 text-sm">Solution:</h4>
                  <p className="text-gray-400 text-xs min-[320px]:text-sm">{study.solution}</p>
                </div>

                <div className="mb-3 min-[320px]:mb-4">
                  <h4 className="font-semibold mb-1 min-[320px]:mb-2 text-gray-300 text-sm">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <motion.li 
                        key={resultIndex} 
                        className="text-green-400 text-xs min-[320px]:text-sm flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Transform Your Business Growth
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              Achieve measurable results that impact your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-16 h-16 min-[320px]:w-20 min-[320px]:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-full -mr-8 -mt-8 min-[320px]:-mr-10 min-[320px]:-mt-10 lg:-mr-12 lg:-mt-12 opacity-10`}></div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${benefit.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto`}
                >
                  <TrendingUp className="text-lg min-[320px]:text-xl lg:text-2xl" />
                </motion.div>
                
                <h3 className="text-base min-[320px]:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {benefit.title}
                </h3>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="text-xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 min-[320px]:mb-3 lg:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {benefit.improvement}
                </motion.div>
                
                <p className="text-gray-600 text-center leading-relaxed text-xs min-[320px]:text-sm sm:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320px]:mb-4 lg:mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 lg:mb-8 text-blue-100 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto leading-relaxed">
              Get your free marketing audit and discover how we can drive measurable growth for your business.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-[320px]:w-auto"
              >
                <Link 
                  to="/contact"
                  className="inline-block bg-white text-gray-900 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg sm:shadow-2xl w-full text-center"
                >
                  Get Free Marketing Audit
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-[320px]:w-auto"
              >
                <Link 
                  to="/contact"
                  className="inline-block border border-white min-[320px]:border-2 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full text-center"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-3 min-[320px]:mb-4">Calculate Your Marketing ROI</h3>
            <p className="text-gray-400 mb-4 min-[320px]:mb-5 lg:mb-8 text-sm min-[320px]:text-base">See the potential impact of professional digital marketing</p>
            
            <div className="grid grid-cols-1 min-[320px]:grid-cols-3 gap-3 min-[320px]:gap-4 lg:gap-6 mt-4 min-[320px]:mt-5 lg:mt-8">
              {[
                { label: "Average Monthly ROI", value: "300%" },
                { label: "Increase in Qualified Leads", value: "245%" },
                { label: "ROI Timeline", value: "< 3 Months" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 lg:p-6"
                >
                  <div className="text-lg min-[320px]:text-xl sm:text-2xl font-bold text-blue-400 mb-1 min-[320px]:mb-2">{item.value}</div>
                  <div className="text-gray-400 text-xs min-[320px]:text-sm leading-tight">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home ;