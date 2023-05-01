import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import dynamic from 'next/dynamic';

type Props = {
  children: ReactNode;
};

// Dynamic import resolved hydration error permanently in my case:
const Toaster = dynamic(
  () => import('react-hot-toast').then((c) => c.Toaster),
  {
    ssr: false,
  }
);

const Layout = ({ children }: Props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='bg-white dark:bg-dark-primary transition-all duration-700'>
      {/* Header */}
      <Header />
      <main className='max-w-7xl mx-auto'>{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;

//https://github.com/timolins/react-hot-toast/issues/46
