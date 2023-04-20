import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-gray-primary max-w-7xl mx-auto dark:bg-dark-primary transition-all duration-700'>
      {/* Header */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
