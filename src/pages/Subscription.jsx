import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Modern Marketing Icons
const ChartBar = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);

const Target = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const Rocket = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const marketingTiers = [
  {
    id: 'essential',
    name: 'Essential Growth',
    icon: '📱',
    price: 299,
    description: 'Perfect for startups and small businesses looking to establish their digital presence.',
    features: [
      { text: 'Social Media Management', included: true },
      { text: 'Basic SEO Optimization', included: true },
      { text: 'Content Calendar', included: true },
      { text: 'Monthly Analytics Report', included: true },
      { text: 'Paid Advertising Campaigns', included: false },
      { text: 'Advanced Analytics Dashboard', included: false },
      { text: 'Dedicated Marketing Manager', included: false },
      { text: 'Custom Strategy Development', included: false },
    ],
    highlight: false,
    buttonText: 'Start Growing',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'performance',
    name: 'Performance Pro',
    icon: '🚀',
    price: 899,
    description: 'Advanced marketing solutions for businesses ready to scale and maximize ROI.',
    features: [
      { text: 'Multi-Channel Campaigns', included: true },
      { text: 'Advanced SEO & Content Strategy', included: true },
      { text: 'Paid Social & Search Advertising', included: true },
      { text: 'Conversion Rate Optimization', included: true },
      { text: 'Real-time Analytics Dashboard', included: true },
      { text: 'A/B Testing Suite', included: true },
      { text: 'Dedicated Marketing Manager', included: false },
      { text: 'Custom AI-Powered Insights', included: false },
    ],
    highlight: true,
    buttonText: 'Scale Performance',
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Elite',
    icon: '🏢',
    price: 2499,
    description: 'Comprehensive marketing ecosystem for large organizations with complex needs.',
    features: [
      { text: 'Full-Funnel Marketing Strategy', included: true },
      { text: 'AI-Powered Campaign Optimization', included: true },
      { text: 'Omnichannel Marketing Automation', included: true },
      { text: 'Predictive Analytics & Insights', included: true },
      { text: 'Custom Marketing Technology Stack', included: true },
      { text: '24/7 Performance Monitoring', included: true },
      { text: 'Dedicated Marketing Team', included: true },
      { text: 'Custom AI-Powered Insights', included: true },
    ],
    highlight: false,
    buttonText: 'Contact Enterprise',
    popular: false,
    gradient: 'from-orange-500 to-red-500'
  },
];

const FeatureItem = ({ text, included }) => {
  const iconColor = included ? 'text-green-500' : 'text-red-400';
  const textColor = included ? 'text-gray-700' : 'text-gray-500 line-through';

  return (
    <li className="flex items-center space-x-3 mb-3 animate-fade-in">
      {included ? (
        <Check className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      ) : (
        <X className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      )}
      <span className={`text-sm font-medium ${textColor} transition-all duration-300`}>
        {text}
      </span>
    </li>
  );
};

