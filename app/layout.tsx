import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sina | Personal Portfolio',
  description: 'Sina is a software developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} 
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-2%] -z-10 right-[10%] h-[10%] w-[50%] rounded-full blur-[10rem] sm:w-[40%] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1%] -z-10 left-[10%] h-[10%] w-[50%] rounded-full blur-[10rem] sm:w-[40%] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
