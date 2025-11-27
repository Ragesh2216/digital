import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call and then navigate to 404
    setTimeout(() => {
      setIsLoading(false);
      navigate('/404');
    }, 2000);
  };

  const toggleAuthMode = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
        agreeToTerms: false
      });
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, ${
                ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4', '#F59E0B'][i % 5]
              }, ${
                ['#A78BFA', '#F472B6', '#60A5FA', '#22D3EE', '#FBBF24'][(i + 2) % 5]
              })`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + i * 3}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
        
        {/* Animated Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 animate-pulse-slow rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4', '#F59E0B'][i % 5],
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Marketing Hero */}
          <div className={`text-center mt-8  lg:text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-12">
              
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                  {isLogin ? "Welcome Back" : "Join The"}
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  {isLogin ? "Marketer" : "Revolution"}
                </span>
              </h1>
              
              <p className="text-xl text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {isLogin 
                  ? "Access your AI-powered marketing dashboard and supercharge your campaigns with real-time analytics."
                  : "Create your account and unlock the power of AI-driven marketing automation and analytics."
                }
              </p>
            </div>

            {/* Marketing Metrics */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 mb-12">
              {[
                { number: "3.2x", label: "Avg. ROI", color: "from-green-400 to-cyan-400" },
                { number: "24/7", label: "AI Optimization", color: "from-purple-400 to-pink-400" },
                { number: "500+", label: "Campaigns", color: "from-blue-400 to-cyan-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {[
                { 
                  icon: "🤖", 
                  text: "AI Campaign Optimization", 
                  description: "Machine learning powered campaign tuning",
                  gradient: "from-purple-500 to-pink-500"
                },
                { 
                  icon: "📊", 
                  text: "Real-time Analytics", 
                  description: "Live performance dashboards & insights",
                  gradient: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: "⚡", 
                  text: "Automated Workflows", 
                  description: "Smart automation for repetitive tasks",
                  gradient: "from-green-500 to-emerald-500"
                },
                { 
                  icon: "🎯", 
                  text: "Multi-channel ROI", 
                  description: "Track ROI across all marketing channels",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">{feature.text}</div>
                      <div className="text-white/60 text-xs mt-1">{feature.description}</div>
                    </div>
                    <div className="text-white/40 group-hover:text-white transition-colors duration-300">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className={`bg-white/10 backdrop-blur-xl mt-16 rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Form Header */}
            <div className="text-center mt-8 mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <span className="text-3xl text-white">
                  {isLogin ? "🚀" : "🌟"}
                </span>
              </div>
              <h2 className="text-4xl font-black text-white mb-3">
                {isLogin ? "Welcome Back!" : "Start Your Journey"}
              </h2>
              <p className="text-white/70 text-lg">
                {isLogin 
                  ? "Sign in to your marketing command center"
                  : "Create your account and transform your marketing"
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields - Only for Signup */}
              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-white/20 placeholder-white/40 backdrop-blur-sm"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-white/20 placeholder-white/40 backdrop-blur-sm"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-white/20 placeholder-white/40 backdrop-blur-sm"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Password Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-sm font-semibold text-white mb-3">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-white/20 placeholder-white/40 backdrop-blur-sm"
                  placeholder="Create a strong password"
                />
              </div>

              {/* Confirm Password - Only for Signup */}
              {!isLogin && (
                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-3">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className={`w-full px-4 py-4 bg-white/5 border text-white rounded-2xl focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-white/20 placeholder-white/40 backdrop-blur-sm ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? 'border-red-400 ring-2 ring-red-400/30'
                        : 'border-white/10'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-300 text-sm mt-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                      Passwords don't match
                    </p>
                  )}
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {isLogin ? (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-purple-500 bg-white/5 border-white/10 rounded focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-white/70">Remember me</span>
                    </label>
                    <Link to="/404" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors duration-300 font-semibold">
                      Forgot password?
                    </Link>
                  </div>
                ) : (
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 text-purple-500 bg-white/5 border-white/10 rounded focus:ring-purple-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-white/70">
                      I agree to the{" "}
                      <Link to="/404" className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 font-semibold">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/404" className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 font-semibold">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white py-5 px-6 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 animate-fade-in-up relative overflow-hidden group ${
                  isLoading ? 'animate-pulse' : ''
                }`}
                style={{ animationDelay: '500ms' }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {isLogin ? "Accessing Dashboard..." : "Creating Account..."}
                  </>
                ) : (
                  <>
                    <span className="text-xl">{isLogin ? "🚀" : "🌟"}</span>
                    {isLogin ? "Access Marketing Hub" : "Start Free Trial"}
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-white/50 font-medium">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-white/5 border border-white/10 text-white py-4 px-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group backdrop-blur-sm"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-yellow-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/404')}
                  className="w-full bg-white/5 border border-white/10 text-white py-4 px-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group backdrop-blur-sm"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  Facebook
                </button>
              </div>

              {/* Switch Auth Mode */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <p className="text-white/70">
                  {isLogin ? "New to our platform? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    className="text-cyan-300 hover:text-cyan-200 font-black transition-colors duration-300 underline decoration-2 underline-offset-4"
                  >
                    {isLogin ? "Start free trial" : "Sign in here"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
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
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(240deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </div>
  );
}