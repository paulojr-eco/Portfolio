import React from 'react';
import languages from './languages-data';
import Link from 'next/link';

const OptionsLanguagesMenu: React.FC = () => {
  return (
    <div className="flex flex-col my-auto gap-y-2 border rounded-xl p-2 text-sm cursor-pointer">
      {languages.map((language) => (
        <Link href={`/${language.name.toLowerCase()}`}
          className="text-center select-none rounded-xl hover:bg-teal-500 hover:text-black"
          key={language.name}
        >
          {language.name}
        </Link>
      ))}
    </div>
  );
};

export default OptionsLanguagesMenu;
