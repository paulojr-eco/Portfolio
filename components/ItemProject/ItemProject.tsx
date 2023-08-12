import React from 'react';
import { Project } from '../Projects/Projects-data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { TFunction } from 'i18next';

interface ItemProjectProps {
  project: Project;
  t: TFunction<string, undefined>;
}

const ItemProject: React.FC<ItemProjectProps> = ({ project, t }) => {
  return (
    <div className="flex flex-col text-black w-[45vw] min-w-[300px] mx-auto">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        showStatus={false}
      >
        {project.images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.path}
              alt="slides"
              width={500}
              height={500}
              className=" rounded-t-3xl"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex flex-col bg-white rounded-b-3xl p-8 gap-y-4">
        <div className="font-bold text-xl">{t(project.title)}</div>
        <div>{t(project.description)}</div>
        <div className="flex flex-row place-content-between">
          <div className="flex flex-col gap-y-2">
            {`${t('Technologies Used')}:`}
            <div className="flex flex-row gap-x-2">
              {project.tools.map((tool) => (
                <Link key={tool.id} href={tool.link} target="_blank">
                  <Image src={tool.path} alt="tools" height={30} width={30} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div>{`${t('Visit')}:`}</div>

            <Link
              href={project.linkGitHub}
              target="_blank"
              className="flex place-content-end"
            >
              <Image
                src={
                  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                }
                alt="GitHub icon"
                height={30}
                width={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProject;
