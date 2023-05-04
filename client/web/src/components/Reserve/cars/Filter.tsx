import useGraphql from '@/hooks/useGraphql';
import { useRental } from '@/providers/rentalProvider';
import { MapPinIcon } from '@heroicons/react/24/solid';
import React, { Dispatch, SetStateAction, useState } from 'react';
import Spinner from '../../UI/Spinner';
import { useRecoilState } from 'recoil';
import { closeModalState } from '@/atoms/closeModal';
import Map from '../../Modal/Map';

type Props = {
  setCarsData: Dispatch<SetStateAction<CarsType[]>>;
};

//===========Rendering===================
const Filter = ({ setCarsData }: Props) => {
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

  const [capacity, setCapacity] = useState({
    lte5: false,
    gte6: false,
  });

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
  const passengersHandler = async (people: number) => {
    const response = await getAllCarsByPeople(people);

    if (response.length > 0) {
      setCarsData([...response]);
    }
  };

  if (loading || getCarsByTypeLoading) return <Spinner />;

  return (
    <div className='p-4'>
      <div className='flex flex-row justify-between space-x-2 '>
        <MapPinIcon className='text-red-primary h-5' />
        <div className='flex flex-col bg-gray-200 dark:bg-gray-700 p-2 rounded w-full'>
          <p className='text-[9px] text-gray-500 dark:text-gray-secondary'>
            Available from
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
          Car type
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
                  <span className='label-text text-xs sm:text-sm md:text-base dark:text-gray-secondary'>
                    {name}
                  </span>
                  <span className='label-text text-[10px] text-gray-400'>
                    10
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        {/* Capacity */}
        <div className='divider m-0' />
        <p className='text-[8px] sm:text-[10px] text-gray-400'>Capacity</p>
        <div className='form-control'>
          <label className='label cursor-pointer justify-start space-x-4'>
            <input
              type='checkbox'
              className='h-4 w-4 accent-red-primary '
              checked={capacity.lte5}
              onClick={() => {
                passengersHandler(5);
                setCapacity({ gte6: false, lte5: !capacity.lte5 });
              }}
            />
            <span className='label-text text-xs sm:text-sm md:text-base dark:text-gray-secondary'>
              2-5 passengers
            </span>
            <span className='label-text text-[10px] text-gray-400 dark:text-gray-secondary'>
              28
            </span>
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer justify-start space-x-4'>
            <input
              type='checkbox'
              className='h-4 w-4 accent-red-primary'
              checked={capacity.gte6}
              onClick={() => {
                passengersHandler(6);
                setCapacity({ gte6: !capacity.gte6, lte5: false });
              }}
            />
            <span className='label-text text-xs sm:text-sm md:text-base dark:text-gray-secondary'>
              6 more passengers
            </span>
            <span className='label-text text-[10px] text-gray-400'>28</span>
          </label>
        </div>
        <div className='divider m-0' />
        <p className='text-[8px] sm:text-[10px] text-gray-400'>Daily price</p>

        <div className='mt-2'>
          <input
            type='range'
            min='0'
            max='200'
            step='20'
            value={priceRange}
            className='range range-error range-xs h-3 sm:h-4 bg-gray-primary dark:bg-dark-primary'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPriceRange(e.target.value)
            }
          />
          <div className='w-full flex items-center justify-between text-[9px] font-semibold'>
            <span className='dark:text-gray-secondary'>min.$20</span>
            <span className='text-red-primary text-xs sm:text-sm'>
              $ {priceRange}
            </span>
            <span className='dark:text-gray-secondary'>max.$200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
