'use client';

import { motion } from 'framer-motion';
import './styles.css';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CardFlipProps {
  name: string;
  themeColor: string;
  link: string;
  locale: string;
  id: number;
}

const CardFlip = ({ name, themeColor, link, id, locale }: CardFlipProps) => {
  const t = factoryUseTranslation(locale);
  const pathname = usePathname();
  return (
    <motion.div
      className="flex flex-col xl:flex-row"
      initial={{ opacity: 0, x: -200 * id }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        animate={{ rotateY: 360 * 50 }}
        transition={{ duration: 20 * 50, animationDirection: 'normal' }}
      >
        <Link
          href={pathname + link}
          className={`flex flex-col justify-center items-center rounded-3xl w-[170px] h-[300px] xl:w-[250px] xl:h-[400px] border-8 ${themeColor} -rotate-[20deg] bg-cover bg-center bg-no-repeat cursor-pointer`}
        >
          <span className="text-xl xl:text-3xl px-8 text-center">
            {t(name)}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CardFlip;
