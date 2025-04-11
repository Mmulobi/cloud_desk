import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Calendar, 
  HeadphonesIcon,
  Calculator, 
  FileText, 
  ClipboardList, 
  Instagram,
  UserRound,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const ServicesPage = () => {
  const adminServices = [
    {
      id: 'virtual-assistant',
      title: 'Virtual Assistant Support',
      description: 'Our dedicated virtual assistants help you manage day-to-day tasks so you can focus on growing your business.',
      icon: Mail,
      features: [
        'Email and calendar management',
        'Personal task management',
        'Travel arrangements',
        'Meeting scheduling',
        'Basic research'
      ]
    },
    {
      id: 'customer-service',
      title: 'Customer Service Management',
      description: 'Provide exceptional customer service without the overhead of a full-time support team.',
      icon: HeadphonesIcon,
      features: [
        'Responding to inquiries via email, chat, or social media',
        'CRM updates and management',
        'Client onboarding and communication',
        'Customer feedback collection',
        'Support ticket management'
      ]
    },
    {
      id: 'bookkeeping',
      title: 'Bookkeeping & Financial Assistance',
      description: 'Keep your finances organized with our professional bookkeeping and financial administrative support.',
      icon: Calculator,
      features: [
        'Invoicing and billing management',
        'Expense and receipt tracking',
        'Financial report preparation',
        'Payment follow-ups',
        'Basic accounts reconciliation'
      ]
    },
    {
      id: 'admin-data-entry',
      title: 'Administrative & Data Entry',
      description: 'Maintain well-organized digital records and systems with our meticulous data entry services.',
      icon: FileText,
      features: [
        'Document formatting and file organization',
        'Database updates and maintenance',
        'Spreadsheet preparation and management',
        'Form processing and data extraction',
        'Transcription services'
      ]
    },
    {
      id: 'project-coordination',
      title: 'Project & Task Coordination',
      description: 'Keep your projects on track with our dedicated coordination and management support.',
      icon: ClipboardList,
      features: [
        'Task tracking using tools like Trello, Asana, or ClickUp',
        'Follow-up and deadline reminders',
        'Basic project support and organization',
        'Meeting agenda preparation',
        'Progress report compilation'
      ]
    },
    {
      id: 'digital-presence',
      title: 'Digital Presence Management',
      description: 'Maintain a consistent and professional online presence with our digital management services.',
      icon: Instagram,
      features: [
        'Social media post scheduling',
        'Online reputation monitoring',
        'Content curation and light support',
        'Basic social analytics reporting',
        'Digital asset organization'
      ]
    },
    {
      id: 'hr-admin',
      title: 'HR Admin Support',
      description: 'Streamline your human resources processes with our administrative assistance.',
      icon: UserRound,
      features: [
        'Recruitment interview scheduling',
        'Timesheet management',
        'Staff onboarding paperwork',
        'Leave tracking',
        'Basic HR documentation'
      ]
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Cloud Desk delivers comprehensive virtual administrative support to help your business grow without the overhead of full-time employees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-24"
          >
            {adminServices.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                variants={fadeInUp}
              >
                <div className="md:w-1/2">
                  <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-primary-600 to-primary-700' : 'from-secondary-600 to-secondary-700'} p-8 rounded-xl shadow-xl`}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                      <service.icon className={`h-8 w-8 ${index % 2 === 0 ? 'text-primary-600' : 'text-secondary-600'}`} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-primary-100 text-lg mb-6">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                          <p className="text-white">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors shadow-md"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="p-2 bg-white rounded-xl shadow-xl">
                    <img 
                      src={`https://source.unsplash.com/random/800x600/?${service.id}`} 
                      alt={service.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-wider text-primary-600 uppercase mb-2">Our Approach</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Our Services Stand Out</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cloud Desk combines professional expertise with cutting-edge technology to deliver exceptional administrative support
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Tailored to Your Needs</h4>
              <p className="text-gray-600">
                We customize our services to match your specific business requirements, providing support exactly where you need it most.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Flexible Scaling</h4>
              <p className="text-gray-600">
                Easily scale your administrative support up or down based on your business cycles and changing demands.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-md"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Expertise On Demand</h4>
              <p className="text-gray-600">
                Access skilled professionals with diverse expertise without the commitment of full-time employment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;