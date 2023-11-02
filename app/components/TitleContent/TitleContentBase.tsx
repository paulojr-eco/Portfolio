import React from 'react';
import { Canvas } from '@react-three/fiber';
import { TFunction } from 'i18next';
import Rocket from '../Rocket/Rocket';
import { useProgress } from '@react-three/drei';
import { name } from './name-data';
import './titleContent.css';
interface TitleContentBaseProps {
  t: TFunction<'translation', undefined>;
}

const TitleContentBase: React.FC<TitleContentBaseProps> = ({ t }) => {
  const { progress } = useProgress();
  return (
    <div className="flex items-center w-full justify-evenly">
      <div className="flex flex-col gap-y-6">
        <div className="flex">
          <span className="text-6xl font-bold">
            {t("Hey There! I'm")}&nbsp;
          </span>
          {name.letters.map((letter) => (
            <span
              key={letter.key}
              className="text-6xl font-bold stroke-text"
              onMouseEnter={(e) => e.currentTarget.classList.add('bounce')}
              onAnimationEnd={(e) => e.currentTarget.classList.remove('bounce')}
            >
              {letter.word === ' ' ? letter.word + '\u00a0' : letter.word}
            </span>
          ))}
        </div>
        <div className="font-octosquares w-[50vw]">
          <p className="text-2xl"> {t('front page - intro')} </p>
          <p className="text-2xl"> {t('front page - about me')} </p>
          <p className="text-2xl"> {t('front page - invite')} </p>
        </div>
      </div>
      <div className="w-[500px] h-[500px]">
        <Canvas camera={{ position: [0, 1, 4], fov: 60 }}>
          <Rocket />
        </Canvas>
      </div>
    </div>
  );
};

export default TitleContentBase;
