'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navBarData from './navbar-options.json';
import SelectLanguageMenu from '../SelectLanguageMenu/SelectLanguageMenu';
import { useTranslation } from '@/i18n/client';

interface NavBarProps {
  locale: string;
}

interface NavBarOption {
  title: string;
  url: string;
}

const NavBar: React.FC<NavBarProps> = ({ locale }) => {
  const { t } = useTranslation(locale, 'navbar');
  const navBarOptions: NavBarOption[] = navBarData;
  const pathname = usePathname();
  const currentUrl =
    pathname === '/' + locale ? '/' : pathname.replace('/' + locale, '');
  return (
    <div className="flex place-content-between mr-28">
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          alt="website logo"
          width={30}
          height={30}
        />
      </Link>
      <div className="flex gap-x-6">
        {navBarOptions.map((menuOption) => (
          <Link
            key={menuOption.title}
            href={menuOption.url}
            className={`self-center ${
              currentUrl === menuOption.url && 'underline underline-offset-8 decoration-purple decoration-[3px]'
            }`}
          >
            {t(menuOption.title)}
          </Link>
        ))}
      </div>
      <SelectLanguageMenu locale={locale} />
    </div>
  );
};

export default NavBar;
