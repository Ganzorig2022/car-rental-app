import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Calendar from './Calendar';
import { useRental } from '@/providers/rentalProvider';
import { calculateDate } from '@/utils/calculateDate';
import Cookies from 'js-cookie';

type Props = {};

const PickUp = (props: Props) => {
  const router = useRouter();
  const { rentals, setRentals } = useRental();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const userId = Cookies.get('userId') as string;

  useEffect(() => {
    const { stringStartDate, stringEndDate, totalDays } = calculateDate(
      startDate,
      endDate
    );

    setRentals((prev) => ({
      ...prev,
      dateRent: stringStartDate, // etc. "2023-04-26"
      dateReturn: stringEndDate, // etc. "2023-04-29"
      totalDays, // etc. 3 days
      location,
      userId,
    }));
  }, [startDate, endDate, setRentals, location, userId]);

  console.log('rentals', rentals);

  return (
    <>
      <div className='absolute -bottom-10 left-1/2 md:-bottom-40 lg:-bottom-10 -translate-x-1/2 bg-white p-2 shadow-md rounded-lg z-20 w-[200px] sm:w-[500px] md:w-[800px]'>
        <div className='flex flex-col space-y-2 md:flex-row justify-between items-center'>
          {/* LOCATION */}
          {/* <GooglePlaces /> */}
          <div>
            <select
              className='select w-full max-w-[200px]'
              onChange={(e) => setLocation(e.target.value)}
            >
              <option disabled selected>
                Choose a location
              </option>
              <option value='Ulaanbaatar'>Ulaanbaatar</option>
              <option value='Tow'>Tow</option>
              <option value='Khovd'>Khovd</option>
              <option value='Uws'>Uws</option>
              <option value='Bayan-Ulgii'>Bayan-Ulgii</option>
            </select>
          </div>

          {/* PICKUP date */}
          <div className='dropdown dropdown-bottom'>
            <label
              tabIndex={0}
              className='btn bg-white border-none text-black focus:bg-white hover:bg-gray-100'
            >
              <div className='flex flex-col items-start space-y-1'>
                <div className='flex flex-row space-x-4 items-center justify-between'>
                  <div className='normal-case'>Pickup date</div>
                  <ChevronDownIcon className='h-4' />
                </div>
                <div className='text-gray-400 font-normal normal-case text-[12px] sm:text-sm'>
                  {startDate.toDateString()}
                </div>
              </div>
            </label>
            <label
              tabIndex={0}
              className='btn bg-white border-none text-black focus:bg-white active:bg-white hover:bg-gray-100'
            >
              <div className='flex flex-col items-start space-y-1'>
                <div className='flex flex-row space-x-4 items-center justify-between'>
                  <div className='normal-case'>Drop-off date</div>
                  <ChevronDownIcon className='h-4' />
                </div>
                <div className='text-gray-400 font-normal normal-case text-[12px] sm:text-sm'>
                  {endDate.toDateString()}
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-white mt-2 -translate-x-20'
            >
              <li className=''>
                <Calendar
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDate={startDate}
                  endDate={endDate}
                />
              </li>
            </ul>
          </div>
          {/* router.push(/reserve/cars) */}
          <button
            className='main-button m-1'
            onClick={() => router.push('/reserve/cars')}
          >
            Browse Vehicles
          </button>
        </div>
      </div>
    </>
  );
};

export default PickUp;
