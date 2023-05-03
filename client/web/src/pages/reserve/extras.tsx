import Progress from '@/components/Reserve/cars/Progress';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import AddExtras from '@/components/Reserve/extras/AddExtras';
import { useRouter } from 'next/router';

type Props = {};

const Extras = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      {/* <Total /> */}
      <Progress />
      {/* CHOOSE VEHICLE CLASS */}
      <div className='w-full shadow p-5 dark:bg-dark-secondary'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none dark:text-gray-secondary'>
            Add Extras
          </div>
          <button
            className='btn btn-primary normal-case rounded-3xl py-2 text-white'
            onClick={() => router.push('/reserve/review&reserve')}
          >
            Continue to Review
          </button>
        </div>
      </div>
      {/* CENTER BODY */}
      <main className='bg-gray-primary dark:bg-dark-primary py-6 px-10 relative'>
        <div className='flex flex-row w-full'>
          <div>
            <AddExtras />
          </div>
        </div>
        <div className='flex w-full flex-row-reverse'>
          <button
            className='btn btn-primary normal-case rounded-3xl py-2 mr-6 text-white'
            onClick={() => router.push('/reserve/review&reserve')}
          >
            Continue to Review
          </button>
        </div>
      </main>
      <DownloadApp />
      <ScrollToTop />
    </div>
  );
};

export default Extras;
