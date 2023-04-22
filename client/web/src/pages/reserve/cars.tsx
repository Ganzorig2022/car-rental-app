import Filter from '@/components/Cars/Filter';
import Progress from '@/components/Cars/Progress';
import Total from '@/components/Cars/Total';
import Vehicles from '@/components/Cars/Vehicles';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import React from 'react';

type Props = {};

const Cars = (props: Props) => {
  return (
    <div>
      <Total />
      <Progress />
      {/* CENTER BODY */}
      <main className='bg-gray-primary py-5'>
        <div className='flex flex-row space-x-4 mx-auto'>
          <div className='w-1/3 bg-white rounded-lg'>
            <Filter />
          </div>
          <div className='w-2/3 rounded-lg'>
            <Vehicles />
          </div>
        </div>
      </main>
      <DownloadApp />
      <ScrollToTop />
    </div>
  );
};

export default Cars;
