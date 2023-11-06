import '../globals.css';
import type { Metadata } from 'next';
import localFont from '@next/font/local';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import NavBar from '../components/NavBar/NavBar';
import CustomCursor from '../components/CustomCursor/CustomCursor';

const digofa = localFont({
  src: [
    {
      path: '../../public/fonts/DigofaRegular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/DigofaBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-digofa'
});

const octosquares = localFont({
  src: [
    {
      path: '../../public/fonts/TTOctosquaresLight.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/TTOctosquaresBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-octosquares'
});

export const metadata: Metadata = {
  title: 'Paulo Paiva Portfolio',
  description: 'Come know more about me!'
};

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
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
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${digofa.variable} font-sans ${octosquares.variable}`}>
        <main>
          <CustomCursor />
          {children}
        </main>
      </body>
    </html>
  );
}
