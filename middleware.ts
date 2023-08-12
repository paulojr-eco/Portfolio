import { NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages } from './i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:locale*'
  matcher: ['/((?!api|_next/static|_next/image|image|assets|favicon.ico|profile.png|logo.png|cv-paulo.pdf|school-system-login.png|scroll-down-icon.gif|sw.js).*)']
};

const cookieName = 'i18next';

export function middleware(req: NextRequest) {
  let locale;
  if (req.cookies.has(cookieName))
    locale = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!locale) locale = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!locale) locale = fallbackLng;

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}`, req.url)
    );
  }
  return NextResponse.next();
}
