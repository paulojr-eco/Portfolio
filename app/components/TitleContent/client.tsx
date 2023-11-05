'use client';

import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';
import TitleContentBase from './TitleContentBase';

export const TitleContent = ({ locale }: { locale: string }) => {
  return <TitleContentBase t={factoryUseTranslation(locale)} />;
};
