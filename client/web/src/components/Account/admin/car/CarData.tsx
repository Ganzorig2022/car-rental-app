import Spinner from '@/components/UI/Spinner';
import { GET_OWN_CARS_BY_ID } from '@/graphql/queries/cars';
import useGraphql from '@/hooks/useGraphql';
import { useQuery } from '@apollo/client';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const CarData = () => {
  const userId = Cookies.get('userId');
  const [carsData, setCarsData] = useState<OwnCarsType[]>([]);
  const { getOwnCarsByID, getOwnCarsLoading, deleteCarById, deleteCarLoading } =
    useGraphql();
  const [persistData, setPersistData] = useState(false);

  const onEditHandler = async (id: string) => {
    // const response = await deleteCarById(id);
    // console.log('first', response);
    // if (response) {
    //   toast.success('Машины дата устлаа.');
    // } else return;
  };

  const onDeleteHandler = async (id: string) => {
    const response = await deleteCarById(id);

    if (response) {
      toast.success('Машины дата устлаа.');

      //   setPersistData(true);
      getCarsData();
    } else return;
  };

  const { data } = useQuery(GET_OWN_CARS_BY_ID, {
    variables: { userId: userId! },
    pollInterval: 100,
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  });

  const getCarsData = async () => {
    const response = await getOwnCarsByID(userId!);

    if (response) setCarsData([...response]);
  };

  //for first time rendering
  useEffect(() => {
    getCarsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   useEffect(() => {
  //     console.log('RENDERING');
  //     if (persistData) {
  //       if (data?.getOwnCars) {
  //         setCarsData([...data?.getOwnCars]);
  //       }
  //     }
  //   }, [persistData, data]);

  console.log('first', data);

  if (carsData.length === 0) return <div>No car data</div>;

  if (getOwnCarsLoading) return <Spinner />;

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full table-compact md:table'>
          {/* head*/}
          <thead className=''>
            <tr className='hover'>
              <th className='text-center'>#</th>
              <th className='text-center'>Зураг</th>
              <th className='text-center'>Төрөл</th>
              <th className='text-center'>Загвар</th>
              <th className='text-center'>Дэлгэрэнгүй</th>
              <th className='text-center'>Кмл</th>
              <th className='text-center'>Үнэ</th>
              <th className='text-center'>Зорчигч</th>
              <th className='text-center'>Засах</th>
              <th className='text-center'>Устгах</th>
            </tr>
          </thead>
          <tbody className='border hover'>
            {carsData?.map((car, i) => {
              const {
                id,
                image,
                type,
                model,
                typeDefinition,
                kml,
                price,
                passengers,
                checked,
              } = car;
              return (
                <tr key={car.id}>
                  <th className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {i + 1}
                  </th>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    <Image src={image} width={100} height={50} alt='car' />
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    {type}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    {model}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {typeDefinition}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    {kml}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    $ {price} / өдөр
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {passengers}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    <PencilSquareIcon
                      className='h-4 text-red-primary'
                      onClick={() => onEditHandler(id)}
                    />
                  </td>
                  <td
                    className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'
                    onClick={() => onDeleteHandler(id)}
                  >
                    {deleteCarLoading && <ClipLoader color='black' size={30} />}
                    {!deleteCarLoading && (
                      <TrashIcon className='h-4 text-red-primary' />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarData;
