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
      icon: <Search className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      icon: <BarChart className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      icon: <Groups className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      icon: <DesignServices className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      icon: <Email className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      icon: <Smartphone className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      icon: <AutoGraph className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
      title: "Data-Driven Strategy",
      description: "AI-powered insights and analytics to optimize your marketing performance",
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      icon: <Analytics className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
      title: "ROI-Focused Approach",
      description: "Every campaign is designed to deliver measurable business results",
      color: "from-blue-500 to-cyan-500",
      delay: 100
    },
    {
      icon: <Speed className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
      title: "Rapid Implementation",
      description: "Quick campaign setup with continuous optimization for maximum impact",
      color: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: <Security className="text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl" />,
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
      {/* Hero Section - Optimized for 320px */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-6 px-3 sm:py-8 sm:px-4 lg:py-12 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Simplified Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-blue-500 rounded-full opacity-20"
          ></motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2">
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text inline-block">
                Comprehensive Digital Marketing
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto px-1 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
              End-to-end digital marketing solutions that drive growth, increase revenue, and build lasting customer relationships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-1">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 shadow-md w-full text-center"
                >
                  Get Free Marketing Audit
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  to="/case-studies"
                  className="inline-block border border-white text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 w-full text-center"
                >
                  <PlayArrow className="mr-1 sm:mr-2 inline-block" />
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Simplified Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 sm:mt-5 lg:mt-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20">
              <div className="text-white font-semibold text-xs sm:text-sm mb-2">Marketing Performance Dashboard</div>
              <div className="h-12 sm:h-14 md:h-16 lg:h-20 bg-black/20 rounded-lg p-1 sm:p-2">
                <div className="flex items-end justify-between h-full space-x-0.5 sm:space-x-1">
                  {[20, 35, 50, 65, 80, 95, 120, 145, 170, 200, 230, 245].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.min(height, 100)}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`w-1 sm:w-1.5 md:w-2 lg:w-2.5 rounded-t ${
                        height > 180 ? 'bg-green-400' : 
                        height > 120 ? 'bg-blue-400' : 'bg-purple-400'
                      }`}
                    ></motion.div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-300 mt-1">
                <span className="text-[10px] sm:text-xs">Month 1</span>
                <span className="text-blue-300 text-[10px] sm:text-xs">Growth</span>
                <span className="text-[10px] sm:text-xs">Current</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-white px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Complete Digital Marketing Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              From SEO to social media, we offer comprehensive solutions to grow your business online.
            </p>
          </div>

          {/* Service Tabs - Scrollable on mobile */}
          <div className="mb-6 sm:mb-8">
            <div className="flex overflow-x-auto pb-3 gap-2 -mx-3 px-3 sm:flex-wrap sm:justify-center sm:overflow-visible sm:gap-3">
              {marketingServices.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex-shrink-0 px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                    activeService === service.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1 sm:mr-2">{service.icon}</span>
                  {service.name}
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <div className="mt-4 sm:mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentService && (
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow border border-gray-100">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${currentService.color} rounded-lg flex items-center justify-center text-white`}>
                              {currentService.icon}
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{currentService.name}</h3>
                              <p className="text-blue-600 font-semibold text-xs sm:text-sm">{currentService.budget}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                            {currentService.description}
                          </p>
                          
                          <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
                            <h4 className="font-bold text-gray-800 text-xs sm:text-sm mb-1">Ideal For:</h4>
                            <div className="flex flex-wrap gap-1">
                              {['Startups', 'E-commerce', 'B2B', 'Local', 'Enterprise'].map((item, index) => (
                                <span
                                  key={index}
                                  className="bg-white text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium border border-blue-200"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-800 text-sm mb-2">Service Includes:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                            {currentService.features.map((feature, index) => (
                              <div 
                                key={index}
                                className="flex items-center text-gray-600 bg-white rounded p-1.5 sm:p-2 shadow-sm border border-gray-100"
                              >
                                <span className="text-green-500 mr-2 text-sm">✓</span>
                                <span className="text-xs sm:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gray-50 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Why Choose Our Digital Marketing?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {marketingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow border border-gray-100 text-center"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center text-white mb-2 sm:mb-3 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gradient-to-r from-blue-900 to-purple-900 text-white px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {marketingStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-2 sm:p-3 lg:p-4"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-1 sm:mb-2 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-bold mb-0.5 sm:mb-1">{stat.number}</div>
                <div className="text-gray-300 text-[10px] sm:text-xs leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gray-900 text-white px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              Digital Marketing Success Stories
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              Real results from our comprehensive digital marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6"
              >
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold mb-0.5">{study.client}</h3>
                    <p className="text-blue-400 text-xs sm:text-sm">{study.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Budget</div>
                    <div className="text-green-400 font-semibold text-xs sm:text-sm">{study.budget}</div>
                  </div>
                </div>

                <div className="mb-2 sm:mb-3">
                  <h4 className="font-semibold text-gray-300 text-xs sm:text-sm mb-0.5">Challenge:</h4>
                  <p className="text-gray-400 text-xs">{study.challenge}</p>
                </div>

                <div className="mb-2 sm:mb-3">
                  <h4 className="font-semibold text-gray-300 text-xs sm:text-sm mb-0.5">Solution:</h4>
                  <p className="text-gray-400 text-xs">{study.solution}</p>
                </div>

                <div className="mb-2 sm:mb-3">
                  <h4 className="font-semibold text-gray-300 text-xs sm:text-sm mb-0.5">Results:</h4>
                  <ul className="space-y-0.5">
                    {study.results.map((result, resultIndex) => (
                      <li 
                        key={resultIndex} 
                        className="text-green-400 text-xs flex items-center"
                      >
                        <span className="mr-1">📈</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-400">
                  Duration: {study.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gray-50 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Transform Your Business Growth
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
              Achieve measurable results that impact your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow border border-gray-100 relative overflow-hidden text-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center text-white mb-2 sm:mb-3 mx-auto`}>
                  <TrendingUp className="text-lg" />
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {benefit.title}
                </h3>
                
                <div className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {benefit.improvement}
                </div>
                
                <p className="text-gray-600 text-xs sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 lg:mb-5 text-blue-100 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto leading-relaxed">
              Get your free marketing audit and discover how we can drive measurable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <div className="w-full sm:w-auto">
                <Link 
                  to="/contact"
                  className="inline-block bg-white text-gray-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-100 transition-all duration-300 shadow w-full text-center"
                >
                  Get Free Marketing Audit
                </Link>
              </div>
              <div className="w-full sm:w-auto">
                <Link 
                  to="/contact"
                  className="inline-block border border-white text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-white hover:text-gray-900 transition-all duration-300 w-full text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-6 sm:py-8 lg:py-12 bg-gray-900 text-white px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Calculate Your Marketing ROI</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">See the potential impact of professional digital marketing</p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mt-3 sm:mt-4">
              {[
                { label: "Average Monthly ROI", value: "300%" },
                { label: "Increase in Qualified Leads", value: "245%" },
                { label: "ROI Timeline", value: "< 3 Months" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4"
                >
                  <div className="text-base sm:text-lg font-bold text-blue-400 mb-0.5 sm:mb-1">{item.value}</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;