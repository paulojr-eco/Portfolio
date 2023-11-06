import React from 'react';
import { TFunction } from 'i18next';
import { projects } from './Projects-data';
import Carousel from '../Carousel/Carousel';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  projectName: string;
  t: TFunction;
}

const getProjectByTitle = (title: string) => {
  for (const project of projects) {
    if (project.title === title) {
      return project;
    }
  }
};

const Project = ({ projectName, t }: ProjectProps) => {
  const project = getProjectByTitle(projectName);
  return (
    <div className="flex flex-col flex-1 gap-y-16 xl:gap-y-[72px] pt-8 xl:pt-16 pb-16 mx-8 xl:mx-32">
      <span className="text-4xl xl:text-5xl font-bold py-4 px-6 border mx-auto">
        {t(projectName)}
      </span>
      <div className="flex flex-col font-octosquares text-xl gap-y-4">
        <li className="font-bold">{t('about this project')}</li>
        <div>{t(project!.description)}</div>
      </div>
      <Carousel project={project!} />
      <div className="flex flex-col font-octosquares text-xl gap-y-4">
        <li className="font-bold">{t('used technologies')}</li>
        <div className="flex gap-x-4">
          {project!.tools.map((tool) => (
            <Link key={tool.id} href={tool.link} target="_blank">
              <Image
                src={tool.path}
                height={50}
                width={50}
                className={tool.invert ? 'invert' : ''}
                alt={tool.alt}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col font-octosquares text-xl gap-y-4">
        <li className="font-bold">{t('links to visite')}</li>
        <div className="flex gap-x-4">
          <Link href={project!.linkGitHub} target="_blank">
            <Image
              src={
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
              }
              alt="GitHub icon"
              height={50}
              width={50}
              className="invert"
            />
          </Link>
        </div>
      </div>
      {project?.linkCertificate && (
        <div className="flex flex-col font-octosquares text-xl gap-y-4">
          <li className="font-bold">{t('link to certificate')}</li>
          <div className="flex gap-x-4">
            <Link href={project!.linkCertificate} target="_blank">
              <Image
                src={
                  '/images/medal.png'
                }
                alt="GitHub icon"
                height={50}
                width={50}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
