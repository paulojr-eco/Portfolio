import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

const initI18next = async (locale: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        () => import(`./locales/${locale}.json`)
      )
    )
    .init(getOptions(locale));
  return i18nInstance;
};

export async function useTranslation(locale: string, options = {}) {
  const i18nextInstance = await initI18next(locale);
  return {
    t: i18nextInstance.getFixedT(locale),
    i18n: i18nextInstance
  };
}
