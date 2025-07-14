import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundShapes } from '@/components/landing/background-shapes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dorama Delight',
  description: 'Menos Drama, Mais Dorama - O guia definitivo para o seu universo de doramas.',
};

export default function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: { [key: string]: string | string[] | undefined };
}>) {
  if (searchParams?.blank === 'true') {
    return (
      <html lang="pt-BR" suppressHydrationWarning>
        <body></body>
      </html>
    );
  }

  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative overflow-hidden">
          <BackgroundShapes />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
