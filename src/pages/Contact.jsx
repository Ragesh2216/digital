import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    objective: "",
    audience: "",
    services: [],
    budget: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isSubmitted]);

  const steps = [
    { number: 1, title: "Basic Info", icon: "👤", shortTitle: "Info" },
    { number: 2, title: "Business Goals", icon: "🎯", shortTitle: "Goals" },
    { number: 3, title: "Services", icon: "📊", shortTitle: "Services" },
    { number: 4, title: "Review", icon: "🚀", shortTitle: "Review" }
  ];

  // Validation rules for each step
  const validationRules = {
    step1: ['name', 'company', 'email', 'phone'],
    step2: ['objective', 'audience'],
    step3: ['services', 'budget']
  };

  const validateField = (name, value) => {
    const errors = {};
    
    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Full name is required';
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters';
        break;
      case 'company':
        if (!value.trim()) errors.company = 'Company name is required';
        break;
      case 'email':
        if (!value.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = 'Please enter a valid email address';
        break;
      case 'phone':
         if (!value.trim()) errors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) errors.phone = 'Phone number must be exactly 10 digits';
      break;
      case 'objective':
        if (!value) errors.objective = 'Please select your primary objective';
        break;
      case 'audience':
        if (!value.trim()) errors.audience = 'Please describe your target audience';
        else if (value.trim().length < 20) errors.audience = 'Please provide more details (minimum 20 characters)';
        break;
      case 'services':
        if (!value || value.length === 0) errors.services = 'Please select at least one service';
        break;
      case 'budget':
        if (!value) errors.budget = 'Please select your budget range';
        break;
      default:
        break;
    }
    
    return errors;
  };

  const validateStep = (step) => {
    const fieldsToValidate = validationRules[`step${step}`];
    const errors = {};
    
    fieldsToValidate.forEach(field => {
      const fieldErrors = validateField(field, formData[field]);
      Object.assign(errors, fieldErrors);
    });
    
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Mark field as touched
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
    
    if (type === 'checkbox') {
      const newServices = checked 
        ? [...formData.services, value]
        : formData.services.filter(service => service !== value);
      
      setFormData(prev => ({
        ...prev,
        services: newServices
      }));
      
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
    
    const errors = validateField(name, value);
    setFormErrors(prev => ({
      ...prev,
      [name]: errors[name]
    }));
  };

  const handleServicesBlur = () => {
    setTouchedFields(prev => ({
      ...prev,
      services: true
    }));
    
    const errors = validateField('services', formData.services);
    setFormErrors(prev => ({
      ...prev,
      services: errors.services
    }));
  };

  const handleBudgetBlur = () => {
    setTouchedFields(prev => ({
      ...prev,
      budget: true
    }));
    
    const errors = validateField('budget', formData.budget);
    setFormErrors(prev => ({
      ...prev,
      budget: errors.budget
    }));
  };

  const nextStep = () => {
    // Validate current step
    const errors = {};
    const fieldsToValidate = validationRules[`step${currentStep}`];
    
    fieldsToValidate.forEach(field => {
      const fieldErrors = validateField(field, formData[field]);
      Object.assign(errors, fieldErrors);
    });
    
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Mark all fields in current step as touched to show errors
      const fieldsToTouch = fieldsToValidate.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      setTouchedFields(prev => ({ ...prev, ...fieldsToTouch }));
      
      // Scroll to first error
      setTimeout(() => {
        const firstError = document.querySelector('.border-red-500');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all steps before submission
    let allValid = true;
    const allErrors = {};
    
    for (let step = 1; step <= 3; step++) {
      const fieldsToValidate = validationRules[`step${step}`];
      fieldsToValidate.forEach(field => {
        const fieldErrors = validateField(field, formData[field]);
        Object.assign(allErrors, fieldErrors);
      });
    }
    
    setFormErrors(allErrors);
    
    if (Object.keys(allErrors).length > 0) {
      allValid = false;
      // Mark all fields as touched to show errors
      const allFieldsToTouch = {};
      for (let step = 1; step <= 3; step++) {
        validationRules[`step${step}`].forEach(field => {
          allFieldsToTouch[field] = true;
        });
      }
      setTouchedFields(prev => ({ ...prev, ...allFieldsToTouch }));
      
      // Scroll to first error
      setTimeout(() => {
        const firstError = document.querySelector('.border-red-500');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ 
        name: "", 
        company: "", 
        email: "", 
        phone: "", 
        objective: "",
        audience: "",
        services: [],
        budget: "", 
        message: "" 
      });
      setFormErrors({});
      setTouchedFields({});
    }, 2000);
  };

  const getStepStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'upcoming';
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pt-24 px-4">
        <div className="max-w-2xl mx-auto py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 text-center animate-success-pop border border-white/50">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce shadow-lg">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in-up">
              Marketing Audit Requested!
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg animate-fade-in-up delay-200">
              Thank you for contacting Digital Growth Solutions. Our marketing experts will analyze your requirements 
              and get back to you within 24 hours with a customized marketing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-400">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-md text-sm sm:text-base"
              >
                Request Another Audit
              </button>
              <Link
                to="/"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-sm text-sm sm:text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4', '#F59E0B', '#10B981'][i % 6],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '25%'
            }}
          />
        ))}
      </div>

      <main className="pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-8 sm:mb-12">
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3 sm:mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Digital Marketing Excellence
          </h1>
          <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Ready to skyrocket your online presence? Let's create a winning digital strategy together.
          </p>
        </section>

        {/* Progress Steps */}
        <div className="flex justify-between mb-6 sm:mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 sm:h-2 bg-gray-200 -translate-y-1/2 -z-10 rounded-full"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 -translate-y-1/2 -z-10 transition-all duration-500 rounded-full"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step) => {
            const status = getStepStatus(step.number);
            return (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-500 shadow-lg ${
                  status === 'completed' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 scale-110' 
                    : status === 'current'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-110 ring-4 ring-purple-200'
                    : 'bg-gray-300'
                }`}>
                  {status === 'completed' ? (
                    <span className="text-sm sm:text-base">✓</span>
                  ) : (
                    <span className="text-sm sm:text-base">{step.icon}</span>
                  )}
                </div>
                <span className={`mt-1 sm:mt-2 text-xs sm:text-sm font-medium ${
                  status !== 'upcoming' ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">{step.shortTitle}</span>
                </span>
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform transition-all duration-500 animate-fade-in-up">
  {/* Step 1: Basic Info */}
  {currentStep === 1 && (
    <div className="animate-fade-in-up">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-2xl">👤</span>
        Tell Us About Yourself
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", required: true },
          { label: "Company *", name: "company", type: "text", placeholder: "Your company", required: true },
          { label: "Email *", name: "email", type: "email", placeholder: "your.email@company.com", required: true },
          { 
            label: "Phone *", 
            name: "phone", 
            type: "tel", 
            placeholder: "1234567890", 
            required: true,
            pattern: "[0-9]{10}",
            title: "Please enter exactly 10 digits"
          }
        ].map((field, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                formErrors[field.name] && touchedFields[field.name]
                  ? 'border-red-500 focus:ring-red-500 bg-red-50' 
                  : formData[field.name] && !formErrors[field.name] && touchedFields[field.name]
                  ? 'border-green-500 focus:ring-green-500 bg-green-50'
                  : 'border-gray-300 focus:ring-purple-500 hover:border-purple-300'
              }`}
              placeholder={field.placeholder}
              required={field.required}
              pattern={field.pattern}
              title={field.title}
              maxLength={10}
            />
            {formErrors[field.name] && touchedFields[field.name] && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <span>⚠️</span>
                {formErrors[field.name]}
              </p>
            )}
            {formData[field.name] && !formErrors[field.name] && touchedFields[field.name] && (
              <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                <span>✅</span>
                {field.name === 'phone' ? 'Valid 10-digit number!' : 'Looks good!'}
              </p>
            )}
            {field.name === 'phone' && (
              <p className="mt-1 text-xs text-gray-500">
                Enter 10 digits without spaces or special characters
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )}
          

          {/* Step 2: Business Goals */}
          {currentStep === 2 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                What Are Your Goals?
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-fade-in-up">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Objective *</label>
                  <select
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      formErrors.objective && touchedFields.objective
                        ? 'border-red-500 focus:ring-red-500 bg-red-50' 
                        : formData.objective && !formErrors.objective && touchedFields.objective
                        ? 'border-green-500 focus:ring-green-500 bg-green-50'
                        : 'border-gray-300 focus:ring-purple-500 hover:border-purple-300'
                    }`}
                    required
                  >
                    <option value="">Select your main goal *</option>
                    <option value="traffic">Increase Website Traffic</option>
                    <option value="leads">Generate More Leads</option>
                    <option value="sales">Boost Sales</option>
                    <option value="awareness">Improve Brand Awareness</option>
                    <option value="social">Enhance Social Media Presence</option>
                    <option value="conversion">Improve Conversion Rate</option>
                    <option value="retention">Customer Retention</option>
                  </select>
                  {formErrors.objective && touchedFields.objective && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <span>⚠️</span>
                      {formErrors.objective}
                    </p>
                  )}
                  {formData.objective && !formErrors.objective && touchedFields.objective && (
                    <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                      <span>✅</span>
                      Great objective selected!
                    </p>
                  )}
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience *</label>
                  <textarea
                    name="audience"
                    value={formData.audience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="3"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg sm:rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 resize-vertical ${
                      formErrors.audience && touchedFields.audience
                        ? 'border-red-500 focus:ring-red-500 bg-red-50' 
                        : formData.audience && !formErrors.audience && touchedFields.audience
                        ? 'border-green-500 focus:ring-green-500 bg-green-50'
                        : 'border-gray-300 focus:ring-purple-500 hover:border-purple-300'
                    }`}
                    placeholder="Describe your ideal customers, their interests, demographics, age group, location, and behaviors..."
                    required
                  ></textarea>
                  {formErrors.audience && touchedFields.audience && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <span>⚠️</span>
                      {formErrors.audience}
                    </p>
                  )}
                  {formData.audience && !formErrors.audience && touchedFields.audience && (
                    <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
                      <span>✅</span>
                      Detailed audience description!
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum 20 characters required. Include demographics, interests, and behaviors.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Services */}
          {currentStep === 3 && (
            <div className="animate-fade-in-up" onBlur={handleServicesBlur}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Marketing Services Needed
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="animate-fade-in-up">
                  <label className="block text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                    Select Services (Choose at least one) *
                    {formErrors.services && touchedFields.services && (
                      <span className="text-red-600 ml-2 text-xs font-normal">- {formErrors.services}</span>
                    )}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { id: 'seo', label: 'SEO Optimization', icon: '🔍', description: 'Improve search rankings' },
                      { id: 'ppc', label: 'PPC Advertising', icon: '💸', description: 'Google & social ads' },
                      { id: 'social', label: 'Social Media', icon: '📱', description: 'Platform management' },
                      { id: 'email', label: 'Email Marketing', icon: '✉️', description: 'Campaigns & automation' },
                      { id: 'content', label: 'Content Creation', icon: '📝', description: 'Blogs & copywriting' },
                      { id: 'web', label: 'Web Design', icon: '💻', description: 'UI/UX development' },
                      { id: 'analytics', label: 'Analytics', icon: '📈', description: 'Data & reporting' },
                      { id: 'strategy', label: 'Marketing Strategy', icon: '🎯', description: 'Complete planning' }
                    ].map((service, index) => (
                      <label 
                        key={service.id} 
                        className={`flex items-start space-x-2 sm:space-x-3 p-3 border rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.services.includes(service.id)
                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-500 shadow-md scale-105'
                            : formErrors.services && touchedFields.services
                            ? 'border-red-200 hover:border-red-300'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <input 
                          type="checkbox" 
                          name="services"
                          value={service.id}
                          checked={formData.services.includes(service.id)}
                          onChange={handleChange}
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 mt-1" 
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-lg">{service.icon}</span>
                            <span className="text-gray-700 text-sm sm:text-base font-medium">{service.label}</span>
                          </div>
                          <p className="text-gray-500 text-xs">{service.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  {formData.services.length > 0 && !formErrors.services && touchedFields.services && (
                    <p className="mt-3 text-xs text-green-600 flex items-center gap-1">
                      <span>✅</span>
                      {formData.services.length} service(s) selected - Great choices!
                    </p>
                  )}
                  {formErrors.services && touchedFields.services && (
                    <p className="mt-3 text-xs text-red-600 flex items-center gap-1">
                      <span>⚠️</span>
                      Please select at least one service to continue
                    </p>
                  )}
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }} onBlur={handleBudgetBlur}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Budget *
                    {formErrors.budget && touchedFields.budget && (
                      <span className="text-red-600 ml-2 text-xs font-normal">- {formErrors.budget}</span>
                    )}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: '1k-5k', label: '$1K-5K', description: 'Starter' },
                      { value: '5k-15k', label: '$5K-15K', description: 'Growth' },
                      { value: '15k-50k', label: '$15K-50K', description: 'Professional' },
                      { value: '50k+', label: '$50K+', description: 'Enterprise' }
                    ].map((budget, index) => (
                      <label key={budget.value} className="flex-1">
                        <input 
                          type="radio" 
                          name="budget" 
                          value={budget.value}
                          checked={formData.budget === budget.value}
                          onChange={handleChange}
                          className="sr-only" 
                        />
                        <div className={`p-3 border rounded-lg sm:rounded-xl text-center transition-all duration-300 cursor-pointer ${
                          formData.budget === budget.value
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                            : formErrors.budget && touchedFields.budget
                            ? 'border-red-500 hover:border-red-600 bg-red-50'
                            : 'border-gray-200 hover:border-purple-500 hover:bg-purple-50'
                        }`}>
                          <div className="text-sm sm:text-base font-semibold">{budget.label}</div>
                          <div className="text-xs opacity-80 mt-1">{budget.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {formData.budget && !formErrors.budget && touchedFields.budget && (
                    <p className="mt-3 text-xs text-green-600 flex items-center gap-1">
                      <span>✅</span>
                      Budget range selected - Perfect for planning!
                    </p>
                  )}
                  {formErrors.budget && touchedFields.budget && (
                    <p className="mt-3 text-xs text-red-600 flex items-center gap-1">
                      <span>⚠️</span>
                      Please select your budget range to continue
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="animate-fade-in-up">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Review Your Information
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6 border border-purple-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: 'Full Name', value: formData.name, required: true },
                    { label: 'Company', value: formData.company, required: true },
                    { label: 'Email', value: formData.email, required: true },
                    { label: 'Phone', value: formData.phone, required: true },
                    { label: 'Primary Objective', value: formData.objective, required: true },
                    { label: 'Monthly Budget', value: formData.budget ? `$${formData.budget.toUpperCase()}` : null, required: true }
                  ].map((item, index) => (
                    <div key={index} className={`bg-white/80 backdrop-blur-sm p-3 rounded-lg border ${
                      item.value ? 'border-green-200' : 'border-red-200'
                    }`}>
                      <strong className={`flex items-center gap-2 ${
                        item.value ? 'text-purple-600' : 'text-red-600'
                      }`}>
                        {item.value ? '✅' : '⚠️'} {item.label} *
                      </strong>
                      <div className={`mt-1 ${item.value ? 'text-gray-700' : 'text-red-500 font-medium'}`}>
                        {item.value || 'MISSING - Please go back and fill this field'}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className={`bg-white/80 backdrop-blur-sm p-3 rounded-lg border ${
                  formData.audience ? 'border-green-200' : 'border-red-200'
                }`}>
                  <strong className={`flex items-center gap-2 ${
                    formData.audience ? 'text-purple-600' : 'text-red-600'
                  }`}>
                    {formData.audience ? '✅' : '⚠️'} Target Audience *
                  </strong>
                  <div className={`mt-1 ${formData.audience ? 'text-gray-700' : 'text-red-500 font-medium'}`}>
                    {formData.audience || 'MISSING - Please go back and describe your target audience'}
                  </div>
                </div>
                
                <div className={`bg-white/80 backdrop-blur-sm p-3 rounded-lg border ${
                  formData.services.length > 0 ? 'border-green-200' : 'border-red-200'
                }`}>
                  <strong className={`flex items-center gap-2 ${
                    formData.services.length > 0 ? 'text-purple-600' : 'text-red-600'
                  }`}>
                    {formData.services.length > 0 ? '✅' : '⚠️'} Services Selected *
                  </strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.services.length > 0 ? (
                      formData.services.map(service => (
                        <span key={service} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs">
                          {service}
                        </span>
                      ))
                    ) : (
                      <span className="text-red-500 font-medium">MISSING - Please go back and select at least one service</span>
                    )}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                    <span className="text-gray-500 font-normal ml-1">- Help us understand your specific needs better</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-vertical bg-white"
                    placeholder="Any specific requirements, timeline, current challenges, or additional information that would help us serve you better..."
                  ></textarea>
                  <p className="mt-1 text-xs text-gray-500">
                    This field is optional but recommended for better service customization.
                  </p>
                </div>

                {/* Final Validation Check */}
                <div className={`p-4 rounded-lg border-2 ${
                  validateStep(1) && validateStep(2) && validateStep(3) 
                    ? 'bg-green-50 border-green-500' 
                    : 'bg-red-50 border-red-500'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      validateStep(1) && validateStep(2) && validateStep(3) 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {validateStep(1) && validateStep(2) && validateStep(3) ? '✓' : '!'}
                    </div>
                    <div>
                      <p className={`font-semibold ${
                        validateStep(1) && validateStep(2) && validateStep(3) 
                          ? 'text-green-800' 
                          : 'text-red-800'
                      }`}>
                        {validateStep(1) && validateStep(2) && validateStep(3) 
                          ? 'All required information provided! Ready to submit.' 
                          : 'Missing required information. Please complete all steps.'}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        We need all required fields (marked with *) to create your customized marketing proposal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              ← Previous
            </button>
            
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  validateStep(currentStep)
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg'
                    : 'bg-gray-400 cursor-not-allowed opacity-70'
                }`}
                disabled={!validateStep(currentStep)}
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || !(validateStep(1) && validateStep(2) && validateStep(3))}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg sm:rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm sm:text-base shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <span className="text-lg">🚀</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-700 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 transform transition-all duration-500 animate-fade-in-up border border-purple-500/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center drop-shadow-lg flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl animate-pulse">💡</span>
              Digital Marketing FAQs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  question: "What's included in your free marketing audit?",
                  answer: "Our comprehensive audit covers website SEO, social media presence, content strategy, competitor analysis, and growth opportunities with actionable recommendations."
                },
                {
                  question: "How quickly can I see results?",
                  answer: "PPC campaigns show results within days, SEO takes 3-6 months for significant traction, while social media builds engagement within weeks."
                },
                {
                  question: "Do you work with specific industries?",
                  answer: "We've successfully served e-commerce, SaaS, healthcare, real estate, education, and B2B companies with tailored strategies."
                },
                {
                  question: "What makes your approach different?",
                  answer: "We combine data-driven strategies with creative storytelling, focusing on measurable ROI and building sustainable growth funnels."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg sm:rounded-xl p-4 transition-all duration-300 transform hover:scale-105 animate-fade-in-up group hover:bg-white/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-white mb-2 sm:mb-3 group-hover:text-purple-200 transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
                    <span className="text-lg">❓</span>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) translateX(8px) rotate(3deg);
          }
          66% {
            transform: translateY(8px) translateX(-8px) rotate(-3deg);
          }
        }
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-success-pop {
          animation: success-pop 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;