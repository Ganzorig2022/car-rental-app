import Head from 'next/head';
import { type NextPage } from 'next';
import Banner from '@/components/Home/Banner';
import BestServices from '@/components/Home/BestServices';
import HowItWorks from '@/components/Home/HowItWorks';
import DownloadApp from '@/components/Home/DownloadApp';
import TopDeal from '@/components/Home/TopDeal';
import ScrollToTop from '@/components/Layout/ScrollToTop';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Car rental App</title>
        <meta name='description' content='created by Leap-3 Team-2' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner />
      <main className='bg-white'>
        <HowItWorks />
        <TopDeal />
        <BestServices />
        <DownloadApp />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Home;
