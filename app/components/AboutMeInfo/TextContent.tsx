import { useTransform, motion, useScroll } from 'framer-motion';
import { TFunction } from 'i18next';
import React, { useRef } from 'react';

interface TextContentProps {
  screenWidth: number;
  t: TFunction<string, undefined>;
}

const TextContent: React.FC<TextContentProps> = ({ screenWidth, t }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'start end']
  });
  const tranlateLeft = useTransform(scrollYProgress, [0, 2], [0, -screenWidth]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const aboutMeText = t('About Me Text').split('\n');
  return (
    <motion.div ref={targetRef} style={{ opacity, translateX: tranlateLeft }}>
      <div className="flex flex-col text-center items-center gap-y-8 w-full p-14 md:w-[40vw] md:pl-32">
        <div className="px-6 py-4 w-44 border border-solid title">
          {t('About Me')}
        </div>
        <div className="w-[80vw] md:w-[35vw]">
          {aboutMeText.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TextContent;
