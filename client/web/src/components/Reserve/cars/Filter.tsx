import useGraphql from '@/hooks/useGraphql';
import { useRental } from '@/providers/rentalProvider';
import { MapPinIcon } from '@heroicons/react/24/solid';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Spinner from '../../UI/Spinner';
import { useRecoilState } from 'recoil';
import { closeModalState } from '@/atoms/closeModal';
import Map from '../../Modal/Map';

type Props = {
  setCarsData: Dispatch<SetStateAction<CarsType[]>>;
  carsData: CarsType[];
};

//===========Rendering===================
const Filter = ({ setCarsData, carsData }: Props) => {
  const {
    getAllCarsByPage,
    getAllCarsByPeople,
    getAllCarsByType,
    getCarsByPassengerLoading: loading,
    getCarsByTypeLoading,
  } = useGraphql();
  const { rentals } = useRental();
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);

  const [vehicles, setVehicles] = useState([
    { id: 0, name: 'SUV', status: false },
    { id: 1, name: 'Standard', status: false },
    { id: 2, name: 'Economy', status: false },
    { id: 3, name: 'Pickup', status: false },
    { id: 4, name: 'Bus', status: false },
  ]);

  const [priceRange, setPriceRange] = useState('160');

  const [capacity, setCapacity] = useState([
    {
      id: 0,
      text: '2-5 зорчигч',
      passengers: 4,
      status: false,
    },
    {
      id: 1,
      text: '6 дээш зорчигч',
      passengers: 6,
      status: false,
    },
  ]);

  // Getting cars by type. etc. "SUV" or "Bus"
  const carTypeHandler = async (id: number, name: string) => {
    const unchecked = vehicles[id].status;

    // when checkbox is unchecked, then fetch all types
    if (unchecked) {
      const data = await getAllCarsByPage(0, 5, 'desc');

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }

      // when checkbox is checked, then fetch specific type (by SUV, by Bus etc.)
    } else {
      const response = await getAllCarsByType(name);

      if (response) {
        setCarsData([...response]);
      }
    }
  };

  // Getting cars by Passengers Number
  const passengersHandler = async (id: number, passengers: number) => {
    const unchecked = capacity[id].status;

    // when checkbox is unchecked, then fetch all types
    if (unchecked) {
      const data = await getAllCarsByPage(0, 5, 'desc');

      if (data) {
        setCarsData([...data]);
      } else {
        setCarsData([]);
      }

      // when checkbox is checked, then fetch specific type (by SUV, by Bus etc.)
    } else {
      const response = await getAllCarsByPeople(passengers);

      if (response.length > 0) {
        setCarsData([...response]);
      }
    }
  };

  if (loading || getCarsByTypeLoading) return <Spinner />;

  return (
    <div className='p-4'>
      <div className='flex flex-row justify-between space-x-2 '>
        <MapPinIcon className='text-red-primary h-5' />
        <div className='flex flex-col bg-gray-200 dark:bg-gray-700 p-2 rounded w-full'>
          <p className='text-[9px] text-gray-500 dark:text-gray-secondary'>
            Хаанаас авах
          </p>
          <p className='text-[10px] text-gray-700 md:text-xs dark:text-gray-secondary'>
            {rentals.location}
          </p>
          {rentals.location !== '' && (
            <label
              htmlFor='map'
              className='text-[10px] text-red-primary  cursor-pointer'
              onClick={() => setCloseModal(true)}
            >
              Газрын зураг дээр харах
            </label>
          )}
        </div>
        {closeModal && <Map />}
      </div>
      <div className='divider m-0' />

      <div>
        <p className='text-xs sm:text-sm font-semibold dark:text-gray-secondary'>
          Filter By
        </p>
        <p className='text-[8px] sm:text-[10px] text-gray-400 mt-2 dark:text-gray-secondary'>
          Машины төрөл
        </p>
        {/* Vehicle types */}
        <div>
          {vehicles.map((each, idx) => {
            const { id, name, status } = each;
            return (
              <div className='form-control' key={id}>
                <label className='label cursor-pointer justify-start space-x-4 '>
                  <input
                    type='checkbox'
                    className='h-4 w-4 accent-red-primary '
                    checked={status}
                    readOnly
                    onClick={() => {
                      carTypeHandler(id, name);
                      setVehicles(
                        vehicles.map((item) =>
                          item.id === id
                            ? { ...item, status: !item.status }
                            : { ...item, status: false }
                        )
                      );
                    }}
                  />
                  <span className='label-text text-[10px] sm:text-sm md:text-base dark:text-gray-secondary'>
                    {name}
                  </span>
                  <span className='label-text text-[10px] text-gray-400'>
                    {carsData.length > 0 &&
                      carsData.filter((car) => car.type === name).length}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        {/* Capacity */}
        <div className='divider m-0' />
        <p className='text-[8px] sm:text-[10px] text-gray-400'>Зорчигч тоо</p>
        {capacity.map((people) => (
          <div className='form-control' key={people.id}>
            <label className='label cursor-pointer justify-start space-x-4'>
              <input
                type='checkbox'
                className='h-4 w-4 accent-red-primary'
                checked={people.status}
                readOnly
                onClick={() => {
                  passengersHandler(people.id, people.passengers);
                  setCapacity(
                    capacity.map((item) =>
                      item.id === people.id
                        ? { ...item, status: !item.status }
                        : { ...item, status: false }
                    )
                  );
                }}
              />
              <span className='label-text text-[10px] sm:text-sm md:text-base dark:text-gray-secondary'>
                {people.text}
              </span>
              <span className='label-text text-[10px] text-gray-400'>
                {carsData.length > 0 &&
                  carsData.filter((car) => car.passengers > 5).length}
              </span>
            </label>
          </div>
        ))}

        <div className='divider m-0' />
        <p className='text-[8px] sm:text-[10px] text-gray-400'>1 өдрийн үнэ</p>

        <div className='mt-2'>
          <input
            type='range'
            min='0'
            max='200'
            step='20'
            value={priceRange}
            className='range range-error range-xs h-3 sm:h-4 bg-gray-primary dark:bg-dark-primary'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPriceRange(e.target.value)
            }
          />
          <div className='w-full flex items-center justify-between text-[8px] sm:text-[10px] font-semibold'>
            <span className='dark:text-gray-secondary'>min.$20</span>
            <span className='text-red-primary sm:text-xs'>$ {priceRange}</span>
            <span className='dark:text-gray-secondary'>max.$200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filter);
