'use client';

import NavBar from '@/app/components/NavBar/NavBar';
import Project from '@/app/components/Project/Project';
import factoryUseTranslation from '@/app/hooks/factoryUseTranslations';

export default function ProjectPage({
  params: { locale, projectName }
}: {
  params: { locale: string; projectName: string };
}) {
  const t = factoryUseTranslation(locale);
  const projectNameformatted = projectName.replace(/-/g, ' ');
  return (
    <div className="flex flex-col px-[2vw] pt-[2vw] w-full z-20">
      <NavBar locale={locale} />
      <Project projectName={projectNameformatted} t={t} />
    </div>
  );
}
