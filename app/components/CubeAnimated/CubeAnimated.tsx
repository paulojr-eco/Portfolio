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
  link: string;
  image: string;
  imageGradient: string;
  alt: string;
}

const CubeAnimated = ({
  type,
  t,
  id,
  themeColor,
  link,
  image,
  imageGradient,
  alt
}: CubeAnimatedProps) => {
  return (
    <motion.div
      className="w-[200px] h-[200px] text-xl"
      initial={{ opacity: 0, x: -300 * id }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <Link href={link} target="_blank" className="container">
        <div className="image-cube">
          <div
            className={`front ${themeColor} flex flex-col justify-center items-center gap-y-6`}
          >
            <Image src={image} alt={alt} height={100} width={100} />
            <span>{t(type)}</span>
          </div>
          <div className="bottom bg-white flex flex-col justify-center items-center gap-y-6">
            <Image src={imageGradient} alt={alt} height={100} width={100} />
            <span className={`${themeColor} text-transparent bg-clip-text`}>
              {t(type)}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CubeAnimated;
