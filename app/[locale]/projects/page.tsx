'use client';

import CardFlip from '@/app/components/CardFlip/CardFlip';
import cardFlipOptions from '@/app/components/CardFlip/card-flip-options';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';
import NavBar from '@/app/components/NavBar/NavBar';

export default function Projects({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = factoryUseTranslation(locale);
  return (
    <div className="flex xl:h-screen w-screen relative overflow-hidden">
      <div className="flex flex-col px-[2vw] pt-[2vw] w-screen z-20">
        <NavBar locale={locale} />
        <div className="flex flex-col flex-1 gap-y-16 xl:gap-y-32 pt-8 xl:pt-16 items-center pb-16">
          <span className="text-4xl xl:text-5xl font-bold py-4 px-6 border">
            {t('PROJECTS')}
          </span>
          <div className="flex flex-col xl:flex-row gap-x-[10vw] gap-y-[10vh]">
            {cardFlipOptions.map((card) => (
              <CardFlip
                key={card.name}
                name={card.name}
                themeColor={card.themeColor}
                link={card.link}
                id={card.id}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
