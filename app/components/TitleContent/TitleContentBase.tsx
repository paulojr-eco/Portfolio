'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import subtitles from './subtitle-data';
import React from 'react';
import { TFunction } from 'i18next';
import { useAnimation, motion } from 'framer-motion';

interface TitleContentBaseProps {
  t: TFunction<'translation', undefined>;
}

const TitleContentBase: React.FC<TitleContentBaseProps> = ({ t }) => {
  const subtitleRef = useRef<HTMLDivElement>(null);
  const slideControls = useAnimation();
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  useEffect(() => {
    slideControls.start('visible');
  }, [slideControls]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((subtitleIndex + 1) % subtitles.options.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [subtitleIndex]);
  return (
    <div className="md:pl-[10vw] flex flex-col gap-y-6">
      <p className="text-6xl"> Paulo Paiva </p>
      <div className="relative flex flex-row w-fit">
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' }
          }}
          initial="hidden"
          animate={slideControls}
          transition={{
            duration: 2.0,
            ease: 'easeIn',
            repeat: 999,
            repeatDelay: 1,
            repeatType: 'reverse'
          }}
          className="absolute bg-teal-500 z-50 h-[48px] md:h-[24px] w-[3px] animate-blink"
        ></motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' }
          }}
          initial="hidden"
          animate={slideControls}
          transition={{
            duration: 2.0,
            ease: 'easeIn',
            repeat: 999,
            repeatDelay: 1,
            repeatType: 'reverse'
          }}
          className="absolute bg-black z-10 h-[48px] md:h-[24px] w-full"
        ></motion.div>
        <div ref={subtitleRef}>
          {t(subtitles.options[subtitleIndex])}
        </div>
      </div>
    </div>
  );
};

export default TitleContentBase;
