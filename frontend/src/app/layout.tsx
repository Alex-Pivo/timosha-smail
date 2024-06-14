// import { NextIntlClientProvider } from "next-intl";
// import { getLocale, getMessages } from "next-intl/server";
// import { unstable_setRequestLocale } from 'next-intl/server';

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// })


// {
//   const messages = await getMessages();
//   const locale = await getLocale();
//   unstable_setRequestLocale(locale);
//   return(
//       <NextIntlClientProvider locale={locale} messages={messages}>
//         {children}
//       </NextIntlClientProvider>
//   );
// }

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
      <html lang={locale}>
      <body>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}