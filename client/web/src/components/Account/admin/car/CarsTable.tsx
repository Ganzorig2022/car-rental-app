import EditCar from '@/components/Modal/EditCar';
import Spinner from '@/components/UI/Spinner';
import useGraphql from '@/hooks/useGraphql';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const CarData = () => {
  const { getOwnCarsByID, deleteCarById, getOwnCarsLoading, deleteCarLoading } =
    useGraphql();
  const [carsData, setCarsData] = useState<OwnCarsType[]>([]);
  const userId = Cookies.get('userId');
  const [carData, setCarData] = useState<OwnCarType>({
    id: '',
    image: '',
    type: '',
    typeDefinition: '',
    model: '',
    transmission: '',
    kml: 0,
    passengers: 0,
    price: 0,
  });

  const onEditHandler = async (id: string) => {
    setCarData(carsData.filter((car) => car.id === id)[0]);
  };

  const onDeleteHandler = async (id: string) => {
    const response = await deleteCarById(id);

    if (response) {
      toast.success('Машины дата устлаа.');

      setCarsData(carsData.filter((car) => car.id !== id));
    } else return;
  };

  //for first time rendering, fetch cars data from database
  useEffect(() => {
    (async () => {
      const response = await getOwnCarsByID(userId!);

      if (response) setCarsData([...response]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (getOwnCarsLoading)
    return (
      <div className='flex flex-col items-center justify-center space-y-2'>
        <p>Мэдээлэл шалгаж байна...</p> <ClipLoader color='black' size={30} />
      </div>
    );

  if (carsData.length === 0)
    return (
      <div className='flex flex-col items-center justify-center space-y-2'>
        <p>Мэдээлэл алга</p>
      </div>
    );

  if (deleteCarLoading) return <Spinner />;

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full table-compact md:table'>
          {/* head*/}
          <thead className=''>
            <tr className='hover'>
              <th className='text-center'>#</th>
              <th className='text-center'>id</th>
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
              } = car;
              return (
                <tr key={car.id}>
                  <th className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {i + 1}
                  </th>
                  <th className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {id.slice(22)}
                  </th>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    <Image
                      src={image}
                      width={100}
                      height={50}
                      alt='car'
                      className='mx-auto'
                    />
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {type}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {model}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {typeDefinition}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {kml}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    $ {price} / өдөр
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black text-center'>
                    {passengers}
                  </td>
                  <td className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'>
                    <label
                      htmlFor='editCar'
                      className='btn-ghost btn dark:text-white normal-case'
                      onClick={() => onEditHandler(id)}
                    >
                      <PencilSquareIcon className='h-4 text-red-primary mx-auto' />
                    </label>
                  </td>
                  <td
                    className='text-xs md:text-sm dark:bg-transparent dark:text-gray-secondary text-black'
                    onClick={() => onDeleteHandler(id)}
                  >
                    {deleteCarLoading && <ClipLoader color='black' size={30} />}
                    {!deleteCarLoading && (
                      <TrashIcon className='h-4 text-red-primary mx-auto' />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {
          <EditCar
            carData={carData}
            carsData={carsData}
            setCarsData={setCarsData}
          />
        }
      </div>
    </div>
  );
};

export default CarData;
