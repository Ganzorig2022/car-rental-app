// import Banner from '@/components/Home/Banner';
import BestServices from '@/components/Home/BestServices';
import DownloadApp from '@/components/Home/DownloadApp';
import HowItWorks from '@/components/Home/HowItWorks';
import TopDeal from '@/components/Home/TopDeal';
import { GET_ALL_LANGUAGES } from '@/graphql/queries/language';
import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { type NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Banner = dynamic(() => import('../components/Home/Banner'));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Car rental App</title>
        <meta name='description' content='created by Leap-3 Team-2' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner />
      <main className='bg-white dark:bg-dark-primary'>
        <HowItWorks />
        <TopDeal />
        <BestServices />
        <DownloadApp />
      </main>
    </>
  );
};

export default Home;
