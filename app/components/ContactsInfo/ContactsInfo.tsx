import { TFunction } from 'i18next';
import { motion } from 'framer-motion';
import CubeAnimated from '../CubeAnimated/CubeAnimated';
import contactData from './contacts-data';

interface ContactsInfoProps {
  t: TFunction<string, undefined>;
}

const ContactsInfo = ({ t }: ContactsInfoProps) => {
  return (
    <div className="flex flex-col flex-1 gap-y-16 xl:gap-y-32 pt-8 xl:pt-16 items-center pb-16">
      <span className="text-4xl xl:text-5xl font-bold py-4 px-6 border">
        {t('CONTACTS')}
      </span>
      <div className="flex flex-col xl:flex-row gap-y-16 gap-x-16 items-center font-octosquares font-bold text-xl text-center">
        {t('wanna hire me')}
      </div>
      <div className="flex flex-col xl:flex-row">
        {contactData.map((contact) => (
          <CubeAnimated
            key={contact.type}
            type={contact.type}
            themeColor={contact.themeColor}
            t={t}
            id={contact.id}
            link={contact.link}
            image={contact.image}
            imageGradient={contact.imageGradient}
            alt={contact.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsInfo;
