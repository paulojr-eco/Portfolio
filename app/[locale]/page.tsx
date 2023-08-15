'use client';

import AboutMe from '@/app/components/AboutMe/AboutMe';
import NavBar from '@/app/components/NavBar/NavBar';
import Projects from '@/app/components/Projects/Projects';
import ScrollDownIcon from '@/app/components/ScrollDownIcon/ScrollDownIcon';
import ShapeWaves from '@/app/components/ShapeWaves/ShapeWaves';
import { TitleContent } from '@/app/components/TitleContent/client';
import Footer from '../components/Footer/Footer';

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <div className='flex flex-col p-8 gap-y-28'>
        <NavBar locale={locale} />
        <TitleContent locale={locale} />
      </div>
      <ShapeWaves />
      <ScrollDownIcon />
      <AboutMe locale={locale}/>
      <Projects locale={locale}/>
      <Footer locale={locale}/>
    </main>
  );
}
