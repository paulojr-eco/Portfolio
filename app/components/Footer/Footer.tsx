'use client';

import { useTranslation } from '@/i18n/client';
import React from 'react';

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const { t } = useTranslation(locale, 'footer');
  return (
    <div className="flex flex-col bottom-0">
      <div className="w-[100vw] h-[2px] bg-white opacity-50" />
      <div className="text-center py-6">
        <span>{t('Footer First')}</span>
        <span role="img" aria-label="heart">❤️</span>
        <span className="text-center py-6">{t('Footer Last')}</span>
      </div>
    </div>
  );
};

export default Footer;
