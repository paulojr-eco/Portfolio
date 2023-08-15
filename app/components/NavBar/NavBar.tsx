import { RxHamburgerMenu } from 'react-icons/rx';
import SelectLanguageMenu from '../SelectLanguageMenu/SelectLanguageMenu';
import React from 'react';
import Image from 'next/image';

interface NavBarProps {
  locale: string;
}

const NavBar: React.FC<NavBarProps> = ({ locale }) => {
  return (
    <div className="flex flex-row place-content-between">
      <Image src={'/logo.png'} alt='logo' width={30} height={30}/>
      <div>
        <SelectLanguageMenu locale={locale}/>
      </div>
    </div>
  );
};

export default NavBar;
