import Progress from '@/components/Cars/Progress';
import Total from '@/components/Cars/Total';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import React from 'react';
import RentalDetail from '@/components/Reserve/RentalDetail';
import { useRental } from '@/providers/rentalProvider';

type Props = {};

const Reserve = (props: Props) => {
  const { rentals, setRentals } = useRental();

  console.log(rentals);

  return (
    <div>
      <Total />
      <Progress />
      {/* CHOOSE VEHICLE CLASS */}
      <div className='w-full shadow p-5'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none'>
            Review & Reserve
          </div>
        </div>
      </div>
      {/* CENTER BODY */}
      <main className='bg-gray-primary py-5'>
        <div className='flex flex-row w-full'>
          <div>
            <RentalDetail />
          </div>
        </div>
      </main>
      <DownloadApp />
      <ScrollToTop />
    </div>
  );
};

export default Reserve;
