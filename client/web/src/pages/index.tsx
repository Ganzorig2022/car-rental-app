import { type NextPage } from 'next';
import Head from 'next/head';
import Banner from '@/components/Home/Banner';
import BestServices from '@/components/Home/BestServices';
import HowItWorks from '@/components/Home/HowItWorks';

import toast, { Toaster } from 'react-hot-toast';
import TopDeal from '@/components/Home/TopDeal';

const Home: NextPage = () => {
  const notify = () => toast.success('Here is your toast.');

  return (
    <>
      <Head>
        <title>Car rental App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Toaster />
      <Banner />
      <main className='bg-white'>
        <HowItWorks />
        <BestServices />
        <TopDeal />
      </main>
      {/* <main className='mx-auto max-w-7xl px-8 sm:px-16'></main> */}
    </>
  );
};

export default Home;
