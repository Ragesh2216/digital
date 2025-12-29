import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i % 4],
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-300 relative z-10">
        
        {/* Company Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              stackly
            </h1>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Your premier digital marketing partner driving business growth through innovative strategies, 
            data-driven campaigns, and measurable results. We transform brands in the digital landscape.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3">
            {[
              { 
                icon: <FacebookIcon className="text-blue-600" />, 
                label: "Facebook",
                color: "hover:bg-blue-50 border-blue-100",
                hoverColor: "group-hover:text-blue-600"
              },
              { 
                icon: <TwitterIcon className="text-blue-400" />, 
                label: "Twitter",
                color: "hover:bg-blue-50 border-blue-100",
                hoverColor: "group-hover:text-blue-500"
              },
              { 
                icon: <InstagramIcon className="text-pink-600" />, 
                label: "Instagram",
                color: "hover:bg-pink-50 border-pink-100",
                hoverColor: "group-hover:text-pink-600"
              },
              { 
                icon: <LinkedInIcon className="text-blue-700" />, 
                label: "LinkedIn",
                color: "hover:bg-blue-50 border-blue-100",
                hoverColor: "group-hover:text-blue-700"
              },
              { 
                icon: <YouTubeIcon className="text-red-600" />, 
                label: "YouTube",
                color: "hover:bg-red-50 border-red-100",
                hoverColor: "group-hover:text-red-600"
              }
            ].map((social, index) => (
              <Link
                key={index}
                to="/404"
                className={`group w-10 h-10 bg-white rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:shadow-md ${social.color}`}
                aria-label={social.label}
                title={social.label}
              >
                <div className={social.hoverColor}>
                  {social.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Digital Marketing Services */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-6">
            Our Services
          </h5>
          <ul className="space-y-3">
            {[
              { label: "SEO Optimization", url: "/404" },
              { label: "PPC Advertising", url: "/404" },
              { label: "Social Media Marketing", url: "/404" },
              { label: "Content Marketing", url: "/404" },
              
            ].map((service, index) => (
              <li key={index}>
                <Link 
                  to={service.url} 
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm font-normal block py-1 hover:translate-x-2 hover:font-medium"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-6">
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
                <Link 
                  to={link.url} 
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm font-normal block py-1 hover:translate-x-2 hover:font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-gray-900 text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
              <LocationOnIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 mb-2 md:mb-0" />
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-800 font-medium">Logistics Hub</p>
                <p className="text-sm text-gray-600">MMR Complex</p>
                <p className="text-sm text-gray-600">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-600">India - 636008</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link
                to="/404"
                className="text-blue-600 hover:text-blue-700 underline text-sm font-medium"
              >
                View on Google Maps →
              </Link>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3 group">
              <PhoneIcon className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <Link 
                to="/404" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                +91 98765 43210
              </Link>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3 group">
              <EmailIcon className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <Link 
                to="/404" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
              >
                hello@stackly.com
              </Link>
            </div>

            {/* Newsletter Signup */}
            
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} <span className="text-blue-600 font-semibold">stackly</span>. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy", url: "/404" },
              { label: "Terms of Service", url: "/404" },
              { label: "Cookie Policy", url: "/404" },
              { label: "GDPR Compliance", url: "/404" },
              { label: "Sitemap", url: "/sitemap" }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-500 mb-3">
            stackly - Driving digital transformation through innovative marketing strategies. 
            Google Premier Partner • Meta Business Partner • Certified Marketing Professionals
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {[
              "Data-Driven Results",
              "ROI-Focused Campaigns",
              "24/7 Campaign Monitoring",
              "Real-Time Analytics",
              "Performance Guarantee"
            ].map((tag, index) => (
              <span 
                key={index} 
                className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            { 
              label: "Google Certified", 
              color: "bg-green-50 border-green-200 text-green-700",
              icon: "✓"
            },
            { 
              label: "Meta Partner", 
              color: "bg-blue-50 border-blue-200 text-blue-700",
              icon: "✓"
            },
            { 
              label: "24/7 Support", 
              color: "bg-purple-50 border-purple-200 text-purple-700",
              icon: "✓"
            },
            { 
              label: "GDPR Compliant", 
              color: "bg-indigo-50 border-indigo-200 text-indigo-700",
              icon: "✓"
            }
          ].map((badge, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border"
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${badge.color.split(' ')[0]} ${badge.color.split(' ')[1]}`}>
                <span className="text-xs font-bold">{badge.icon}</span>
              </div>
              <span className="text-xs font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 mb-2">Accepted Payment Methods</p>
          <div className="flex justify-center space-x-4 opacity-70">
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;