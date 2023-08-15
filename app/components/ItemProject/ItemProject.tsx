import React, { useRef } from 'react';
import { Project } from '../Projects/Projects-data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { TFunction } from 'i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ItemProjectProps {
  project: Project;
  t: TFunction<string, undefined>;
}

const ItemProject: React.FC<ItemProjectProps> = ({ project, t }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'start end']
  });
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.5]);
  return (
    <motion.div
      ref={targetRef}
      className="flex flex-col w-[40vw] min-w-[350px] max-w-[700px] h-fit"
      style={{ scale: scale }}
    >
      <div>
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
                height={90}
                className=" rounded-t-3xl"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex flex-col h-fit md:h-[280px] text-black bg-white rounded-b-3xl p-8 place-content-between">
        <div className="flex flex-col gap-y-2">
          <div className="font-bold text-xl">{t(project.title)}</div>
          <div>{t(project.description)}</div>
        </div>
        <div className="flex flex-col md:flex-row place-content-between gap-y-4">
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
              className="flex md:place-content-end"
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
    </motion.div>
  );
};

export default ItemProject;
