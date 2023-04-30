import Progress from '@/components/Cars/Progress';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import RentalDetail from '@/components/Reserve/review/RentalDetail';

const Reserve = () => {
  return (
    <div>
      <Progress />
      {/* CHOOSE VEHICLE CLASS */}
      <div className='w-full shadow p-5 dark:bg-dark-secondary'>
        <div className='flex flex-row items-center justify-between'>
          <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none dark:text-gray-secondary'>
            Review & Reserve
          </div>
        </div>
      </div>
      {/* CENTER BODY */}
      <main className='bg-gray-primary dark:bg-dark-primary py-5'>
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
