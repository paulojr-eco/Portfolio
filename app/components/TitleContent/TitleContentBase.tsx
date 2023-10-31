import React from 'react';
import { TFunction } from 'i18next';

interface TitleContentBaseProps {
  t: TFunction<'translation', undefined>;
}

const TitleContentBase: React.FC<TitleContentBaseProps> = ({ t }) => {
  return (
    <div className="md:pl-[10vw] flex flex-col gap-y-6">
      <p className="text-6xl font-bold"> {"Hey There! I'm Paulo Paiva"} </p>
    </div>
  );
};

export default TitleContentBase;
