'use client';

import { useTranslation } from '@/i18n/client';
import { Poppins } from 'next/font/google';
import { projects } from './Projects-data';
import React from 'react';
import ItemProject from '../ItemProject/ItemProject';

interface ProjectsProps {
  locale: string;
}

const poppins = Poppins({ weight: ['300', '700'], subsets: ['latin'] });

const Projects: React.FC<ProjectsProps> = ({ locale }) => {
  const { t } = useTranslation(locale, 'projects');
  return (
    <div className={poppins.className}>
      <div className="flex flex-col pt-[40vh] items-center mb-[40vh] gap-y-12">
        <div className="px-6 py-4 w-44 border border-solid title text-center">
          {t('Projects')}
        </div>
        <div className="flex flex-row w-full relative">
          <div className='absolute left-6 md:left-80 top-0 w-[4px] h-full bg-white origin-top'/>
          <ItemProject project={projects[0]} t={t}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
