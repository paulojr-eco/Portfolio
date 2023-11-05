import { TitleContent } from '@/app/components/TitleContent/client';
import NavBar from '../components/NavBar/NavBar';

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const stars = Array.from({ length: 130 }, (_, index) => (
    <div
      key={index}
      style={
        {
          '--speed': Math.random() * 10 + 10,
          '--size': (Math.random() * 20 + 5).toString() + 'px'
        } as React.CSSProperties
      }
    ></div>
  ));
  return (
    <div className="flex flex-col h-screen px-[2vw] pt-[2vw] w-screen z-20">
      <NavBar locale={locale} />
      <div className="stars flex flex-col absolute z-[-5]">{stars}</div>
      <div className="flex flex-1">
        <TitleContent locale={locale} />
      </div>
    </div>
  );
}
