import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${onest.variable}`}>
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
