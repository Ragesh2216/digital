import React, { useState, useEffect } from "react";
import sakthi from '../images/www.webp';
import abi from '../images/abi.webp';
import dhara from '../images/soe.webp';
import yuva from '../images/yuva.webp';
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      section: 'Mission & Vision',
      icon: '🎯',
      content: 'We drive business growth through innovative digital marketing strategies that deliver measurable results and sustainable ROI for our clients.',
      importance: 'This defines our purpose and commitment to delivering exceptional digital marketing services that solve real business challenges.',
      details: [
        'Commitment to data-driven marketing strategies',
        'Dedication to client success and partnership',
        'Focus on transparency and ethical practices',
        'Drive continuous optimization and performance excellence'
      ],
      color: 'from-purple-400 to-pink-400'
    },
    {
      section: 'Our Story',
      icon: '🚀',
      content: 'Founded by digital marketing experts passionate about helping businesses thrive in the digital landscape through innovative solutions.',
      importance: 'Shows our journey, expertise, and commitment to staying at the forefront of digital marketing trends.',
      details: [
        'Founded in 2016 by industry veterans',
        'Grew from startup to serving 500+ clients globally',
        'Expanded to international markets in 2019',
        'Achieved 300% average ROI for clients'
      ],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      section: 'Digital Expertise',
      icon: '⚡',
      content: 'Comprehensive digital marketing services including SEO, PPC, social media, content marketing, and conversion rate optimization.',
      importance: 'Demonstrates our technical capabilities and specialized knowledge across multiple digital marketing channels.',
      details: [
        'Certified Google Partners and Meta Professionals',
        'Expertise in 50+ marketing tools and platforms',
        'Advanced analytics and tracking systems',
        'Agile marketing methodology experts'
      ],
      color: 'from-green-400 to-emerald-400'
    },
    {
      section: 'Quality Standards',
      icon: '🏆',
      content: 'Rigorous quality assurance processes, data-driven strategies, and industry best practices in every campaign.',
      importance: 'Ensures reliability, transparency, and excellence in all our digital marketing services.',
      details: [
        'Google Certified marketing professionals',
        'Real-time performance monitoring',
        'Continuous optimization processes',
        'Comprehensive reporting and analytics'
      ],
      color: 'from-orange-400 to-red-400'
    },
    {
      section: 'Client Partnership',
      icon: '🤝',
      content: 'We build long-term relationships with our clients, acting as their trusted digital marketing partners.',
      importance: 'Focus on understanding client needs and delivering sustainable growth solutions.',
      details: [
        'Dedicated account managers for each client',
        'Regular performance reviews and strategy sessions',
        'Transparent communication channels',
        'Flexible service level agreements'
      ],
      color: 'from-indigo-400 to-violet-400'
    },
    {
      section: 'Innovation & Technology',
      icon: '🔬',
      content: 'Continuous investment in marketing technology and innovation to stay ahead of digital trends.',
      importance: 'Ensures we deliver cutting-edge solutions using the latest marketing technologies.',
      details: [
        'Advanced marketing automation systems',
        'AI-powered audience targeting',
        'Machine learning for campaign optimization',
        'Real-time analytics and reporting dashboards'
      ],
      color: 'from-teal-400 to-blue-400'
    },
    {
      section: 'Industry Recognition',
      icon: '⭐',
      content: 'Award-winning digital marketing agency recognized for excellence and innovation in driving business growth.',
      importance: 'Validates our expertise and commitment to quality service delivery.',
      details: [
        '2023 Best Digital Marketing Agency Award',
        'Google Premier Partner status',
        'Top 5 Marketing Innovators 2024',
        'Excellence in ROI Award 2023'
      ],
      color: 'from-yellow-400 to-amber-400'
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Marketing Officer",
      bio: "12+ years in digital marketing and growth strategy. Former Head of Marketing at TechGrowth Inc.",
      expertise: ["Digital Strategy", "Growth Marketing", "Marketing Ops"],
      color: "from-purple-400 to-pink-500",
      image: abi
    },
    {
      name: "Marcus Johnson",
      role: "Head of Performance Marketing",
      bio: "PPC and conversion rate optimization expert with extensive experience in multi-channel marketing.",
      expertise: ["PPC Management", "CRO", "Analytics"],
      color: "from-blue-400 to-cyan-500",
      image: yuva
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "SEO & Content Strategy Lead",
      bio: "PhD in Digital Marketing with focus on SEO algorithms and content optimization strategies.",
      expertise: ["SEO Strategy", "Content Marketing", "Technical SEO"],
      color: "from-green-400 to-emerald-500",
      image: dhara
    },
    {
      name: "David Kim",
      role: "Social Media Director",
      bio: "Social media marketing expert with extensive experience in viral campaigns and community building.",
      expertise: ["Social Media", "Community Management", "Influencer Marketing"],
      color: "from-orange-400 to-red-500",
      image: sakthi
    }
  ];

  const technologies = [
    { name: "SEO", icon: "🔍", category: "Search" },
    { name: "PPC", icon: "💸", category: "Advertising" },
    { name: "Social Media", icon: "📱", category: "Marketing" },
    { name: "Email", icon: "✉️", category: "Marketing" },
    { name: "Analytics", icon: "📊", category: "Data" },
    { name: "Automation", icon: "⚙️", category: "Technology" },
    { name: "AI/ML", icon: "🤖", category: "Analytics" },
    { name: "CRO", icon: "📈", category: "Optimization" },
    { name: "Content", icon: "📝", category: "Marketing" },
    { name: "Video", icon: "🎥", category: "Marketing" },
    { name: "WordPress", icon: "💻", category: "Platform" },
    { name: "Shopify", icon: "🛒", category: "Platform" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 16 + 4}px`,
              height: `${Math.random() * 16 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#3B82F6', '#10B981', '#06B6D4', '#EC4899', '#EF4444', '#F59E0B'][i % 7],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 leading-tight pb-1 ${
  isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
}`}>
  About Digital Growth Solutions
</h1>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            We are a premier digital marketing agency delivering innovative marketing strategies 
            that transform businesses and drive sustainable growth across industries.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Clients Served", color: "from-purple-500 to-pink-500" },
              { number: "300%", label: "Average ROI", color: "from-green-500 to-emerald-500" },
              { number: "50+", label: "Marketing Tools", color: "from-blue-500 to-cyan-500" },
              { number: "24/7", label: "Campaign Monitoring", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
              Our Marketing Technology Stack
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="text-center transform hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-purple-600 transition-colors duration-300">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Sections */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Navigation */}
              <div className="lg:col-span-1 bg-gradient-to-b from-gray-50 to-purple-50 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <nav className="space-y-2">
                  {sections.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        activeSection === index
                          ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                          : 'text-gray-700 hover:bg-white hover:border-2 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.section}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 bg-gradient-to-br from-white to-purple-50">
                <div className="flex items-center gap-4 mb-6 animate-fade-in-left">
                  <div className={`w-16 h-16 bg-gradient-to-r ${sections[activeSection].color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {sections[activeSection].icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {sections[activeSection].section}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Overview
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border-l-4 border-purple-300">
                      {sections[activeSection].content}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Business Impact
                    </h3>
                    <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-green-300">
                      {sections[activeSection].importance}
                    </p>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${sections[activeSection].color} rounded-full`}></div>
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-300">
                      {sections[activeSection].details.map((detail, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-700 group hover:translate-x-2 transition-transform duration-300"
                        >
                          <span className={`w-6 h-6 bg-gradient-to-r ${sections[activeSection].color} rounded-full flex items-center justify-center text-white text-sm mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span className="group-hover:text-gray-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Team Section with Images */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Marketing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Meet the digital marketing experts driving innovation and growth at Digital Growth Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150 + 400}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60`}></div>
                  {/* Role Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {member.role.split(' ')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`font-semibold mb-3 bg-gradient-to-r ${member.color} bg-clip-text text-transparent text-sm`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-gradient-to-r from-gray-100 to-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium group-hover:scale-105 transition-transform duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 text-white transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Our Commitment to Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📈",
                    title: "ROI Focused",
                    description: "Data-driven strategies designed to maximize return on investment and drive measurable growth",
                    color: "from-green-400 to-teal-400"
                  },
                  {
                    icon: "💡",
                    title: "Innovation",
                    description: "Cutting-edge marketing technologies and strategies to keep you ahead of competitors",
                    color: "from-blue-400 to-indigo-400"
                  },
                  {
                    icon: "🤝",
                    title: "Partnership",
                    description: "Transparent collaboration and regular communication to ensure your success",
                    color: "from-purple-400 to-pink-400"
                  }
                ].map((commitment, index) => (
                  <div 
                    key={index} 
                    className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up group"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <div className={`text-4xl mb-4 bg-gradient-to-r ${commitment.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {commitment.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white drop-shadow">{commitment.title}</h3>
                    <p className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {commitment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-white to-purple-50 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Partner with Digital Growth Solutions to leverage cutting-edge marketing strategies and drive sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow flex items-center justify-center gap-2"
              >
                <span>Get Free Marketing Audit</span>
                <span className="text-lg">🚀</span>
              </button>
              
              <button 
                onClick={() => navigate('/services')}
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <span className="text-lg">📱</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
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
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default About;