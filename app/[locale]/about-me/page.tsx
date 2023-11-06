'use client';

import AboutMeInfo from '@/app/components/AboutMeInfo/AboutMeInfo';
import NavBar from '@/app/components/NavBar/NavBar';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';

export default function AboutMe({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = factoryUseTranslation(locale);
  return (
    <div className="flex flex-col px-[2vw] pt-[2vw] w-full xl:h-screen z-20">
      <NavBar locale={locale} />
      <AboutMeInfo t={t} />
    </div>
  );
}
