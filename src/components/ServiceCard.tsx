import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { IconType } from '../types/serviceTypes';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon: Icon, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        <div className="flex-grow">
          <div 
            className={`w-16 h-16 mb-6 rounded-lg flex items-center justify-center 
              ${isEven ? 'bg-primary-100' : 'bg-secondary-100'}`}
          >
            <Icon className={`w-8 h-8 ${isEven ? 'text-primary-600' : 'text-secondary-600'}`} />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
        </div>
        
        <Link 
          to={`/services/${id}`}
          className={`inline-flex items-center font-medium ${isEven ? 'text-primary-600 hover:text-primary-700' : 'text-secondary-600 hover:text-secondary-700'} mt-auto`}
        >
          <span className="mr-2">Learn more</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </Link>
      </div>
      
      {/* Corner decoration */}
      <div className={`absolute top-0 right-0 h-16 w-16 overflow-hidden ${isEven ? 'bg-primary-100' : 'bg-secondary-100'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform origin-bottom-left`}>
        <div className={`absolute bottom-0 left-0 w-[150%] h-[150%] ${isEven ? 'bg-primary-200' : 'bg-secondary-200'} rotate-45 transform origin-bottom-left`}></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 