import { TitleContent } from '@/app/components/TitleContent/client';

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  return <TitleContent locale={locale} />;
}
