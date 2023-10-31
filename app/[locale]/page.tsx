import NavBar from '@/app/components/NavBar/NavBar';
import { TitleContent } from '@/app/components/TitleContent/client';

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
    </main>
  );
}
