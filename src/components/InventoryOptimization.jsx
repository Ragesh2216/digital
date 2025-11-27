import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  TrendingUp,
  Analytics,
  Speed,
  Security,
  AutoGraph,
  Warning,
  CheckCircle,
  Timeline,
  Storage,
  Dashboard,
  ShowChart,
  PlayArrow,
  People,
  Share,
  ThumbUp,
  Campaign,
  Groups,
  Insights,
  Schedule,
  RocketLaunch
} from "@mui/icons-material";

const  InventoryOptimization = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const marketingFeatures = [
    {
      icon: <Campaign className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Content Strategy",
      description: "Data-driven content planning that resonates with your target audience and drives engagement",
      color: "from-blue-500 to-purple-500",
      delay: 0
    },
    {
      icon: <Groups className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Audience Targeting",
      description: "Precise demographic and interest-based targeting across all social platforms",
      color: "from-pink-500 to-rose-500",
      delay: 100
    },
    {
      icon: <Insights className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Performance Analytics",
      description: "Real-time campaign tracking and ROI measurement with actionable insights",
      color: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: <Schedule className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Content Scheduling",
      description: "Automated posting schedules optimized for maximum reach and engagement",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const marketingStats = [
    { number: "245%", label: "Increase in Engagement", icon: <TrendingUp /> },
    { number: "3.2x", label: "Higher Conversion Rate", icon: <CheckCircle /> },
    { number: "89%", label: "Faster Lead Generation", icon: <Speed /> },
    { number: "24/7", label: "Campaign Management", icon: <Security /> }
  ];

  const marketingProcess = [
    {
      step: "01",
      title: "Strategy Development",
      description: "Custom social media strategy tailored to your brand and audience",
      icon: <Dashboard />
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Engaging content designed for each platform and audience segment",
      icon: <Campaign />
    },
    {
      step: "03",
      title: "Platform Optimization",
      description: "Platform-specific optimization for maximum reach and engagement",
      icon: <AutoGraph />
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "Strategic campaign deployment across all social channels",
      icon: <RocketLaunch />
    },
    {
      step: "05",
      title: "Performance Monitoring",
      description: "Continuous optimization based on real-time performance data",
      icon: <ShowChart />
    }
  ];

  const benefitsData = [
    {
      title: "Increased Brand Awareness",
      description: "Expand your reach and build brand recognition across social platforms",
      improvement: "320%",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Higher Engagement Rates",
      description: "Drive meaningful interactions and build loyal community relationships",
      improvement: "245%",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Quality Lead Generation",
      description: "Convert social media followers into qualified business leads",
      improvement: "189%",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialPlatforms = [
    { name: "Facebook", color: "from-blue-600 to-blue-800", icon: "📘" },
    { name: "Instagram", color: "from-pink-500 to-purple-600", icon: "📷" },
    { name: "Twitter", color: "from-blue-400 to-blue-600", icon: "🐦" },
    { name: "LinkedIn", color: "from-blue-700 to-blue-900", icon: "💼" },
    { name: "TikTok", color: "from-gray-900 to-black", icon: "🎵" },
    { name: "YouTube", color: "from-red-600 to-red-800", icon: "📺" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-800 text-white py-8 min-[320px]:py-10 sm:py-12 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated Background Elements - Reduced for Mobile */}
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
            <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 min-[320px]:mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Strategic Social Media Marketing
            </h1>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 lg:mb-8 text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Transform your social presence with data-driven strategies, engaging content, and measurable results across all platforms.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-[320px]:w-auto"
              >
                <Link 
                  to="/services"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg transition-all duration-300 shadow-lg sm:shadow-2xl w-full text-center"
                >
                  Boost Your Social Presence
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
                  View Success Stories
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Social Metrics Preview - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-4xl mx-auto mt-6 min-[320px]:mt-7 sm:mt-8 lg:mt-12 px-3 min-[320px]:px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 lg:p-6 border border-white/20">
            <div className="flex flex-col min-[320px]:flex-row items-center justify-between mb-3 min-[320px]:mb-4 gap-1 min-[320px]:gap-2">
              <div className="text-white font-semibold text-sm min-[320px]:text-base sm:text-lg">Social Media Growth Metrics</div>
              <div className="text-blue-300 text-xs min-[320px]:text-sm">Live Dashboard</div>
            </div>
            <div className="h-16 min-[320px]:h-18 sm:h-20 lg:h-32 bg-black/20 rounded-lg p-2 min-[320px]:p-3 lg:p-4">
              <div className="flex items-end justify-between h-full space-x-1 lg:space-x-2">
                {[30, 45, 65, 80, 95, 120, 145, 160, 180, 200, 220, 245].map((height, index) => (
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
              <span className="text-blue-300 text-xs">Rapid Growth</span>
              <span className="text-xs">Current</span>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-8 min-[320px]:h-10 sm:h-12 lg:h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Comprehensive Social Media Solutions
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              End-to-end social media management designed to grow your brand and drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-4 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8">
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className={`w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-base min-[320px]:text-lg sm:text-xl font-bold text-gray-900 mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-xs min-[320px]:text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social Platforms Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 min-[320px]:mt-10 lg:mt-16"
          >
            <h3 className="text-lg min-[320px]:text-xl sm:text-2xl font-bold text-gray-900 mb-4 min-[320px]:mb-6 text-center">
              Platforms We Master
            </h3>
            <div className="grid grid-cols-2 min-[320px]:grid-cols-3 lg:grid-cols-6 gap-3 min-[320px]:gap-4">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`bg-gradient-to-r ${platform.color} rounded-lg sm:rounded-xl p-3 min-[320px]:p-4 text-white text-center shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-xl min-[320px]:text-2xl mb-1 min-[320px]:mb-2">{platform.icon}</div>
                  <div className="font-semibold text-xs min-[320px]:text-sm">{platform.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                whileHover={{ scale: 1.03 }}
                className="text-center p-3 min-[320px]:p-4 lg:p-6"
              >
                <div className="w-8 h-8 min-[320px]:w-10 min-[320px]:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-1 min-[320px]:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Our Social Media Process
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              A proven framework for building powerful social media presence and driving measurable results.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-5 gap-3 min-[320px]:gap-4 lg:gap-8 relative z-10">
              {marketingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 lg:p-6 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-8 h-8 min-[320px]:w-9 min-[320px]:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm min-[320px]:text-base lg:text-lg mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 min-[320px]:w-10 min-[320px]:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-blue-600 mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
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

      {/* Benefits Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Measurable Marketing Benefits
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4">
              Transform your social media from cost center to revenue driver with proven results.
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
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 min-[320px]:p-5 lg:p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-12 h-12 min-[320px]:w-16 min-[320px]:h-16 lg:w-24 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-full -mr-6 -mt-6 min-[320px]:-mr-8 min-[320px]:-mt-8 lg:-mr-12 lg:-mt-12 opacity-10`}></div>
                
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

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl min-[320px]:text-2xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320px]:mb-4 lg:mb-6 leading-tight">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl mb-4 min-[320px]:mb-5 lg:mb-8 text-blue-100 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto leading-relaxed">
              Join thousands of brands that have transformed their social media presence into a powerful revenue generator.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full min-[320px]:w-auto"
              >
                <Link 
                  to="/login"
                  className="inline-block bg-white text-gray-900 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg sm:shadow-2xl w-full text-center"
                >
                  Start Free Trial
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
                  Get Custom Strategy
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Preview - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-3 min-[320px]:mb-4">Calculate Your Social Media ROI</h3>
            <p className="text-gray-400 mb-4 min-[320px]:mb-5 lg:mb-8 text-sm min-[320px]:text-base">Discover the potential impact of professional social media management</p>
            
            <div className="grid grid-cols-1 min-[320px]:grid-cols-3 gap-3 min-[320px]:gap-4 lg:gap-6 mt-4 min-[320px]:mt-5 lg:mt-8">
              {[
                { label: "Average Monthly Engagement", value: "15,000+" },
                { label: "Increase in Website Traffic", value: "220%" },
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

export default InventoryOptimization;