import React, { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import dynamic from 'next/dynamic';
import ScrollToTop from './ScrollToTop';
import { useQuery } from '@apollo/client';
import { GET_ALL_LANGUAGES } from '@/graphql/queries/language';

type Props = {
  children: ReactNode;
};

// Dynamic import resolved hydration error permanently in my case:
//https://github.com/timolins/react-hot-toast/issues/46
const Toaster = dynamic(
  () => import('react-hot-toast').then((c) => c.Toaster),
  {
    ssr: false,
  }
);

const Layout = ({ children }: Props) => {
  // 0) Get language texts from database
  const { data: getAllLanguages } = useQuery(GET_ALL_LANGUAGES);
  const mnObj = {};
  const engObj = {};

  // 1)  Divide by ENGLISH, MONGOL
  const mn = getAllLanguages?.getLanguageText.filter(
    ({ lang }: { lang: string }) => lang === 'mn'
  );
  const eng = getAllLanguages?.getLanguageText.filter(
    ({ lang }: { lang: string }) => lang === 'eng'
  );

  // 2) { bookTxt: 'Захиалга' }
  mn?.forEach(({ textId, value }: { textId: string; value: string }) => {
    Object.assign(mnObj, { [textId]: value });
  });

  // 3) { bookTxt: 'Book' }
  eng?.forEach(({ textId, value }: { textId: string; value: string }) => {
    Object.assign(engObj, { [textId]: value });
  });

  // 4)  Set data to local storage by ENG and MN
  // "localStorage is not defined" error happens when page refresh. Because nextjs SSR.
  typeof window !== 'undefined'
    ? window.localStorage.setItem('mn', JSON.stringify(mnObj))
    : false;

  typeof window !== 'undefined'
    ? window.localStorage.setItem('eng', JSON.stringify(engObj))
    : false;

  // 👇️ scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='bg-white dark:bg-dark-primary transition-all duration-500'>
      {/* Header */}
      <Header />
      <main className='max-w-7xl mx-auto'>{children}</main>
      <Footer />
      <ScrollToTop />
      <Toaster
        position='top-center'
        toastOptions={{
          duration: 2000,
        }}
      />
    </div>
  );
};

export default Layout;
