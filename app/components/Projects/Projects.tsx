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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14'>
          {projects.map((project) => (
            <ItemProject key={project.title} project={project} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
