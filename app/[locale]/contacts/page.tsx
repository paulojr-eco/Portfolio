'use client';

import ContactsInfo from '@/app/components/ContactsInfo/ContactsInfo';
import NavBar from '@/app/components/NavBar/NavBar';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';

export default function Contacts({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = factoryUseTranslation(locale);
  return (
    <div className="flex flex-col px-[2vw] pt-[2vw] w-full xl:h-screen z-20">
      <NavBar locale={locale} />
      <ContactsInfo t={t} />
    </div>
  );
}
