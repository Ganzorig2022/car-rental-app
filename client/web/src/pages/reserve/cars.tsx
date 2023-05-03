import Filter from '@/components/Reserve/cars/Filter';
import Progress from '@/components/Reserve/cars/Progress';
import Vehicles from '@/components/Reserve/cars/Vehicles';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import Spinner from '@/components/UI/Spinner';
import useGraphql from '@/hooks/useGraphql';
import { useRental } from '@/providers/rentalProvider';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const take = 5;
const perPage = 5;

const Cars = () => {
  const [carsData, setCarsData] = useState<CarsType[]>([]);
  const { rentals, setRentals } = useRental();

  const { getAllCarsByPage, getCarsByPageLoading: loading } = useGraphql();
  const [active, setActive] = useState(1);

  // Get data at every click
  const paginationHandler = async (page: number) => {
    const skip = page === 1 ? 0 : perPage * page - perPage;

    const data = await getAllCarsByPage(skip, take);

    if (data) {
      setCarsData([...data?.getAllCarsWithPagination]);
    } else {
      setCarsData([]);
    }
  };

  // For first time rendering...
  useEffect(() => {
    (async () => {
      const data = await getAllCarsByPage(0, take);

      if (data) setCarsData([...data?.getAllCarsWithPagination]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const totalDays = rentals.totalDays;
    if (totalDays === 0) toast.error('Please choose date');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <Progress />
      <div>
        {/* CHOOSE VEHICLE CLASS */}
        <div className='w-full shadow p-5 bg-white dark:bg-dark-secondary'>
          <div className='flex flex-row items-end space-x-4'>
            <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none dark:text-gray-secondary'>
              Choose a Vehicle Class
            </div>
            <div className='text-gray-500 text-xs sm:text-base'>
              {carsData.length} results
            </div>
          </div>
        </div>
      </div>
      {/* CENTER BODY */}
      <main className='bg-gray-primary dark:bg-dark-primary py-5'>
        <div className='flex flex-row space-x-4 mx-auto'>
          <div className='w-1/3 bg-white dark:bg-dark-secondary rounded-lg h-full'>
            <Filter setCarsData={setCarsData} />
          </div>
          <div className='w-2/3 rounded-lg'>
            <Vehicles carsData={carsData} />
          </div>
        </div>
        {/* PAGINATION */}
        <div className='flex flex-row items-center justify-center mt-2'>
          <div className='btn-group'>
            {[1, 2, 3, 4].map((page) => (
              <>
                <button
                  className={`btn ${active === page && 'btn-active'}`}
                  onClick={() => {
                    paginationHandler(page);
                    setActive(page);
                  }}
                >
                  {page}
                </button>
              </>
            ))}
          </div>
        </div>
      </main>
      <DownloadApp />
      <ScrollToTop />
    </div>
  );
};

export default Cars;

// refresh hiihed data baga zereg udaj unshij bsan tul hurdan unshihiin tuld SSR ashjiglaw.
// export async function getServerSideProps(context: NextPageContext) {
//   return {
//     props: {
//       session,
//     },
//   };
// }
