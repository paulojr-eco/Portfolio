'use client';

import AboutMe from '@/components/AboutMe/AboutMe';
import NavBar from '@/components/NavBar';
import Projects from '@/components/Projects/Projects';
import ScrollDownIcon from '@/components/ScrollDownIcon/ScrollDownIcon';
import ShapeWaves from '@/components/ShapeWaves/ShapeWaves';
import { TitleContent } from '@/components/TitleContent/client';

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
    </main>
  );
}
