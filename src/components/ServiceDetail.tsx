import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Plus } from 'lucide-react';
import { ServiceItem } from '../types/serviceTypes';

interface ServiceDetailProps {
  service: ServiceItem;
  nextService?: ServiceItem;
  prevService?: ServiceItem;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const featureCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10 
    }
  }
};

const benefitVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring", 
      stiffness: 70 
    }
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, nextService, prevService }) => {
  const Icon = service.icon;
  const ref = useRef(null);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section with Parallax */}
      <div ref={ref} className="relative h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            y: imageY,
            scale: 1.1,
            opacity 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10" />
          <img 
            src={service.imageSrc}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-20">
          <div className="flex flex-col h-full justify-end pb-20">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white p-3 rounded-lg mr-4 shadow-lg">
                <Icon className="h-10 w-10 text-primary-600" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {service.title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {service.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center hover:bg-primary-700 transition-colors shadow-xl text-lg"
              >
                <span>Get started with this service</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation */}
        <div className="flex flex-wrap justify-between items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link 
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
              onClick={(e) => {
                // Store the scroll target in sessionStorage before navigation
                sessionStorage.setItem('scrollTarget', 'services');
                // Let the Link component handle the navigation
              }}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to all services</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link to="/services" className="text-gray-500 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-primary-600 font-medium">{service.title}</span>
          </motion.div>
        </div>

        {/* Features section with animated cards */}
        <motion.div 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center"
            variants={fadeIn}
          >
            What's included
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Our {service.title} provides all these capabilities to help streamline your operations.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300"
                variants={featureCardVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.2 },
                }}
              >
                <div className="p-8">
                  <div className="bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <Plus className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits section with animated list */}
        <motion.div 
          className="bg-gray-50 p-10 md:p-16 rounded-3xl mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why businesses choose our {service.title} to streamline their operations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                variants={benefitVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div 
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 md:p-16 text-white shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to streamline your workflow?
            </h2>
            <p className="text-xl mb-10 text-primary-100">
              Get started with our {service.title} today and focus on what matters most: growing your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md font-medium text-lg inline-block w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg inline-block w-full sm:w-auto"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Next/Prev service navigation */}
        {(prevService || nextService) && (
          <div className="mt-24 grid md:grid-cols-2 gap-8">
            {prevService && (
              <motion.div 
                className="group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  to={`/services/${prevService.id}`}
                  className="flex flex-col h-full bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    <span>Previous service</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {prevService.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {prevService.shortDescription}
                  </p>
                </Link>
              </motion.div>
            )}
            
            {nextService && (
              <motion.div 
                className="group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  to={`/services/${nextService.id}`}
                  className="flex flex-col h-full bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-sm text-gray-500 mb-2 flex items-center justify-end">
                    <span>Next service</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-right">
                    {nextService.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-right">
                    {nextService.shortDescription}
                  </p>
                </Link>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail; 