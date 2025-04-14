import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Briefcase, 
  Target, 
  Eye,
  ClipboardList,
  GraduationCap,
  FileText,
  Calculator,
  Mail,
  HeadphonesIcon,
  Instagram
} from 'lucide-react';

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'George Nandi',
      role: 'Project Coordinator',
      icon: ClipboardList,
      description: 'Expert in project management and workflow optimization'
    },
    {
      name: 'Arthur Manyonge',
      role: 'Training and Development',
      icon: GraduationCap,
      description: 'Specialist in employee training and development programs'
    },
    {
      name: 'Enock Manyonge',
      role: 'Admin & Data Entry',
      icon: FileText,
      description: 'Proficient in data management and administrative processes'
    },
    {
      name: 'Diana Simiyu',
      role: 'Bookkeeping and Support',
      icon: Calculator,
      description: 'Experienced in financial management and accounting support'
    },
    {
      name: 'Wincate Nzau',
      role: 'Virtual Assistant Support',
      icon: Mail,
      description: 'Skilled in virtual assistance and administrative tasks'
    },
    {
      name: 'Lorna Muturi',
      role: 'Customer Service',
      icon: HeadphonesIcon,
      description: 'Expert in customer relations and support services'
    },
    {
      name: 'Nancy Cheptanui',
      role: 'Digital Presence',
      icon: Instagram,
      description: 'Specialist in digital marketing and online presence'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="text-sm font-semibold tracking-wider text-primary-600 uppercase mb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Cloud Desk
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Empowering SMEs Through Virtual Excellence
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We're dedicated to delivering exceptional virtual administrative solutions that empower businesses to thrive in the digital age.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Mission Statement */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 transform-gpu"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20"></div>
                <Target className="h-12 w-12 text-primary-600 relative z-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver flexible, affordable, and high-quality virtual administrative support that helps SMEs grow and succeed in a competitive digital economy. We're committed to providing reliable, efficient, and scalable solutions that enable businesses to focus on their core operations while we handle their administrative needs.
              </p>
            </motion.div>

            {/* Vision Statement */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 transform-gpu"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20"></div>
                <Eye className="h-12 w-12 text-primary-600 relative z-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading provider of cloud-based administrative solutions for SMEs in Africa and beyond. We envision a future where every small and medium-sized enterprise has access to professional administrative support, enabling them to compete effectively in the global marketplace.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                <Users className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Expert Team</h3>
              <p className="text-gray-600">Industry professionals with years of virtual administrative expertise</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <Award className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Quality Service</h3>
              <p className="text-gray-600">Consistent delivery of high-quality administrative support</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <Clock className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for your administrative needs</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <Briefcase className="h-12 w-12 text-primary-600 mb-4 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">Scalable Solutions</h3>
              <p className="text-gray-600">Flexible services that grow with your business</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Journey
              </motion.h2>
              <motion.div 
                className="space-y-6 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p>
                  Founded in 2025, Cloud Desk emerged with a clear vision: to revolutionize administrative support for SMEs through virtual solutions. Our journey began with a small team of passionate professionals who believed in the transformative power of remote administrative services.
                </p>
                <p>
                  Today, we are rapidly establishing ourselves as a leading virtual administrative support provider, serving hundreds of satisfied clients across various industries. Our commitment to innovation, reliability, and customer success remains at the core of everything we do.
                </p>
                <p>
                  We take pride in our ability to deliver exceptional administrative support while maintaining the personal touch and dedication that our clients have come to expect from us. Our success is measured by the growth and success of the businesses we serve.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
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
              Our Team
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get to Know the Experts Behind Our Success
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Meet our dedicated team of professionals who bring expertise and passion to every project.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group p-8"
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary-100 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                    <motion.div
                      className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center relative z-10"
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;