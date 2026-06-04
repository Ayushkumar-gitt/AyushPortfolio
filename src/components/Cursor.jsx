import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // useMotionValue provides instant hardware-accelerated updates with ZERO delay
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      cursorX.set(e.clientX - 16); // offset by half size
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference items-center justify-center hidden md:flex ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        x: cursorX,
        y: cursorY,
        border: '2px solid white'
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    >
      <div className={`w-2 h-2 rounded-full bg-white transition-transform ${isHovering ? 'scale-0' : 'scale-100'}`} />
    </motion.div>
  );
}
