import { motion } from 'framer-motion';
import { TFunction } from 'i18next';
import Image from 'next/image';
import React from 'react';

interface ProfileImageProps {
  t: TFunction<string, undefined>;
}

const ProfileImage = ({ t }: ProfileImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <Image
        src="/images/profile.png"
        alt="Profile Image"
        width={300}
        height={300}
      />
    </motion.div>
  );
};

export default ProfileImage;
