import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-gray-300 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#8B5CF6', '#EC4899', '#3B82F6', '#06B6D4'][i % 4],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-purple-700/30 relative z-10">
        
        {/* Company Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              stackly
            </h1>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Your premier digital marketing partner driving business growth through innovative strategies, 
            data-driven campaigns, and measurable results. We transform brands in the digital landscape.
          </p>

          <div className="flex justify-center md:justify-start space-x-3">
            {[
              { icon: <FacebookIcon className="hover:text-pink-400 transition-colors duration-200" />, url: "#", color: "hover:bg-yellow-500" },
              { icon: <InstagramIcon className="hover:text-bule-500 transition-colors duration-200" />, url: "#", color: "hover:bg-red-500" },
             { icon: <LinkedInIcon className="hover:text-green-600 transition-colors duration-200" />, url: "#", color: "hover:bg-pink-600" },
              { icon: <YouTubeIcon className="hover:text-yellow-600 transition-colors duration-200" />, url: "#", color: "hover:bg-green-600" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Digital Marketing Services */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h5>
          <ul className="space-y-3">
            {[
              { label: "SEO Optimization", url: "/seo" },
              { label: "PPC Advertising", url: "/ppc" },
              { label: "Social Media Marketing", url: "/social-media" },
              { label: "Content Marketing", url: "/content" },
              
            ].map((service, index) => (
              <li key={index}>
                <a 
                  href={service.url} 
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-normal block py-1 hover:translate-x-2"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quick Links
          </h5>
          <ul className="space-y-3">
            {[
              { label: "Home", url: "/" },
              { label: "About Us", url: "/about" },
              { label: "Services", url: "/services" },
              
              { label: "Contact", url: "/contact" }
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm font-normal block py-1 hover:translate-x-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-white text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
              <LocationOnIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 mb-2 md:mb-0" />
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-300 font-medium">Logistics Hub</p>
                <p className="text-sm text-gray-400">MMR Complex</p>
                <p className="text-sm text-gray-400">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-400">India - 636008</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.google.com/maps/search/?api=1&query=MMR+COMPLEX,+Salem,+Tamil+Nadu+636008"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 hover:text-green-300 underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-3 group">
              <PhoneIcon className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-purple-400 transition-all duration-300">
                +91 98765 43210
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3 group">
              <EmailIcon className="w-5 h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <a href="mailto:hello@digigrow.com" className="text-sm text-gray-400 hover:text-purple-400 transition-all duration-300">
                hello@stackly.com
              </a>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} <span className="text-purple-400 font-semibold">stackly</span>. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy", url: "/privacy" },
              { label: "Terms of Service", url: "/terms" },
              { label: "Cookie Policy", url: "/cookies" },
              { label: "GDPR Compliance", url: "/gdpr" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-purple-700/30 text-center">
          <p className="text-xs text-black-500">
            stackly - Driving digital transformation through innovative marketing strategies. 
            Google Premier Partner • Meta Business Partner • Certified Marketing Professionals
          </p>
          <div className="flex justify-center space-x-6 mt-3">
            {[
              "Data-Driven Results",
              "ROI-Focused Campaigns",
              "24/7 Campaign Monitoring",
              "Real-Time Analytics"
            ].map((tag, index) => (
              <span key={index} className="text-xs text-purple-400/70 bg-purple-900/30 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center space-x-8 mt-6 opacity-80">
          <div className="text-center">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-xs text-gray-400">Google Certified</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-xs text-gray-400">Meta Partner</span>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-xs text-gray-400">24/7 Support</span>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;