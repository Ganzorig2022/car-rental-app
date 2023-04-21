import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='bg-white max-w-7xl mx-auto dark:bg-dark-primary transition-all duration-700'>
      {/* Header */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
