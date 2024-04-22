import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const randomizePoints = (numPoints) => {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    points.push(`${x}% ${y}%`);
  }
  return points.join(' ');
};

const BlobAnimation = () => {
  const pathRef = useRef(null);
  const pathLength = useMotionValue(0);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();
    pathLength.set(length);
  }, [pathLength]);

  const randomPath = randomizePoints(10);

  return (
    <motion.div className="w-full h-screen flex items-center justify-center z-50">
      <motion.svg
        className="w-96 h-96"
        viewBox="0 0 200 200"
        initial={{ pathLength: 0 }}
        animate={{ pathLength }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <motion.path
          ref={pathRef}
          d={`M 100 100 L ${randomPath}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="10"
        />
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#ff00cc" />
            <stop offset="50%" stopColor="#333399" />
            <stop offset="100%" stopColor="#ff00cc" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

export default BlobAnimation;