import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en'
});

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(fr|en)/:path*',]
// };
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest|assets/|sitemap.xml).*)'
  ]
};
