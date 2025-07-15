import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundShapes } from '@/components/landing/background-shapes';
import { Literata } from 'next/font/google';

const literata = Literata({ subsets: ['latin'], variable: '--font-literata' });

export const metadata: Metadata = {
  title: 'Dorama Delight',
  description: 'Menos Drama, Mais Dorama - O guia definitivo para o seu universo de doramas.',
};

export default function RootLayout({
  children,
  searchParams,
}: {
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (searchParams?.blank === 'true') {
    return (
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={literata.variable}></body>
      </html>
    );
  }

  return (
    <html lang="pt-BR" className={`${literata.variable} font-sans scroll-smooth`} suppressHydrationWarning>
      <body>
        <div className="relative overflow-hidden">
          <BackgroundShapes />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
