import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isExited, setIsExited] = useState(false);
  const text = "I'M AYUSH";
  const chars = text.split('');

  useEffect(() => {
    // Wait for the stagger animation to finish before exiting
    const timer = setTimeout(() => {
      setIsExited(true);
    }, 2000); // Plenty of time for characters to animate in
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isExited && (
        <>
          <motion.div 
            key="bg-layer"
            initial={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="fixed inset-0 bg-primary z-[70] flex items-center justify-center pointer-events-auto"
          >
            <div className="text-primary-foreground font-anton text-6xl md:text-[120px] tracking-widest uppercase flex items-end overflow-hidden">
              {chars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, scaleY: 0, opacity: 0 }}
                  animate={{ y: 0, scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className="inline-block origin-bottom leading-none"
                  style={{ whiteSpace: 'pre' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            key="bg-layer-2"
            initial={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-background-light z-[69] pointer-events-none"
          />
        </>
      )}
    </AnimatePresence>
  );
}
