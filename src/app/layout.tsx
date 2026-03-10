import type {Metadata} from 'next';
import { Alegreya } from 'next/font/google';
import './globals.css';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Como Seu Centro Decisor Opera',
  description: 'Descubra seu padrão de tomada de decisão e consciência.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={alegreya.variable}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
