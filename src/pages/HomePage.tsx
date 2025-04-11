import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle2,
  Star,
  Mail,
  Calendar,
  HeadphonesIcon,
  Calculator,
  FileText,
  ClipboardList,
  Instagram
} from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Text animation variants
const letterAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const HomePage = () => {
  const services = [
    {
      title: 'Virtual Assistant Support',
      description: 'Email management, calendar organization, and personal task management',
      icon: Mail,
      link: '/services/virtual-assistant'
    },
    {
      title: 'Customer Service',
      description: 'Handle inquiries, update CRM systems, and manage client communications',
      icon: HeadphonesIcon,
      link: '/services/customer-service'
    },
    {
      title: 'Bookkeeping & Finance',
      description: 'Invoicing, expense tracking, and financial report preparation',
      icon: Calculator,
      link: '/services/bookkeeping'
    },
    {
      title: 'Admin & Data Entry',
      description: 'Document formatting, database updates, and spreadsheet management',
      icon: FileText,
      link: '/services/admin-data-entry'
    },
    {
      title: 'Project Coordination',
      description: 'Task tracking, deadline reminders, and project support',
      icon: ClipboardList,
      link: '/services/project-coordination'
    },
    {
      title: 'Digital Presence',
      description: 'Social media scheduling, online reputation monitoring, and content curation',
      icon: Instagram,
      link: '/services/digital-presence'
    }
  ];

  // Animation sequence for the title words
  const titleWords = ["Affordable", "Virtual", "Administrative", "Support", "for", "SMEs"];

  // Effect to handle scrolling to a section after navigation from service page
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    const selectedService = sessionStorage.getItem('selectedService');
    
    if (scrollTarget) {
      // Clear the scrollTarget to prevent scrolling on subsequent visits
      sessionStorage.removeItem('scrollTarget');
      
      // Add a small delay to ensure the page is fully loaded
      setTimeout(() => {
        const targetElement = document.getElementById(scrollTarget);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // If a specific service was selected, highlight it
          if (selectedService) {
            highlightSelectedService(selectedService);
          }
        }
      }, 500);
    } else if (selectedService) {
      // If only the service is selected (user was already on homepage)
      highlightSelectedService(selectedService);
    }
    
    // Clear the selectedService
    if (selectedService) {
      sessionStorage.removeItem('selectedService');
    }
    
    // Helper function to highlight the selected service
    function highlightSelectedService(serviceId: string) {
      // Add a small delay to ensure the DOM is ready
      setTimeout(() => {
        // Find all service cards
        const serviceCards = document.querySelectorAll('#services .grid > div');
        
        // Find the matching service by link
        serviceCards.forEach((card) => {
          const link = card.querySelector('a');
          if (link && link.getAttribute('href')?.includes(serviceId)) {
            // Add a highlight effect using transform instead of multiple properties
            card.classList.add('highlight-card');
            
            // Scroll the card into view within the services section
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Remove the highlight after 2 seconds
            setTimeout(() => {
              card.classList.remove('highlight-card');
            }, 2000);
          }
        });
      }, 700);
    }
  }, []);

  return (
    <div className="will-change-auto">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Animated Background with Photos */}
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40 py-20 md:py-32">
          <motion.div 
            className="text-center md:text-left md:flex md:items-center md:justify-between"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="md:w-2/3 mb-10 md:mb-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mb-6"
              >
                <div className="overflow-hidden">
                  {titleWords.map((word, index) => (
                    <motion.span 
                      key={index}
                      className={`inline-block text-4xl md:text-5xl lg:text-6xl font-bold mr-4 text-shadow-lg ${index % 2 === 0 ? 'text-white' : 'text-gradient'}`}
                      variants={letterAnimation}
                      custom={index}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeOut" 
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl text-shadow-md"
                variants={fadeInUp}
              >
                Get professional remote assistance at a fraction of the cost of hiring full-time staff
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/pricing"
                    className="bg-white text-primary-700 px-8 py-3 rounded-md hover:bg-gray-100 transition font-medium text-lg inline-block shadow-lg"
                  >
                    View Plans
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-md hover:bg-white/10 transition font-medium text-lg inline-block"
                  >
                    Free Consultation
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-1/3 flex justify-center md:justify-end"
              variants={fadeInUp}
            >
              <motion.div 
                className="relative will-change-transform"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.3 }}
              >
                <div className="absolute inset-0 bg-primary-300 rounded-full blur-3xl opacity-20 transform-gpu"></div>
                <img 
                  src="/logo-grayscale.png" 
                  alt="Cloud Desk Logo"
                  className="relative z-10 w-full max-w-sm mx-auto p-4 transform-gpu rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
              <path d="M7 13l5 5 5-5"></path>
              <path d="M7 7l5 5 5-5"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-sm font-semibold tracking-wider text-primary-600 uppercase mb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Why SMEs Choose Cloud Desk
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <Clock className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Remote Work Experts</h3>
              <p className="text-gray-600">Our team specializes in virtual administrative support, adapting to the growing trend of remote and hybrid work models.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <Users className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Cost Efficiency</h3>
              <p className="text-gray-600">Save up to 70% compared to hiring full-time staff, with no overhead costs for office space or equipment.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <TrendingUp className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Scalable Solutions</h3>
              <p className="text-gray-600">Flexible packages that grow with your business needs, from occasional support to full administrative teams.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-sm font-semibold tracking-wider text-primary-600 uppercase mb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive Virtual Support
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Cloud Desk provides essential administrative services to help SMEs focus on core business activities
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform-gpu"
                variants={fadeInUp}
                whileHover={{ 
                  y: -15,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Link to={service.link} className="block h-full">
                  <div className="p-8">
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-all duration-300 group-hover:rotate-6 transform transform-gpu">
                        <service.icon className="w-10 h-10 text-primary-600" />
                      </div>
                      <div className="absolute w-16 h-16 bg-primary-600/10 rounded-full -left-4 -top-4 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-30 transform-gpu"></div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300 transform-gpu">
                      <span>Learn more</span>
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M5 7l5 5-5 5" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="md:flex md:items-center md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to streamline your business operations?
              </h2>
              <p className="text-xl text-primary-100 mb-6 md:mb-0 max-w-2xl">
                Book a free consultation to discover how Cloud Desk can support your administrative needs and help your business grow.
              </p>
            </div>
            <div className="text-center md:text-right md:w-1/3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-white text-primary-700 px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition shadow-lg"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;