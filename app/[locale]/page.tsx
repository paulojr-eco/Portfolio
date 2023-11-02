import { TitleContent } from '@/app/components/TitleContent/client';

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  return (
    <div className='flex flex-1'>
      <TitleContent locale={locale} />
    </div>
  );
}
