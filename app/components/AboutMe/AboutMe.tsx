import { useTranslation } from '@/i18n/client';
import './styles.css';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import ProfileImage from './ProfileImage';
import TextContent from './TextContent';

interface AboutMeProps {
  locale: string;
}

const poppins = Poppins({ weight: ['300', '700'], subsets: ['latin'] });

const AboutMe: React.FC<AboutMeProps> = ({ locale }) => {
  const { t } = useTranslation(locale, 'titleContent');
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={poppins.className}>
      <div className="flex flex-col md:flex-row pt-[15vh] place-content-evenly">
        <TextContent screenWidth={screenWidth} t={t}/>
        <ProfileImage screenWidth={screenWidth} t={t}/>
      </div>
    </div>
  );
};

export default AboutMe;
