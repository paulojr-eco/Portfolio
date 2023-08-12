export const fallbackLng = 'pt';
export const languages = [fallbackLng, 'en'];

export function getOptions(locale = fallbackLng) {
  return {
    supportedLngs: languages,
    fallbackLng,
    locale
  };
}
