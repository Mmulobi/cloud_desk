import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Pre-load images for faster transitions
const imageUrls = [
  '/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg',
  '/benjamin-child-0sT9YhNgSEs-unsplash.jpg',
  '/brian-wangenheim-ohLMHYT25Y0-unsplash.jpg',
  '/luke-chesser-wnShDP37vB4-unsplash.jpg',
  '/adolfo-felix-PG8NyM_Mcts-unsplash.jpg',
  '/raj-rana-zCQsBI7ZltQ-unsplash.jpg'
];

const HeroBackground: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(Array(imageUrls.length).fill(false));
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Check device size for responsive images
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Preload the next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    const img = new Image();
    img.onload = () => {
      const newLoaded = [...loaded];
      newLoaded[nextIndex] = true;
      setLoaded(newLoaded);
    };
    img.src = imageUrls[nextIndex];
  }, [currentIndex, loaded, imageUrls.length]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden will-change-auto">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Reduced from 2s
          className="absolute inset-0 w-full h-full transform-gpu"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 mix-blend-multiply z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
          <motion.img
            src={imageUrls[currentIndex]}
            alt="Background"
            loading="lazy"
            className="object-cover h-full w-full transform-gpu"
            initial={{ scale: 1.05 }} // Reduced from 1.1
            animate={{ scale: 1.03 }} // Reduced from 1.05
            transition={{ duration: 6, ease: "easeOut" }} // Reduced from 7s
            sizes="100vw"
            srcSet={`${imageUrls[currentIndex]} 1200w, ${imageUrls[currentIndex]} 800w, ${imageUrls[currentIndex]} 400w`}
            style={{ 
              maxWidth: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-secondary-900/20 z-30" />
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-pattern-dots opacity-10" />
      </div>
    </div>
  );
};

export default HeroBackground; 