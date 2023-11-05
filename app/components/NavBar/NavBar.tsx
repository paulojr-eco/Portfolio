'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navBarData from './navbar-options.json';
import SelectLanguageMenu from '../SelectLanguageMenu/SelectLanguageMenu';
import { useTranslation } from '@/i18n/client';
import MobileNavBar from './MobileNavBar';

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
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="flex place-content-between">
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          alt="website logo"
          width={30}
          height={30}
        />
      </Link>
      {screenWidth < 700 ? (
        <MobileNavBar t={t} currentUrl={currentUrl} locale={locale}/>
      ) : (
        <div className="flex gap-x-6 relative">
          {navBarOptions.map((menuOption) => (
            <Link
              key={menuOption.title}
              href={menuOption.url}
              className={`self-center ${
                currentUrl === menuOption.url &&
                'underline underline-offset-8 decoration-purple decoration-[3px]'
              }`}
            >
              {t(menuOption.title)}
            </Link>
          ))}
          <SelectLanguageMenu locale={locale} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
