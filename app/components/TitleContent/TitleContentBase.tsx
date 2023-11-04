import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import Rocket from '../Rocket/Rocket';
import { motion, useInView } from 'framer-motion';
import { TFunction } from 'i18next';
import { name } from './name-data';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import './titleContent.css';

interface TitleContentBaseProps {
  t: TFunction<'translation', undefined>;
}

const TitleContentBase: React.FC<TitleContentBaseProps> = ({ t }) => {
  const { progress } = useProgress();
  return (
    <>
      {progress != 100 ? (
        <AnimatedLogo t={t} />
      ) : (
        <div className="flex items-center w-full justify-evenly">
          <div className="flex flex-col gap-y-6">
            <motion.div
              className="flex"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
            >
              <span className="text-6xl font-bold">
                {t("Hey There! I'm")}&nbsp;
              </span>
              {name.letters.map((letter) => (
                <span
                  key={letter.key}
                  className="text-6xl font-bold stroke-text"
                  onMouseEnter={(e) => e.currentTarget.classList.add('bounce')}
                  onAnimationEnd={(e) =>
                    e.currentTarget.classList.remove('bounce')
                  }
                >
                  {letter.word === ' ' ? letter.word + '\u00a0' : letter.word}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="font-octosquares w-[50vw]"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeInOut', duration: 1.5 }}
            >
              <p className="text-2xl"> {t('front page - intro')} </p>
              <p className="text-2xl"> {t('front page - about me')} </p>
              <p className="text-2xl"> {t('front page - invite')} </p>
            </motion.div>
          </div>
          <motion.div
            className="w-[500px] h-[500px]"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Canvas camera={{ position: [0, 1, 4], fov: 60 }}>
              <Suspense>
                <Rocket progress={progress} />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default TitleContentBase;
