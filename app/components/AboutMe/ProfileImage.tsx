import { useScroll, motion, useTransform } from 'framer-motion';
import { TFunction } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

interface ProfileImageProps {
  screenWidth: number;
  t: TFunction<string, undefined>;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ screenWidth, t }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'start end']
  });
  const translateRight = useTransform(
    scrollYProgress,
    [0, 2],
    [0, screenWidth]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, translateX: translateRight }}
      className="flex flex-col text-center items-center w-full md:w-[40vw] place-content-evenly"
    >
      <Image
        src="/profile.png"
        alt="Profile Image"
        width={screenWidth > 768 ? 250 : 200}
        height={screenWidth > 768 ? 250 : 200}
        className="pb-8 md:pb-0 "
      />
      <a href='/cv-paulo.pdf' target='_blank' className="px-6 py-4 w-44 border border-solid title">
        {t('View CV')}
      </a>
    </motion.div>
  );
};

export default ProfileImage;
