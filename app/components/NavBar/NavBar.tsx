import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navBarData from './navbar-options.json';
import SelectLanguageMenu from '../SelectLanguageMenu/SelectLanguageMenu';

interface NavBarProps {
  locale: string;
}

interface NavBarOption {
  title: string;
  url: string;
}

const NavBar: React.FC<NavBarProps> = ({ locale }) => {
  const navBarOptions: NavBarOption[] = navBarData;

  return (
    <div className="flex place-content-between mr-28">
      <Image
        src={'/images/logo.png'}
        alt="website logo"
        width={30}
        height={30}
      />
      <div className="flex gap-x-6">
        {navBarOptions.map((menuOption) => (
          <Link
            key={menuOption.title}
            href={menuOption.url}
            className="self-center"
          >
            {menuOption.title}
          </Link>
        ))}
      </div>
      <SelectLanguageMenu locale={locale} />
    </div>
  );
};

export default NavBar;
