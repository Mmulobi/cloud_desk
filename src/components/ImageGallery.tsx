import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const images = [
  '/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg',
  '/benjamin-child-0sT9YhNgSEs-unsplash.jpg',
  '/brian-wangenheim-ohLMHYT25Y0-unsplash.jpg',
  '/luke-chesser-wnShDP37vB4-unsplash.jpg',
  '/adolfo-felix-PG8NyM_Mcts-unsplash.jpg',
  '/raj-rana-zCQsBI7ZltQ-unsplash.jpg'
];

const imageLabels = [
  'Virtual assistants boost productivity',
  'Streamline your administrative tasks',
  'Professional remote support',
  'Focus on your core business',
  'Save on operational costs',
  'Scale your business with flexible support'
];

type ImageGalleryProps = {
  autoPlayInterval?: number;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval, isHovering, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Animate dots on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    controls.start({ opacity: 1, y: 0 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    controls.start({ opacity: 0.5, y: 10 });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-w-16 aspect-h-9 relative bg-gray-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
            <motion.img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="object-cover w-full h-full"
              initial={{ scale: 1.1, filter: 'brightness(0.8)' }}
              animate={{ 
                scale: isHovering ? 1.05 : 1, 
                filter: isHovering ? 'brightness(1)' : 'brightness(0.9)'
              }}
              transition={{ 
                scale: { duration: 8, ease: "easeOut" },
                filter: { duration: 0.5 }
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2 text-shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {imageLabels[currentIndex]}
              </motion.h3>
              <motion.div 
                className="w-16 h-1 bg-primary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <motion.div 
          className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovering ? 1 : 0, x: isHovering ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button 
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovering ? 1 : 0, x: isHovering ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button 
            onClick={handleNext}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Dots indicators */}
        <motion.div 
          className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2"
          initial={{ opacity: 0.5, y: 10 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
              } rounded-full`}
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(255, 255, 255, 0.9)" 
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ImageGallery; 