import Progress from '@/components/Cars/Progress';
import Total from '@/components/Cars/Total';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import React from 'react';
import AddExtras from '@/components/Extras/AddExtras';

type Props = {};

const Extras = (props: Props) => {
  return (
    <div>
      {/* <Total /> */}
      <Progress />
      {/* CHOOSE VEHICLE CLASS */}
      <div className='w-full shadow p-5'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none'>
            Add Extras
          </div>
          <button className='btn btn-primary normal-case rounded-3xl py-2 text-white'>
            Continue to Review
          </button>
        </div>
      </div>
      {/* CENTER BODY */}
      <main className='bg-gray-primary py-6 px-10 relative'>
        <div className='flex flex-row w-full'>
          <div>
            <AddExtras />
          </div>
        </div>
        <div className='flex w-full flex-row-reverse'>
          <button className='btn btn-primary normal-case rounded-3xl py-2 mr-6 text-white'>
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
