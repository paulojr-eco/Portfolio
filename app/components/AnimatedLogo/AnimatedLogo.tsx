import React from 'react';
import animatedLogo from '@/public/images/animated-logo.gif';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { TFunction } from 'i18next';
import './AnimatedLogo.css';

interface AnimatedLogoProps {
  t: TFunction<'translation', undefined>;
}

const AnimatedLogo = ({ t }: AnimatedLogoProps) => {
  const loadingArray = Array.from({ length: 30 }, (_, index) => (
    <span key={index}>{t('Loading')}</span>
  ));

  return (
    <div className="fixed h-screen w-screen top-0 left-0 flex flex-col items-center justify-between bg-gradient-to-tr from-[#0E0F4B] to-[#361966] gap-y-6 cursor-progress z-[999]">
      <div className="flex flex-col w-full">
        <Marquee className="text-4xl py-4 font-bold stroke-text">
          <div className="flex gap-x-24">{loadingArray}</div>
        </Marquee>
        <hr />
      </div>
      <Image
        src={animatedLogo}
        height={100}
        width={100}
        alt="animated logo"
        className="w-[100px] xl:w-[200px]"
      />
      <div className="flex flex-col w-full">
        <hr />
        <Marquee
          direction={'right'}
          className="text-4xl py-4 font-bold stroke-text"
        >
          <div className="flex gap-x-24 pr-24">{loadingArray}</div>
        </Marquee>
      </div>
    </div>
  );
};

export default AnimatedLogo;
