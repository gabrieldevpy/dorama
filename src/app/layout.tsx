import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundShapes } from '@/components/landing/background-shapes';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
        <body className={inter.variable}></body>
      </html>
    );
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans scroll-smooth`} suppressHydrationWarning>
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
