import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Latest() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage({ type: 'success', text: 'Thank you! Our team will contact you shortly.' });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Submission failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for small businesses starting their SCM journey",
      price: { monthly: 299, yearly: 2990 },
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: "🚚",
      features: [
        "Basic Inventory Management",
        "Real-time Tracking (Up to 100 shipments/month)",
        "Basic Analytics Dashboard",
        "Email Support",
        "2 User Accounts",
        "Mobile App Access",
        "API Access (Limited)",
        "Basic Reporting"
      ],
      cta: "Start Free Trial",
      link: "/signup"
    },
    {
      id: 2,
      name: "Professional",
      description: "Advanced features for growing supply chains",
      price: { monthly: 799, yearly: 7990 },
      popular: true,
      color: "from-purple-500 to-pink-500",
      icon: "📊",
      features: [
        "Advanced Inventory Optimization",
        "Unlimited Real-time Tracking",
        "AI-Powered Demand Forecasting",
        "Priority Support",
        "10 User Accounts",
        "Advanced Analytics",
        "Full API Access",
        "Custom Reporting",
        "Supplier Management",
        "Warehouse Management"
      ],
      cta: "Get Started",
      link: "/signup"
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Complete SCM solution for large organizations",
      price: { monthly: 1499, yearly: 14990 },
      popular: false,
      color: "from-orange-500 to-amber-500",
      icon: "🏭",
      features: [
        "Everything in Professional",
        "Dedicated Account Manager",
        "Custom AI Models",
        "24/7 Phone Support",
        "Unlimited User Accounts",
        "Multi-warehouse Management",
        "Advanced Risk Analytics",
        "Custom Integrations",
        "SLA Guarantee",
        "On-premise Deployment Option",
        "Training & Onboarding",
        "Custom Development"
      ],
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const featuresComparison = [
    {
      feature: "Real-time Shipment Tracking",
      starter: "✓ (100/month)",
      professional: "✓ Unlimited",
      enterprise: "✓ Unlimited"
    },
    {
      feature: "Inventory Management",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Advanced + AI"
    },
    {
      feature: "AI Demand Forecasting",
      starter: "✗",
      professional: "✓",
      enterprise: "✓ Custom Models"
    },
    {
      feature: "User Accounts",
      starter: "2",
      professional: "10",
      enterprise: "Unlimited"
    },
    {
      feature: "API Access",
      starter: "Limited",
      professional: "Full",
      enterprise: "Full + Custom"
    },
    {
      feature: "Support",
      starter: "Email",
      professional: "Priority",
      enterprise: "24/7 Dedicated"
    },
    {
      feature: "Analytics Dashboard",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Enterprise"
    },
    {
      feature: "Warehouse Management",
      starter: "✗",
      professional: "✓ Single",
      enterprise: "✓ Multi-location"
    },
    {
      feature: "Supplier Network",
      starter: "✗",
      professional: "✓ Basic",
      enterprise: "✓ Advanced"
    },
    {
      feature: "Custom Integrations",
      starter: "✗",
      professional: "Limited",
      enterprise: "✓ Full"
    }
  ];

  const savings = {
    yearly: 17
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-6 min-[320px]:py-8 px-3 min-[320px]:px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      {/* Animated Background Elements - Reduced for Mobile */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20 hidden min-[320px]:block"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${['#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#84CC16', '#06B6D4', '#EF4444'][i % 8]
                }, ${['#059669', '#2563EB', '#7C3AED', '#DB2777', '#D97706', '#65A30D', '#0891B2', '#DC2626'][(i + 4) % 8]
                })`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              filter: 'blur(12px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Mobile Optimized */}
        <div className={`text-center mt-4 min-[320px]:mt-6 mb-8 min-[320px]:mb-12 lg:mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl min-[320px]:text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 min-[320px]:mb-5 lg:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight px-2">
            Supply Chain Management Plans
          </h1>
          <p className="text-sm min-[320px]:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-3xl mx-auto mb-8 min-[320px]:mb-10 lg:mb-12 leading-relaxed px-2">
            Choose the perfect plan to optimize your supply chain operations, reduce costs, and improve efficiency with AI-powered solutions.
          </p>

          {/* Billing Toggle - Mobile Optimized */}
          <div className="flex justify-center items-center mb-8 min-[320px]:mb-10 lg:mb-16 px-2">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 min-[320px]:p-1.5 border border-white/20">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm min-[320px]:text-base ${activeTab === "monthly"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab("yearly")}
                className={`px-4 min-[320px]:px-5 sm:px-6 lg:px-8 py-2 min-[320px]:py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 relative text-sm min-[320px]:text-base ${activeTab === "yearly"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                  }`}
              >
                Yearly

              </button>
            </div>
          </div>

          {/* Stats - Mobile Optimized */}
          <div className="grid grid-cols-2 min-[320px]:grid-cols-2 md:grid-cols-4 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8 max-w-xs min-[320px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-4">
            {[
              { number: "99.5%", label: "Uptime SLA", color: "from-green-500 to-emerald-500" },
              { number: "24/7", label: "Support", color: "from-blue-500 to-cyan-500" },
              { number: "50K+", label: "Shipments", color: "from-purple-500 to-pink-500" },
              { number: "40%", label: "Cost Reduction", color: "from-orange-500 to-amber-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                <div className={`text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 mb-1 min-[320px]:mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs min-[320px]:text-sm group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 min-[320px]:grid-cols-1 md:grid-cols-3 gap-4 min-[320px]:gap-5 sm:gap-6 lg:gap-8 mb-12 min-[320px]:mb-16 lg:mb-20 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-xl flex flex-col h-full ${plan.popular
                  ? "border-cyan-500/50 lg:scale-105 scale-100"
                  : "border-white/20 hover:border-cyan-500/30"
                }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">

                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 group-hover:opacity-15 transition-opacity duration-500`}></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10 p-4 min-[320px]:p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Plan Header */}
                <div className="text-center mb-4 min-[320px]:mb-5 lg:mb-8">
                  <div className={`w-12 h-12 min-[320px]:w-14 min-[320px]:h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 min-[320px]:mb-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-xl min-[320px]:text-2xl sm:text-3xl shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-lg min-[320px]:text-xl sm:text-2xl font-bold text-white mb-2 min-[320px]:mb-3 leading-tight">{plan.name}</h3>
                  <p className="text-gray-300 text-xs min-[320px]:text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-4 min-[320px]:mb-5 lg:mb-8">
                  <div className="flex items-baseline justify-center space-x-1 min-[320px]:space-x-2">
                    <span className="text-2xl min-[320px]:text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      ${activeTab === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 text-sm min-[320px]:text-base lg:text-lg">
                      /{activeTab === "monthly" ? "month" : "year"}
                    </span>
                  </div>

                </div>

                {/* Features */}
                <div className="flex-grow mb-4 min-[320px]:mb-5 lg:mb-8">
                  <ul className="space-y-2 min-[320px]:space-y-3 sm:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 min-[320px]:space-x-3">
                        <span className="w-4 h-4 min-[320px]:w-5 min-[320px]:h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2 h-2 min-[320px]:w-3 min-[320px]:h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-300 text-xs min-[320px]:text-sm leading-relaxed flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link
                    to={plan.link}
                    className={`block w-full text-center py-2 min-[320px]:py-3 sm:py-4 px-4 min-[320px]:px-5 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm min-[320px]:text-base ${plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl"
                        : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Custom Enterprise Solution - Mobile Optimized */}
        <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-4 min-[320px]:p-5 sm:p-6 lg:p-8 md:p-12 text-center text-white mb-8 min-[320px]:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-blue-600/30 to-purple-600/30"></div>

          <div className="absolute inset-0">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse-slow opacity-20"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 10}%`,
                  background: `radial-gradient(circle, cyan, transparent)`,
                  animationDelay: `${i * 2}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl min-[375px]:text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 min-[375px]:mb-4 lg:mb-6 leading-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-cyan-100 text-base min-[375px]:text-base lg:text-lg mb-5 min-[375px]:mb-5 lg:mb-8 max-w-xs min-[375px]:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto leading-relaxed">
              Our enterprise team can build a tailored SCM solution for your specific business needs with custom integrations and dedicated support.
            </p>
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-3 min-[375px]:gap-3 sm:gap-4 max-w-xs min-[375px]:max-w-sm sm:max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-cyan-300/50 bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-cyan-200 disabled:opacity-50 text-base min-[375px]:text-base"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 min-[375px]:py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none backdrop-blur-sm text-base min-[375px]:text-base whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">Contacting...</span>
                  </div>
                ) : (
                  <>
                    <span className="block min-[375px]:inline">Contact</span>
                    <span className="hidden min-[375px]:inline">&nbsp;Enterprise Team</span>
                  </>
                )}
              </button>
            </form>
            {message.text && (
              <p className={`mt-4 text-base font-medium ${message.type === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                {message.text}
              </p>
            )}
          </div>
        </div>

        {/* FAQ Section - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[320px]:gap-8 lg:gap-12 mb-8 min-[320px]:mb-12 lg:mb-16">
          <div>
            <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 min-[320px]:mb-5 lg:mb-8 text-center lg:text-left leading-tight">Frequently Asked Questions</h3>
            <div className="space-y-4 min-[320px]:space-y-5 sm:space-y-6">
              {[
                {
                  question: "Can I switch plans later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  question: "Is there a free trial?",
                  answer: "Yes, all plans include a 14-day free trial with full access to all features."
                },
                {
                  question: "Do you offer discounts for non-profits?",
                  answer: "Yes, we offer special pricing for non-profit organizations and educational institutions."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 min-[320px]:p-5 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <h4 className="font-semibold text-white text-base min-[320px]:text-lg mb-2 min-[320px]:mb-3 leading-tight">{faq.question}</h4>
                  <p className="text-gray-300 text-sm min-[320px]:text-base leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg min-[320px]:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 min-[320px]:mb-5 lg:mb-8 text-center lg:text-left leading-tight">Why Choose Our SCM Platform?</h3>
            <div className="space-y-4 min-[320px]:space-y-5 sm:space-y-6">
              {[
                {
                  icon: "🚀",
                  title: "AI-Powered Optimization",
                  description: "Reduce costs by up to 40% with intelligent route and inventory optimization"
                },
                {
                  icon: "🔒",
                  title: "Enterprise Security",
                  description: "Bank-level security with 99.9% uptime SLA and data encryption"
                },
                {
                  icon: "🌐",
                  title: "Global Support",
                  description: "24/7 support with dedicated account managers for enterprise clients"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 min-[320px]:space-x-4 sm:space-x-6 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 min-[320px]:p-5 sm:p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="text-2xl min-[320px]:text-3xl flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-base min-[320px]:text-lg mb-1 min-[320px]:mb-2 leading-tight">{feature.title}</h4>
                    <p className="text-gray-300 text-sm min-[320px]:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(8px) rotate(120deg);
          }
          66% {
            transform: translateY(8px) translateX(-8px) rotate(240deg);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Latest;