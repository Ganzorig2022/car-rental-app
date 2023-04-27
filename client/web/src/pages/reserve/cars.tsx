import Filter from '@/components/Cars/Filter';
import Progress from '@/components/Cars/Progress';
import Total from '@/components/Cars/Total';
import Vehicles from '@/components/Cars/Vehicles';
import DownloadApp from '@/components/Home/DownloadApp';
import ScrollToTop from '@/components/Layout/ScrollToTop';
import Spinner from '@/components/UI/Spinner';
import useGraphql from '@/hooks/useGraphql';
import { useEffect, useState } from 'react';

const take = 5;
const perPage = 5;

const Cars = () => {
  const [carsData, setCarsData] = useState<CarsType[]>([]);

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

  if (loading) return <Spinner />;

  return (
    <div>
      <Total />
      <Progress />
      {/* CENTER BODY */}
      <main className='bg-gray-primary py-5'>
        <div className='flex flex-row space-x-4 mx-auto'>
          <div className='w-1/3 bg-white rounded-lg'>
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
                    // getCarsByPagination({ variables: { skip, take } });
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
