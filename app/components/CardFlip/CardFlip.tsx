'use client';

import { motion } from 'framer-motion';
import './styles.css';

interface CardFlipProps {
  name: string;
  themeColor: string;
}

const CardFlip = ({ name, themeColor }: CardFlipProps) => {
  return (
    <motion.div
      className="flip-card-inner w-full h-full"
      animate={{ rotateY: 360 * 200 }}
      transition={{ duration: 10 * 200, animationDirection: 'normal' }}
    >
      <div className={`flex flex-col justify-center items-center rounded-3xl w-[250px] h-[400px] border-8 ${themeColor} -rotate-[20deg] bg-cover bg-center bg-no-repeat cursor-pointer`}>
        <span className="text-xl xl:text-3xl px-8 text-center">{name}</span>
      </div>
    </motion.div>
  );
};

export default CardFlip;
