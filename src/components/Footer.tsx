import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div 
          className="grid md:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Company Info */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-4"
          >
            <Link to="/" className="flex items-center">
              <Cloud className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">Cloud Desk</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Professional virtual administrative support services that help SMEs reduce costs and focus on core business activities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Links */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#assistant" className="text-gray-400 hover:text-white transition">
                  Virtual Assistant
                </Link>
              </li>
              <li>
                <Link to="/services#bookkeeping" className="text-gray-400 hover:text-white transition">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services#admin" className="text-gray-400 hover:text-white transition">
                  Data Entry
                </Link>
              </li>
              <li>
                <Link to="/services#customer" className="text-gray-400 hover:text-white transition">
                  Customer Service
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  Blog
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  Case Studies
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  FAQs
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  Support
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@clouddesk.co.ke" className="text-gray-400 hover:text-white transition">info@clouddesk.co.ke</a>
                  <br />
                  <a href="mailto:georgenandi.gn@gmail.com" className="text-gray-400 hover:text-white transition">georgenandi.gn@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                <a href="tel:+254715045950" className="text-gray-400 hover:text-white transition">+254 715 045 950</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cloud Desk. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;