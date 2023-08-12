import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface ScrollDownIconProps {}

const ScrollDownIcon: React.FC<ScrollDownIconProps> = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{ opacity }}
      className="flex justify-center pt-[38vh] md:pt-[50vh]"
    >
      <Image
        src={'/scroll-down-icon.gif'}
        height={100}
        width={100}
        alt="Scroll Down GIF"
      />
    </motion.div>
  );
};

export default ScrollDownIcon;
