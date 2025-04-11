import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-primary-900/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <Cloud className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">
                Cloud Desk
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button 
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="px-3 py-2 rounded-md flex items-center font-bold text-white hover:text-primary-200"
              >
                <span>Services</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Services Dropdown */}
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="py-1 bg-white rounded-md shadow-lg border border-gray-200">
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('services');
                        if (element) {
                          sessionStorage.setItem('selectedService', 'virtual-assistant');
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        sessionStorage.setItem('scrollTarget', 'services');
                        sessionStorage.setItem('selectedService', 'virtual-assistant');
                      }
                    }}
                  >
                    Virtual Assistant Support
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('services');
                        if (element) {
                          sessionStorage.setItem('selectedService', 'customer-service');
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        sessionStorage.setItem('scrollTarget', 'services');
                        sessionStorage.setItem('selectedService', 'customer-service');
                      }
                    }}
                  >
                    Customer Service
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('services');
                        if (element) {
                          sessionStorage.setItem('selectedService', 'bookkeeping');
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        sessionStorage.setItem('scrollTarget', 'services');
                        sessionStorage.setItem('selectedService', 'bookkeeping');
                      }
                    }}
                  >
                    Bookkeeping & Finance
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('services');
                        if (element) {
                          sessionStorage.setItem('selectedService', 'admin-data-entry');
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        sessionStorage.setItem('scrollTarget', 'services');
                        sessionStorage.setItem('selectedService', 'admin-data-entry');
                      }
                    }}
                  >
                    Admin & Data Entry
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('services');
                        if (element) {
                          sessionStorage.setItem('selectedService', 'project-coordination');
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        sessionStorage.setItem('scrollTarget', 'services');
                        sessionStorage.setItem('selectedService', 'project-coordination');
                      }
                    }}
                  >
                    Project Coordination
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        const element = document.getElementById('services');
                        if (element) {
                          sessionStorage.setItem('selectedService', 'digital-presence');
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        sessionStorage.setItem('scrollTarget', 'services');
                        sessionStorage.setItem('selectedService', 'digital-presence');
                      }
                    }}
                  >
                    Digital Presence
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/pricing" 
              className="px-3 py-2 rounded-md font-bold text-white hover:text-primary-200"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-md font-bold text-white hover:text-primary-200"
            >
              About
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform-gpu"
            >
              <Link
                to="/contact"
                className="px-4 py-2 rounded-md font-bold bg-white text-primary-900 hover:bg-primary-50"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-primary-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary-900/95 backdrop-blur-sm shadow-lg rounded-b-lg mt-2 transform-gpu will-change-auto"
            style={{ transformOrigin: 'top' }}
          >
            <div className="py-3 space-y-1">
              <div>
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="w-full flex justify-between items-center px-4 py-3 text-white hover:text-primary-200"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesDropdown && (
                  <div className="pl-6 bg-primary-800/50 py-2">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:text-primary-200"
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          const element = document.getElementById('services');
                          if (element) {
                            sessionStorage.setItem('selectedService', 'virtual-assistant');
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          sessionStorage.setItem('scrollTarget', 'services');
                          sessionStorage.setItem('selectedService', 'virtual-assistant');
                        }
                      }}
                    >
                      Virtual Assistant Support
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:text-primary-200"
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          const element = document.getElementById('services');
                          if (element) {
                            sessionStorage.setItem('selectedService', 'customer-service');
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          sessionStorage.setItem('scrollTarget', 'services');
                          sessionStorage.setItem('selectedService', 'customer-service');
                        }
                      }}
                    >
                      Customer Service
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:text-primary-200"
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          const element = document.getElementById('services');
                          if (element) {
                            sessionStorage.setItem('selectedService', 'bookkeeping');
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          sessionStorage.setItem('scrollTarget', 'services');
                          sessionStorage.setItem('selectedService', 'bookkeeping');
                        }
                      }}
                    >
                      Bookkeeping & Finance
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:text-primary-200"
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          const element = document.getElementById('services');
                          if (element) {
                            sessionStorage.setItem('selectedService', 'admin-data-entry');
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          sessionStorage.setItem('scrollTarget', 'services');
                          sessionStorage.setItem('selectedService', 'admin-data-entry');
                        }
                      }}
                    >
                      Admin & Data Entry
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:text-primary-200"
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          const element = document.getElementById('services');
                          if (element) {
                            sessionStorage.setItem('selectedService', 'project-coordination');
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          sessionStorage.setItem('scrollTarget', 'services');
                          sessionStorage.setItem('selectedService', 'project-coordination');
                        }
                      }}
                    >
                      Project Coordination
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-white hover:text-primary-200"
                      onClick={() => {
                        setIsOpen(false);
                        if (location.pathname === '/') {
                          const element = document.getElementById('services');
                          if (element) {
                            sessionStorage.setItem('selectedService', 'digital-presence');
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        } else {
                          sessionStorage.setItem('scrollTarget', 'services');
                          sessionStorage.setItem('selectedService', 'digital-presence');
                        }
                      }}
                    >
                      Digital Presence
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                to="/pricing"
                className="block px-4 py-3 text-white hover:text-primary-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-white hover:text-primary-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="px-4 pt-2 pb-3">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 text-center font-bold bg-white text-primary-900 rounded-md hover:bg-primary-50 transform-gpu"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;