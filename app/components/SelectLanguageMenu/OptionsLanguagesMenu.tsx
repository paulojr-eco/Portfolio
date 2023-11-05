import React from 'react';
import languages from './languages-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const redirectRoute = (pathsArray: string[]): string => {
  return pathsArray.length === 1 ? '' : `/${pathsArray.slice(2).join('/')}`;
};

const OptionsLanguagesMenu: React.FC = () => {
  const pathName = usePathname();
  const pathsArray = pathName.split('/');
  return (
    <div className="flex flex-col my-auto gap-y-2 border p-2 text-sm cursor-pointer">
      {languages.map((language) => (
        <Link
          href={`/${language.name.toLowerCase() + redirectRoute(pathsArray)}`}
          className="text-center select-none hover:bg-purple"
          key={language.name}
        >
          {language.name}
        </Link>
      ))}
    </div>
  );
};

export default OptionsLanguagesMenu;
