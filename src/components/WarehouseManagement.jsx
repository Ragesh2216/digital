import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Warehouse,
  Inventory,
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
  Storage,
  LocationOn,
  SmartToy,
  
  
} from "@mui/icons-material";

const WarehouseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const warehouseFeatures = [
    {
      icon: <Inventory className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Smart Inventory Tracking",
      description: "Real-time inventory visibility with barcode and RFID technology for 99.9% accuracy",
      color: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Dashboard className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Live Operations Dashboard",
      description: "Real-time monitoring of warehouse activities and performance metrics",
      color: "from-purple-500 to-pink-500",
      delay: 200
    },
    {
      icon: <Analytics className="text-2xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Predictive Analytics",
      description: "Machine learning forecasts for demand, space utilization, and labor planning",
      color: "from-orange-500 to-red-500",
      delay: 300
    }
  ];

  const warehouseStats = [
    { number: "40%", label: "Space Utilization", icon: <Storage /> },
    { number: "65%", label: "Faster Order Processing", icon: <Speed /> },
    { number: "99.9%", label: "Inventory Accuracy", icon: <CheckCircle /> },
    { number: "50%", label: "Labor Cost Reduction", icon: <TrendingUp /> }
  ];

  const managementProcess = [
    {
      step: "01",
      title: "Receiving & Inspection",
      description: "Automated goods receipt with quality checks and barcode labeling",
      icon: <CheckCircle />
    },
    {
      step: "02",
      title: "Smart Putaway",
      description: "AI-optimized storage location assignment based on demand patterns",
      icon: <LocationOn />
    },
    {
      step: "03",
      title: "Inventory Management",
      description: "Real-time tracking with cycle counting and automated replenishment",
      icon: <Inventory />
    },
    {
      step: "04",
      title: "Order Picking",
      description: "Optimized picking routes with batch and wave picking strategies",
      icon: <Warehouse />
    },
    {
      step: "05",
      title: "Shipping & Dispatch",
      description: "Automated packing, labeling, and carrier integration",
      icon: <Warehouse />
    }
  ];

  const benefitsData = [
    {
      title: "Space Optimization",
      description: "Increase storage capacity by up to 40% with intelligent slotting and vertical space utilization",
      improvement: "40%",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Operational Efficiency",
      description: "Reduce order processing time by 65% with optimized workflows and automation",
      improvement: "65%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cost Reduction",
      description: "Cut labor and operational costs by 50% through process automation and optimization",
      improvement: "50%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const automationFeatures = [
    {
      title: "Automated Storage & Retrieval",
      description: "Robotic systems for high-density storage and rapid item retrieval",
      efficiency: "3x Faster",
      
    },
    {
      title: "Conveyor Systems",
      description: "Automated material handling between warehouse zones and workstations",
      efficiency: "24/7 Operation",
      
    },
    {
      title: "Pick-to-Light Systems",
      description: "Visual guidance systems for error-free and rapid order picking",
      efficiency: "99.9% Accuracy",
      icon: <SmartToy />
    },
    {
      title: "Inventory Drones",
      description: "Autonomous drones for cycle counting and inventory audits",
      efficiency: "90% Time Saved",
      
    }
  ];

  // Mobile-friendly warehouse zones display
  const warehouseZones = [
    { name: "Receiving", color: "bg-blue-500", items: 8, description: "Inbound goods processing" },
    { name: "Bulk Storage", color: "bg-green-500", items: 12, description: "High-density storage" },
    { name: "Picking Zone", color: "bg-yellow-500", items: 15, description: "Fast-moving items" },
    { name: "Packing", color: "bg-orange-500", items: 6, description: "Order preparation" },
    { name: "Shipping", color: "bg-red-500", items: 4, description: "Outbound dispatch" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 pt-16">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-orange-800 text-white py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Simplified Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating Warehouse Icons */}
          {['📦', '🏭', '🚚', '📊', '🔧'].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
              className="absolute text-2xl min-[320px]:text-3xl opacity-20"
              style={{
                left: `${15 + i * 18}%`,
                top: `${30 + (i % 3) * 15}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 min-[320px]:mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Smart Warehouse Management
            </h1>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl mb-4 min-[320px]:mb-5 sm:mb-8 text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Transform your warehouse operations with AI-powered automation, real-time visibility, and optimized workflows.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center px-2">
              <Link 
                to="/services"
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl shadow-md w-full min-[320px]:w-auto text-center"
              >
                Optimize Your Warehouse
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile-Friendly Warehouse Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-4xl mx-auto mt-6 min-[320px]:mt-7 sm:mt-8 lg:mt-12 px-3 min-[320px]:px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-6 border border-white/20">
            <div className="flex flex-col min-[320px]:flex-row items-center justify-between mb-3 min-[320px]:mb-4 gap-1 min-[320px]:gap-2">
              <div className="text-white font-semibold text-sm min-[320px]:text-base">Smart Warehouse Overview</div>
              <div className="text-orange-300 text-xs min-[320px]:text-sm">Live Operations</div>
            </div>
            
            {/* Mobile-Friendly Warehouse Zones */}
            <div className="space-y-2 min-[320px]:space-y-3">
              {warehouseZones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between bg-black/20 rounded-lg p-2 min-[320px]:p-3 border border-white/10 hover:border-orange-500/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-2 min-[320px]:gap-3 flex-1 min-w-0">
                    <div className={`w-3 h-3 min-[320px]:w-4 min-[320px]:h-4 rounded-full ${zone.color} flex-shrink-0`}></div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-semibold text-xs min-[320px]:text-sm truncate">{zone.name}</div>
                      <div className="text-orange-200 text-xs truncate">{zone.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 min-[320px]:gap-2 flex-shrink-0">
                    <div className="text-orange-300 text-xs min-[320px]:text-sm font-bold">{zone.items}</div>
                    <div className="text-gray-400 text-xs">items</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Real-time Stats */}
            <div className="grid grid-cols-2 gap-2 min-[320px]:gap-3 mt-3 min-[320px]:mt-4 pt-3 min-[320px]:pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-orange-300 text-lg min-[320px]:text-xl font-bold">45</div>
                <div className="text-gray-300 text-xs min-[320px]:text-sm">Active Orders</div>
              </div>
              <div className="text-center">
                <div className="text-green-300 text-lg min-[320px]:text-xl font-bold">99.9%</div>
                <div className="text-gray-300 text-xs min-[320px]:text-sm">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-8 min-[320px]:h-10 sm:h-12 lg:h-20 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Advanced Warehouse Features
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Leverage cutting-edge technology to optimize every aspect of your warehouse operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {warehouseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100"
              >
                <div className={`w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-3 min-[320px]:mb-4 lg:mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-base min-[320px]:text-lg sm:text-xl font-bold text-gray-900 mb-2 min-[320px]:mb-3 lg:mb-4 text-center leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs min-[320px]:text-sm sm:text-base text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-orange-900 to-yellow-900 text-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 min-[320px]:grid-cols-2 lg:grid-cols-4 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8"
          >
            {warehouseStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="text-center p-3 min-[320px]:p-4 sm:p-5 lg:p-6"
              >
                <div className="w-8 h-8 min-[320px]:w-10 min-[320px]:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 min-[320px]:mb-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
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
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Warehouse Workflow
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Streamlined processes from receiving to shipping with maximum efficiency.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-5 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8 relative z-10">
              {managementProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gradient-to-br from-white to-orange-50 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-md border border-gray-100 text-center group hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-8 h-8 min-[320px]:w-9 min-[320px]:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm min-[320px]:text-base lg:text-lg mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 min-[320px]:w-12 min-[320px]:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center text-orange-600 mb-2 min-[320px]:mb-3 lg:mb-4 mx-auto group-hover:bg-orange-200 transition-colors duration-300">
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
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 min-[320px]:mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 min-[320px]:mb-4 leading-tight">
              Operational Benefits
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto px-2 min-[320px]:px-4 leading-relaxed">
              Achieve significant improvements in warehouse performance and cost efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 min-[320px]:grid-cols-2 lg:grid-cols-3 gap-3 min-[320px]:gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-12 h-12 min-[320px]:w-16 min-[320px]:h-16 lg:w-20 lg:h-24 bg-gradient-to-r ${benefit.color} rounded-full -mr-6 -mt-6 min-[320px]:-mr-8 min-[320px]:-mt-8 lg:-mr-10 lg:-mt-10 opacity-10`}></div>
                
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
                  className="text-xl min-[320px]:text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 min-[320px]:mb-3 lg:mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent"
                >
                  {benefit.improvement}
                </motion.div>
                
                <p className="text-gray-600 text-xs min-[320px]:text-sm sm:text-base text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl min-[320px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 min-[320px]:mb-4 lg:mb-6 leading-tight">
              Ready to Transform Your Warehouse?
            </h2>
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl mb-4 min-[320px]:mb-5 lg:mb-8 text-orange-100 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto px-2 leading-relaxed">
              Join industry leaders who have revolutionized their warehouse operations with smart management solutions.
            </p>
            <div className="flex flex-col min-[320px]:flex-row gap-2 min-[320px]:gap-3 sm:gap-4 justify-center items-center">
              <Link 
                to="/services"
                className="inline-block bg-white text-gray-900 px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl w-full min-[320px]:w-auto text-center"
              >
                Get Started Today
              </Link>
              <Link 
                to="/contact"
                className="inline-block border border-white min-[320px]:border-2 text-white px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold text-sm min-[320px]:text-base sm:text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 w-full min-[320px]:w-auto text-center"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Preview - Mobile Optimized */}
      <section className="py-8 min-[320px]:py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-3 min-[320px]:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold mb-3 min-[320px]:mb-4">Calculate Your Warehouse ROI</h3>
            <p className="text-gray-400 text-sm min-[320px]:text-base mb-4 min-[320px]:mb-5 lg:mb-8 leading-relaxed">See how much you can save with smart warehouse management</p>
            
            <div className="grid grid-cols-1 min-[320px]:grid-cols-3 gap-3 min-[320px]:gap-4 lg:gap-6 mt-4 min-[320px]:mt-5 lg:mt-8">
              {[
                { label: "Average Annual Savings", value: "$250,000+" },
                { label: "Order Accuracy", value: "99.9%" },
                { label: "ROI Timeline", value: "< 12 Months" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 min-[320px]:p-4 lg:p-6"
                >
                  <div className="text-lg min-[320px]:text-xl sm:text-2xl font-bold text-orange-400 mb-1 min-[320px]:mb-2">{item.value}</div>
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

export default WarehouseManagement;