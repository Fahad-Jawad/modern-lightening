import localFont from 'next/font/local';
import './globals.css';
import WhatsAppButton from './components/WhatsAppButton';
import { ModalProvider } from './Contexts/ModalContext';
import ProductModal from './components/ProductModal';
import NavBar from './components/Nav/NavBar';
import TopBar from './components/TopBar';
import Footer from './components/Sections/Footer';
import MobileNav from './components/Nav/MobileNav';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Modern Lighting',
  description: 'Modern lighting',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full overflow-x-hidden'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative h-full`}
      >
        <ModalProvider>
          {/* Sticky Header */}

          {/* Main Content */}
          <main className='relative'>
            <div className='sticky top-0 z-50 bg-white shadow-md hidden xl:block'>
              <TopBar />
              <NavBar />
            </div>

            <div className='sticky top-0 z-50 bg-white shadow-md block xl:hidden'>
              <MobileNav />
            </div>

            {children}
          </main>
          {/* Other Components */}
          <ProductModal />
        </ModalProvider>
      </body>
    </html>
  );
}
