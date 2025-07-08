import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'bahkostudio | AI-automationer som ger resultat',
  description: 'Vi hjälper företag växa med beprövade AI-automationer. Fler kunder, mer försäljning, bättre resultat.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5S4RZ1ESKJ"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5S4RZ1ESKJ');
          `}
        </script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}