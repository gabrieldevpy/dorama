import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { BackgroundShapes } from '@/components/landing/background-shapes';

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
  // Testa se o parâmetro 'blank' é 'true' na URL
  if (searchParams?.blank === 'true') {
    // Se for, retorna uma página completamente em branco
    return (
      <html lang="pt-BR">
        <body></body>
      </html>
    );
  }

  // Caso contrário, renderiza o site normalmente
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative overflow-hidden">
          <BackgroundShapes />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
