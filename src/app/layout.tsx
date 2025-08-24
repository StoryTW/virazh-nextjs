import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Onest } from 'next/font/google';
import { Providers } from '@/providers/Providers';
import '@/assets/styles/index.scss';
import { Header } from '@/layout/Header/Header';
import { Footer } from '@/layout/Footer/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const metadata: Metadata = {
  title: 'Virazh Solution',
  description: 'Virazh Solution',
  // icons: {
  //   icon: Favicon.src,
  //   apple: Favicon.src,
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

const onest = Onest({
  variable: '--font-onest',
  subsets: ['cyrillic', 'latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${onest.variable} ${geistMono.variable}`}>
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
