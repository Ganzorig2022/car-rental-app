import DownloadApp from '@/components/Home/DownloadApp';
import Filter from '@/components/Reserve/cars/Filter';
import Progress from '@/components/Reserve/cars/Progress';
import Vehicles from '@/components/Reserve/cars/Vehicles';
import Spinner from '@/components/UI/Spinner';
import useGraphql from '@/hooks/useGraphql';
import { useRental } from '@/providers/rentalProvider';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const take = 5;
const perPage = 5;

const Cars = () => {
  const [carsData, setCarsData] = useState<CarsType[]>([]);
  const { rentals } = useRental();

  const { getAllCarsByPage, getCarsByPageLoading: loading } = useGraphql();
  const [active, setActive] = useState(1);

  // Get data at every click on the PAGINATION number
  const paginationHandler = async (page: number) => {
    const skip = page === 1 ? 0 : perPage * page - perPage;

    const data = await getAllCarsByPage(skip, take, 'desc');

    if (data) {
      setCarsData([...data]);
    } else {
      setCarsData([]);
    }
  };

  // Get data at every click on the Price Sort select option
  const onSelectHandler = async (e: ChangeEvent<HTMLSelectElement>) => {
    const priceValue = e.target.value;
    if (priceValue === 'Price: High to Low') {
      const data = await getAllCarsByPage(0, take, 'desc');

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }
    }
    if (priceValue === 'Price: Low to High') {
      const data = await getAllCarsByPage(0, take, 'asc');

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }
    }
  };

  // For first time rendering...
  useEffect(() => {
    (async () => {
      const data = await getAllCarsByPage(0, take, 'desc');

      if (data) setCarsData([...data]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const totalDays = rentals.totalDays;
    if (totalDays === 0) toast.error('Та байршил, өдрөө сонгоно уу');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Spinner />;

  return (
    <main>
      <Progress />
      <div>
        {/* CHOOSE VEHICLE CLASS */}
        <div className='w-full shadow p-5 bg-white dark:bg-dark-secondary'>
          <div className='flex flex-row items-center justify-between space-x-4'>
            <div className='flex flex-row items-end space-x-4'>
              <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none dark:text-gray-secondary'>
                Машины төрлөөр сонгох
              </div>
              <div className='text-gray-500 text-xs sm:text-base'>
                {carsData.length} үр дүн
              </div>
            </div>
            <div>
              <select
                className='select select-bordered border border-gray-300 shadow-lg w-full max-w-xs select-xs sm:select-sm hover:border-gray-500'
                onChange={onSelectHandler}
                defaultChecked
              >
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* CENTER BODY */}
      <main className='bg-gray-primary dark:bg-dark-primary py-5'>
        <div className='flex flex-row space-x-4 mx-auto'>
          <div className='w-1/3 bg-white dark:bg-dark-secondary rounded-lg h-full'>
            <Filter setCarsData={setCarsData} carsData={carsData} />
          </div>
          <div className='w-2/3 rounded-lg'>
            <Vehicles carsData={carsData} />
          </div>
        </div>
        {/* PAGINATION */}
        <div className='flex flex-row items-center justify-center mt-2'>
          <div className='btn-group'>
            {[1, 2, 3, 4].map((page) => (
              <div key={page}>
                <button
                  className={`btn btn-sm hover:bg-gray-500 ${
                    active === page && 'btn-active  bg-red-primary'
                  }`}
                  onClick={() => {
                    paginationHandler(page);
                    setActive(page);
                  }}
                >
                  {page}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <DownloadApp />
    </main>
  );
};

export default Cars;
