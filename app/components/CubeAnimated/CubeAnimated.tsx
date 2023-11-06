import { motion } from 'framer-motion';
import { TFunction } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

interface CubeAnimatedProps {
  type: string;
  t: TFunction<string, undefined>;
  id: number;
  themeColor: string;
}

const CubeAnimated = ({ type, t, id, themeColor }: CubeAnimatedProps) => {
  return (
    <motion.div
      className="w-[200px] h-[200px] text-xl"
      initial={{ opacity: 0, x: -400 * id }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <Link
        href={
          'https://drive.google.com/file/d/1_b2EojkZZTxnEOiwKps1SM0sGeyxYgke/view?usp=sharing'
        }
        target="_blank"
        className="container"
      >
        <div className="image-cube">
          <div className={`front ${themeColor} flex flex-col justify-center items-center gap-y-6`}>
            <Image
              src={'/images/curriculum-vitae.png'}
              alt="resume"
              height={100}
              width={100}
              className="invert"
            />
            <span>{t(type)}</span>
          </div>
          <div className="bottom bg-white flex flex-col justify-center items-center gap-y-6">
            <Image
              src={'/images/curriculum-vitae-gradient.png'}
              alt="resume"
              height={100}
              width={100}
            />
            <span className="bg-green-gradient text-transparent bg-clip-text">
              {t(type)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CubeAnimated;
