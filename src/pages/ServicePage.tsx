import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import servicesData from '../data/services';
import ServiceDetail from '../components/ServiceDetail';

const ServicePage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // Find the current service and the next/previous services
  const serviceIndex = servicesData.findIndex(service => service.id === serviceId);
  const service = servicesData[serviceIndex];
  
  const prevService = serviceIndex > 0 ? servicesData[serviceIndex - 1] : undefined;
  const nextService = serviceIndex < servicesData.length - 1 ? servicesData[serviceIndex + 1] : undefined;
  
  // If service is not found, redirect to services page
  useEffect(() => {
    if (!service && serviceId) {
      navigate('/services', { replace: true });
    }
  }, [service, serviceId, navigate]);
  
  if (!service) {
    return null; // Will redirect in the useEffect
  }
  
  return <ServiceDetail service={service} prevService={prevService} nextService={nextService} />;
};

export default ServicePage; 