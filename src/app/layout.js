import { Providers } from '@/providers/chakraui';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home | Vault',
  description: 'Vault',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
