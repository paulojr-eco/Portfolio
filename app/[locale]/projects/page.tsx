'use client';

import CardFlip from '@/app/components/CardFlip/CardFlip';
import cardFlipOptions from '../../components/CardFlip/card-flip-options.json';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';

type CardFlipOption = {
  name: string;
  themeColor: string;
};

export default function Projects({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = factoryUseTranslation(locale);
  const cardFlipData: CardFlipOption[] = cardFlipOptions;
  return (
    <div className="flex flex-col flex-1 justify-evenly gap-y-16 xl:gap-y-0 items-center">
      <span className="text-4xl xl:text-5xl font-bold py-4 px-6 border">
        {t('PROJECTS')}
      </span>
      <div className="flex flex-col xl:flex-row gap-x-[10vw] gap-y-[10vh]">
        {cardFlipData.map((card) => (
          <CardFlip key={card.name} name={card.name} themeColor={card.themeColor}/>
        ))}
      </div>
    </div>
  );
}
