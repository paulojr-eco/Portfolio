'use client';

import { useTranslation } from '@/i18n/client';

const factoryUseTranslation = (locale: string) => {
  const { t } = useTranslation(locale, 'titleContent');
  return t;
};

export default factoryUseTranslation;
