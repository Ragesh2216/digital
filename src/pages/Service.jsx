import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DigitalMarketingService() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      title: "SEO & Content Strategy",
      icon: "🔍",
      description: "Dominate search rankings with our comprehensive SEO and content marketing strategies that drive organic growth and authority.",
      detailsLink: "/seo",
      buttonText: "Boost Rankings",
      features: [
        "Keyword research & optimization",
        "Technical SEO audits",
        "Content strategy & creation",
        "Link building & outreach",
        "Local SEO optimization"
      ],
      stats: "Avg. 250% traffic growth",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600",
      iconColor: "text-purple-400"
    },
    {
      title: "PPC & Paid Advertising",
      icon: "💸",
      description: "Drive immediate results with data-driven PPC campaigns across Google, social media, and display networks.",
      detailsLink: "/ppc",
      buttonText: "Launch Campaign",
      features: [
        "Google Ads management",
        "Social media advertising",
        "Conversion rate optimization",
        "A/B testing & analytics",
        "Retargeting campaigns"
      ],
      stats: "300%+ ROI achieved",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-400"
    },
    {
      title: "Social Media Marketing",
      icon: "📱",
      description: "Build engaged communities and drive brand awareness with strategic social media campaigns across all platforms.",
      detailsLink: "/social-media",
      buttonText: "Grow Engagement",
      features: [
        "Content strategy & calendar",
        "Community management",
        "Influencer partnerships",
        "Social media analytics",
        "Video content production"
      ],
      stats: "5x engagement increase",
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      iconColor: "text-green-400"
    },
    {
      title: "Email Marketing",
      icon: "✉️",
      description: "Nurture leads and drive conversions with personalized email campaigns and automation workflows.",
      detailsLink: "/email",
      buttonText: "Automate Campaigns",
      features: [
        "Email automation setup",
        "Lead nurturing sequences",
        "A/B testing optimization",
        "Segmentation & personalization",
        "Performance analytics"
      ],
      stats: "40%+ open rates",
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-600 to-red-600",
      iconColor: "text-orange-400"
    },
    {
      title: "Web Analytics & CRO",
      icon: "📊",
      description: "Transform data into actionable insights with advanced analytics and conversion rate optimization strategies.",
      detailsLink: "/analytics",
      buttonText: "Analyze Data",
      features: [
        "Google Analytics implementation",
        "Conversion funnel analysis",
        "Heatmaps & user recordings",
        "A/B testing framework",
        "ROI tracking & reporting"
      ],
      stats: "50% conversion lift",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "from-indigo-600 to-purple-600",
      iconColor: "text-indigo-400"
    },
    {
      title: "Marketing Strategy",
      icon: "🎯",
      description: "Develop comprehensive marketing roadmaps that align with your business goals and drive sustainable growth.",
      detailsLink: "/strategy",
      buttonText: "Plan Strategy",
      features: [
        "Market research & analysis",
        "Competitive intelligence",
        "Customer journey mapping",
        "Budget planning & allocation",
        "Performance benchmarking"
      ],
      stats: "3x marketing efficiency",
      color: "from-teal-500 to-blue-500",
      hoverColor: "from-teal-600 to-blue-600",
      iconColor: "text-teal-400"
    }
  ];

  const testimonials = [
    {
      quote: "Their SEO strategy tripled our organic traffic in 6 months and generated over $500K in new revenue. Absolutely phenomenal results!",
      author: "Sarah Chen",
      company: "Marketing Director, TechStart Inc",
      rating: 5
    },
    {
      quote: "The PPC campaigns delivered 400% ROI within the first quarter. Their data-driven approach completely transformed our customer acquisition.",
      author: "Marcus Rodriguez",
      company: "CEO, E-commerce Brand",
      rating: 5
    },
    {
      quote: "Our social media engagement increased 5x and we built a community of 50K+ loyal followers. The content strategy was brilliant.",
      author: "Emily Johnson",
      company: "Brand Manager, Fashion Retail",
      rating: 5
    },
    {
      quote: "The email automation system they built increased our conversions by 300% and saved us 20 hours per week in manual work.",
      author: "David Kim",
      company: "Operations Lead, SaaS Company",
      rating: 5
    }
  ];

  const platforms = [
    { name: "Google Ads", icon: "🔍", users: "2B+", color: "from-blue-500 to-blue-600" },
    { name: "Meta Ads", icon: "👥", users: "3B+", color: "from-blue-600 to-indigo-600" },
    { name: "TikTok Ads", icon: "🎵", users: "1B+", color: "from-black to-gray-800" },
    { name: "LinkedIn", icon: "💼", users: "900M+", color: "from-blue-700 to-blue-800" },
    { name: "Instagram", icon: "📸", users: "2B+", color: "from-pink-500 to-purple-500" },
    { name: "YouTube", icon: "🎥", users: "2.5B+", color: "from-red-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4', '#F59E0B'][i % 5],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Gradient */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-0 hover:opacity-100"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <span>🚀</span>
            Transforming Brands Digitally
          </div>
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-gradient">
  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent inline-block pb-1">
    Digital Marketing Excellence
  </span>
</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Data-driven marketing strategies that deliver measurable results. From SEO to social media, 
            we create campaigns that drive growth, engagement, and revenue for your business.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "300%", label: "Avg. ROI", color: "from-green-500 to-emerald-500", icon: "📈" },
              { number: "5M+", label: "Leads Generated", color: "from-blue-500 to-cyan-500", icon: "🎯" },
              { number: "250%", label: "Traffic Growth", color: "from-purple-500 to-pink-500", icon: "🚀" },
              { number: "98%", label: "Client Satisfaction", color: "from-orange-500 to-red-500", icon: "⭐" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative border border-white/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid - Modern Card Design */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 overflow-hidden"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Service Header */}
                <div className={`p-8 relative overflow-hidden min-h-[200px] flex flex-col justify-center border-b border-gray-100/50`}>
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-4xl transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="p-6 relative">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                    What's Included:
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-start gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <span className={`${service.iconColor} transform group-hover:scale-125 transition-transform duration-300 flex-shrink-0 mt-0.5`}>
                          ✓
                        </span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
                    <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {service.stats}
                    </span>
                    <Link
                      to={service.detailsLink}
                      className={`bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm shadow-md`}
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Reach Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Reach Billions Across Platforms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="text-center group transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                    <span className="text-2xl relative z-10">{platform.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-sm mb-1">
                    {platform.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {platform.users} users
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden border border-white/50">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our 4-Step Success Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Deep dive into your business, audience, and competitive landscape",
                  icon: "🔍",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Create data-driven marketing strategy aligned with your goals",
                  icon: "🎯",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "03",
                  title: "Execution & Optimization",
                  description: "Launch campaigns with continuous testing and improvement",
                  icon: "⚡",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "04",
                  title: "Analysis & Growth",
                  description: "Measure results, analyze data, and scale successful strategies",
                  icon: "📊",
                  color: "from-orange-500 to-red-500"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative">
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 relative overflow-hidden shadow-md`}>
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                      <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve remarkable digital growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden border border-white/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 group-hover:text-gray-900 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-purple-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-purple-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                </blockquote>
                <div className="relative">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-700 rounded-2xl p-12 text-white text-center relative overflow-hidden group border border-purple-500/30">
            {/* Animated background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-pink-600/50 to-blue-700/50 group-hover:from-purple-600/60 group-hover:via-pink-600/60 group-hover:to-blue-700/60 transition-all duration-1000"></div>
            
            {/* Floating emojis */}
            <div className="absolute inset-0 overflow-hidden">
              {['🚀', '📈', '🎯', '💸', '📱', '⭐'].map((emoji, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-float opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${15 + i * 3}s`
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300 leading-relaxed">
                Whether you need SEO, PPC, social media, or a complete digital transformation, 
                our expert team is ready to drive measurable results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn border border-white/20"
                >
                  <span className="relative z-10">Get Free Marketing Audit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group/btn backdrop-blur-sm"
                >
                  <span className="relative z-10">Book Strategy Call</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
              <p className="text-purple-200 mt-6 text-sm group-hover:text-purple-100 transition-colors duration-300">
                Receive a comprehensive marketing analysis within 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) rotate(5deg); 
          }
          66% { 
            transform: translateY(10px) rotate(-5deg); 
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}