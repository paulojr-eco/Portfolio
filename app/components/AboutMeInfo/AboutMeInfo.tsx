import ProfileImage from './ProfileImage';
import './styles.css';
import { TFunction } from 'i18next';
import { motion } from 'framer-motion';
import CubeAnimated from '../CubeAnimated/CubeAnimated';

interface AboutMeProps {
  t: TFunction<string, undefined>;
}

const AboutMeInfo = ({ t }: AboutMeProps) => {
  return (
    <div className="flex relative flex-col flex-1 gap-y-16 xl:gap-y-[72px] pt-8 xl:pt-16 pb-16 mx-8 xl:mx-32 justify-center items-center">
      <span className="text-4xl xl:text-5xl font-bold py-4 px-6 border">
        {t('about me')}
      </span>
      <div className="flex flex-col xl:flex-row gap-y-16 gap-x-16 items-center font-octosquares font-bold text-xl">
        <ProfileImage t={t} />
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="w-[50vw]"
        >
          <ul className="flex flex-col gap-y-4 list-disc">
            <li>{t('full name')}</li>
            <li>{t('age')}</li>
            <li>{t('education level')}</li>
            <li>{t('location')}</li>
          </ul>
        </motion.div>
      </div>
      <CubeAnimated type="resume" themeColor='bg-green-gradient' t={t} id={1} />
    </div>
  );
};

export default AboutMeInfo;
