import React from 'react';
import { Users, Award, Clock, Briefcase } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're dedicated to delivering exceptional cloud solutions that empower businesses to thrive in the digital age.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Users className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">Industry professionals with years of cloud expertise</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Award className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Certified Partners</h3>
          <p className="text-gray-600">Partnerships with leading cloud providers</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Clock className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Round-the-clock technical assistance</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
          <p className="text-gray-600">Tailored solutions for businesses of all sizes</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 2020, we emerged with a clear vision: to simplify cloud computing for businesses worldwide. Our journey began with a small team of passionate technologists who believed in the transformative power of cloud solutions.
            </p>
            <p>
              Today, we've grown into a leading cloud services provider, serving hundreds of satisfied clients across various industries. Our commitment to innovation, reliability, and customer success remains at the core of everything we do.
            </p>
            <p>
              We take pride in our ability to deliver cutting-edge solutions while maintaining the personal touch and dedication that our clients have come to expect from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;