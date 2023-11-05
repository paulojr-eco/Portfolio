import NavBar from '@/app/components/NavBar/NavBar';

export default function ProjectPage({
  params: { locale, projectName }
}: {
  params: { locale: string; projectName: string };
}) {
  return (
    <div className="flex flex-col px-[2vw] pt-[2vw] 3xl:p-24 w-screen z-20">
      <NavBar locale={locale} />
      <h1>{projectName}</h1>
    </div>
  );
}
