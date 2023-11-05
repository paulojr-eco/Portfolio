'use client';

import { useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import OptionsLanguagesMenu from './OptionsLanguagesMenu';
import React from 'react';

interface SelectLanguageMenuProps {
  locale: string;
}

const SelectLanguageMenu: React.FC<SelectLanguageMenuProps> = ({ locale }) => {
  const [language, setLanguage] = useState(locale.toUpperCase());
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleClickMenu = () => {
    setOpen(!open);
  };
  const handleOutsideClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node) &&
      menuRef.current &&
      !menuRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-1 relative">
      <div
        ref={menuRef}
        className="flex flex-row my-auto gap-x-4 border px-4 py-2 text-sm cursor-pointer"
        onClick={handleClickMenu}
      >
        <p className="select-none"> {language} </p>
        <BsChevronDown className="my-auto" />
      </div>

      {open && (
        <div ref={containerRef} className="w-full top-11 md:absolute">
          <OptionsLanguagesMenu />
        </div>
      )}
    </div>
  );
};

export default SelectLanguageMenu;
