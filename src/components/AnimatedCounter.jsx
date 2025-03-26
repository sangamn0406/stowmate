import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);
  
  const easeOutQuad = t => t * (2 - t);
  
  const animateCount = timestamp => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }
    
    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
    const easedProgress = easeOutQuad(progress);
    
    setCount(Math.floor(easedProgress * end));
    
    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animateCount);
    }
  };
  
  useEffect(() => {
    if (inView) {
      frameRef.current = requestAnimationFrame(animateCount);
    }
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, end]);
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-[#1A237E] dark:text-[#5C6BC0]">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
};

export default AnimatedCounter;