const PlanCard = ({ plan, onSelect, delay = 0 }) => {
  const isHighlighted = plan.highlight;
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = isHighlighted
    ? `bg-gradient-to-br ${plan.gradient} text-white shadow-2xl scale-[1.02] hover:scale-[1.05] transition-all duration-500 animate-pop-in`
    : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up';
  
  const priceColor = isHighlighted ? 'text-white' : 'text-gray-900';
  const buttonClasses = isHighlighted
    ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105'
    : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg transform hover:scale-105`;

  return (
    <div 
      className={`flex flex-col rounded-2xl overflow-hidden transform ${cardClasses} relative`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
         
        </div>
      )}

      {/* Animated background effect */}
      {isHovered && isHighlighted && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
              style={{
                left: `${10 + i * 12}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{plan.icon}</span>
          <h3 className={`text-xl font-extrabold ${isHighlighted ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            {plan.name}
          </h3>
        </div>
        <p className={`text-sm mb-4 ${isHighlighted ? 'text-white/90' : 'text-gray-500'} animate-fade-in delay-100`}>
          {plan.description}
        </p>
        
        <div className="flex items-baseline animate-scale-in">
          <span className={`text-5xl font-extrabold tracking-tight ${priceColor}`}>
            ${plan.price}
          </span>
          <span className={`ml-1 text-xl font-medium ${isHighlighted ? 'text-white/90' : 'text-gray-500'}`}>
            /month
          </span>
        </div>
      </div>

      {/* Features & Button */}
      <div className={`flex flex-col flex-grow p-6 relative z-10 ${isHighlighted ? 'bg-white/10' : ''}`}>
        <ul className="flex-grow space-y-2">
          {plan.features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              text={feature.text} 
              included={feature.included}
            />
          ))}
        </ul>

        {/* Animated Button */}
        <button 
          type="button" 
          onClick={() => onSelect(plan.id)}
          className={`mt-6 w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${buttonClasses} animate-pulse-slow`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

// Checkout Component with marketing focus
const CheckoutPage = ({ planId, onBack, onComplete }) => {
    const plan = marketingTiers.find(p => p.id === planId);
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    
    if (!plan) {
        return (
            <div className="text-center p-20 animate-fade-in">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Plan Not Found</h2>
                <button 
                    onClick={onBack}
                    className="mt-4 py-2 px-6 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition transform hover:scale-105">
                    Back to Plans
                </button>
            </div>
        );
    }

    const handleComplete = async () => {
        setIsProcessing(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        onComplete();
        navigate('/404');
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-2xl animate-slide-up border border-purple-100">
            <div className="animate-fade-in">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">
                    Complete Your Marketing Plan
                </h1>
                <p className="text-gray-700 mb-4 animate-fade-in delay-200">
                    You're subscribing to <strong>{plan.name}</strong> for <strong>${plan.price}/month</strong>.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600 bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-xl animate-fade-in delay-300">
                    <li className="font-semibold text-purple-600">Key Marketing Features:</li>
                    {plan.features.filter(f => f.included).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: `${400 + index * 100}ms` }}>
                            <Check className="w-4 h-4 text-purple-500 flex-shrink-0" /> 
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Marketing Benefits */}
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 animate-fade-in delay-600">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Rocket className="w-4 h-4" />
                        Marketing Benefits:
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Dedicated marketing support</li>
                        <li>• Real-time campaign analytics</li>
                        <li>• Performance optimization</li>
                        <li>• Monthly strategy reviews</li>
                    </ul>
                </div>

                <div className="flex justify-between items-center pt-6 border-t animate-fade-in delay-700">
                    <button onClick={onBack}
                        className="text-purple-600 hover:text-purple-800 transition transform hover:scale-105 font-semibold">
                        &larr; Change Plan
                    </button>
                    <button 
                        onClick={handleComplete}
                        disabled={isProcessing}
                        className={`py-3 px-8 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                            isProcessing 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl`
                        }`}>
                        {isProcessing ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            'Start Marketing'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

const SubscriptionView = ({ handleSubscription }) => (
    <div className="max-w-7xl mx-auto pt-10 pb-20">
        
        {/* Modern Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Digital Marketing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Transform your digital presence with data-driven marketing strategies. From social media to AI-powered campaigns, we have the perfect plan to grow your business.
          </p>
          
          {/* Marketing Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { number: '3.2x', label: 'Average ROI' },
              { number: '24/7', label: 'Campaign Monitoring' },
              { number: '500+', label: 'Clients Transformed' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${500 + index * 200}ms` }}>
                <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid with modern design */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {marketingTiers.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handleSubscription}
              delay={300 + index * 200}
            />
          ))}
        </div>
        
        {/* Custom Solutions CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center animate-fade-in delay-1000 border border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Marketing Solutions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We create bespoke marketing strategies for unique business challenges. 
            Get a custom plan with dedicated marketing experts and advanced analytics.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Talk to Marketing Experts
          </Link>
        </div>
    </div>
);

// Main Component
const Subscription = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [message, setMessage] = useState('');
  const [isAuthReady, setIsAuthReady] = useState(false); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleSubscription = (planId) => {
    setSelectedPlanId(planId);
    setCurrentView('checkout');
    setMessage(`🚀 Setting up your marketing plan...`);
    setTimeout(() => setMessage(''), 1500);
    setTimeout(() => scrollToTop(), 100);
  }

  const handlePurchaseComplete = () => {
    setMessage(`🎉 Marketing plan activated! Our team will onboard you within 24 hours.`);
    setTimeout(() => setMessage(''), 5000);
    setCurrentView('home');
    setSelectedPlanId(null);
    setTimeout(() => scrollToTop(), 100);
  }

  const handleBackToPlans = () => {
    setCurrentView('home');
    setSelectedPlanId(null);
    setTimeout(() => scrollToTop(), 100);
  }

  useEffect(() => {
    scrollToTop();
  }, [currentView]);

  useEffect(() => {
    setIsAuthReady(true);
  }, []);

  let content;
  switch (currentView) {
      case 'checkout':
          content = <CheckoutPage 
            planId={selectedPlanId} 
            onBack={handleBackToPlans} 
            onComplete={handlePurchaseComplete}
          />;
          break;
      case 'home':
      default:
          content = <SubscriptionView handleSubscription={handleSubscription} />;
          break;
  }

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 min-h-screen p-4 sm:p-8 pt-24">
      {/* Global Message Box */}
      {message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-2xl transition-all duration-500 animate-slide-down">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <span>{message}</span>
          </div>
        </div>
      )}

      <div id="top-anchor" className="absolute top-0"></div>

      {content}

      {/* Enhanced CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradientShift 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default Subscription;