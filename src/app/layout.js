import localFont from 'next/font/local';

import { ThemeProvider } from 'context/theme-context';

import Header from 'components/header';
import Footer from 'components/footer';

import 'public/css/theme.css';

const soleil = localFont({
  src: '../../public/fonts/soleil.woff2', 
  variable: '--soleil-font'
});

const proximaNova = localFont({
  src: '../../public/fonts/proxima-nova.woff2', 
  variable: '--proxima-nova-font'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className={`${proximaNova.variable } ${soleil.variable}`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};