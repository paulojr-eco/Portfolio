'use client';

import CardFlip from '@/app/components/CardFlip/CardFlip';
import cardFlipOptions from '../../components/CardFlip/card-flip-options.json';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';
import NavBar from '@/app/components/NavBar/NavBar';

interface CardFlipOption {
  name: string;
  themeColor: string;
  id: number;
  link: string;
};

export default function Projects({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = factoryUseTranslation(locale);
  const cardFlipData: CardFlipOption[] = cardFlipOptions;
  return (
    <div className="flex flex-col px-[2vw] pt-[2vw] 3xl:p-24 w-screen z-20">
      <NavBar locale={locale} />
      <div className="flex flex-col flex-1 justify-evenly gap-y-16 xl:gap-y-0 items-center pb-16">
        <span className="text-4xl xl:text-5xl font-bold py-4 px-6 border">
          {t('PROJECTS')}
        </span>
        <div className="flex flex-col xl:flex-row gap-x-[10vw] gap-y-[10vh]">
          {cardFlipData.map((card) => (
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
  );
}
