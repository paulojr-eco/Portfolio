import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import navBarData from './navbar-options.json';
import { TFunction } from 'i18next';
import Link from 'next/link';
import SelectLanguageMenu from '../SelectLanguageMenu/SelectLanguageMenu';
import './styles.css';

interface NavBarOption {
  title: string;
  url: string;
}

interface MobileNavBarProps {
  t: TFunction<string, undefined>;
  currentUrl: string;
  locale: string;
}

const MobileNavBar = ({ t, currentUrl, locale }: MobileNavBarProps) => {
  const navBarOptions: NavBarOption[] = navBarData;
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[150] backdrop-blur-[2px] bg-black/30"
          onClick={() => toggleOpen()}
        ></div>
      )}
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />

        <motion.div
          initial={false}
          animate={{ y: isOpen ? 0 : -400 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className="w-screen bg-[#1D1356]"
        >
          <div className="flex flex-col gap-y-6 relative py-[50px]">
            {navBarOptions.map((menuOption) => (
              <Link
                key={menuOption.title}
                href={menuOption.url}
                className={`self-center ${
                  currentUrl === menuOption.url &&
                  'underline underline-offset-8 decoration-purple decoration-[3px]'
                }`}
                onClick={() => toggleOpen()}
              >
                {t(menuOption.title)}
              </Link>
            ))}
            <div className="mx-auto">
              <SelectLanguageMenu locale={locale} />
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default MobileNavBar;
