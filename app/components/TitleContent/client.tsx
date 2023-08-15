'use client';

import TitleContentBase from './TitleContentBase';
import { useTranslation } from '@/i18n/client';

export const TitleContent = ({ locale }: {locale: string}) => {
  const { t } = useTranslation(locale, 'titleContent');
  return <TitleContentBase t={t}/>;
};
