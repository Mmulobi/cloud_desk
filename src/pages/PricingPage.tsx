import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, X, HelpCircle } from 'lucide-react';

// Animation variants
const fadeInUp = {
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
      staggerChildren: 0.2
    }
  }
};

const PricingPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for small businesses just getting started with virtual assistance',
      monthlyPrice: 9999,
      yearlyPrice: 99990,
      features: [
        '10 hours/month of virtual assistance',
        'Email & calendar management',
        'Basic customer service',
        'Data entry & document formatting',
        'Monday to Friday support',
        'Single point of contact'
      ],
      notIncluded: [
        'Weekend support',
        'Dedicated team',
        'Priority response',
        'Financial services'
      ],
      cta: 'Start with Basic',
      popular: false
    },
    {
      name: 'Premium',
      description: 'Ideal for growing businesses with regular administrative needs',
      monthlyPrice: 24999,
      yearlyPrice: 239990,
      features: [
        '30 hours/month of virtual assistance',
        'All Basic features',
        'Bookkeeping & financial assistance',
        'Social media scheduling',
        'Project coordination',
        'Dedicated VA team',
        'Priority email support'
      ],
      notIncluded: [
        'Weekend support',
        '24/7 availability'
      ],
      cta: 'Choose Premium',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive support for established businesses with complex needs',
      monthlyPrice: 49999,
      yearlyPrice: 479990,
      features: [
        '60 hours/month of virtual assistance',
        'All Premium features',
        'HR administrative support',
        'Advanced reporting',
        'Weekend availability (Saturdays)',
        'Custom workflows',
        'Dedicated account manager',
        'Monthly strategy calls'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const formatPrice = (price: number): string => {
    return `KSH ${(price / 100).toLocaleString()}`;
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. Save money and time by outsourcing your administrative tasks to Cloud Desk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white p-1 rounded-full shadow-md inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  isMonthly ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  !isMonthly ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
                onClick={() => setIsMonthly(false)}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary-500 transform md:-translate-y-4' : ''
                }`}
                variants={fadeInUp}
              >
                {plan.popular && (
                  <div className="bg-primary-500 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatPrice(isMonthly ? plan.monthlyPrice : plan.yearlyPrice)}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {isMonthly ? '/month' : '/year'}
                    </span>
                  </div>
                  
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to="/contact"
                        className={`block w-full py-3 px-4 rounded-md text-center font-medium ${
                          plan.popular 
                            ? 'bg-primary-600 text-white hover:bg-primary-700' 
                            : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    </motion.div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-medium text-gray-900 mb-4">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-600 flex items-center justify-center">
              <HelpCircle className="h-4 w-4 mr-2" />
              Need a custom plan? <Link to="/contact" className="text-primary-600 ml-1 hover:underline">Contact us</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-primary-600 uppercase mb-2">FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h3>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">How do I know which plan is right for my business?</h4>
              <p className="text-gray-600">
                The best plan depends on your business size and administrative needs. The Basic plan works well for startups and small businesses with minimal needs, while Premium and Enterprise plans are designed for growing businesses with more complex requirements. We're happy to help you assess your needs during a free consultation.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Can I change plans later?</h4>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be reflected in your next billing cycle.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">What happens if I need more hours than my plan includes?</h4>
              <p className="text-gray-600">
                Additional hours can be purchased as needed at our standard hourly rate. We'll always notify you before you exceed your plan's hours so you can decide whether to upgrade or purchase additional time.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Is there a minimum contract period?</h4>
              <p className="text-gray-600">
                Our monthly plans have no long-term commitment and can be cancelled at any time. Annual plans are paid upfront but offer significant savings. We offer a 14-day satisfaction guarantee for new clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to streamline your business operations?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with Cloud Desk today and focus on what matters most: growing your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-md font-medium shadow-lg hover:bg-primary-700 transition"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;