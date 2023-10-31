import '../globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';

const poppins = Poppins({ weight: ['300'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paulo Paiva Portfolio',
  description: 'Generated by create next app'
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
  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
