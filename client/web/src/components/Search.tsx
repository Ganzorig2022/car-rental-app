import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Calendar from './Calendar';
import { useRouter } from 'next/router';

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-2 shadow-md rounded-lg z-20 w-[800px]'>
        <div className='flex flex-row space-x-2'>
          {/* LOCATION */}
          <div className='dropdown dropdown-bottom'>
            <label
              tabIndex={0}
              className='btn m-1 bg-white border-none text-black focus:bg-white'
            >
              <div className='flex flex-row space-x-4 items-center justify-between'>
                <MapPinIcon className='h-6' />
                <div>Choose a location</div>
                <ChevronDownIcon className='h-4' />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Calendar />
              </li>
            </ul>
          </div>
          {/* PICKUP date */}
          <div className='dropdown dropdown-bottom'>
            <label
              tabIndex={0}
              className='btn m-1 bg-white border-none text-black focus:bg-white'
            >
              <div className='flex flex-col items-start space-y-1'>
                <div className='flex flex-row space-x-4 items-center justify-between'>
                  <div>Pickup date</div>
                  <ChevronDownIcon className='h-4' />
                </div>
                <div className='text-gray-400 font-normal'>May/01/2023</div>
              </div>
            </label>
            <label
              tabIndex={0}
              className='btn m-1 bg-white border-none text-black focus:bg-white active:bg-white'
            >
              <div className='flex flex-col items-start space-y-1'>
                <div className='flex flex-row space-x-4 items-center justify-between'>
                  <div>Drop-off date</div>
                  <ChevronDownIcon className='h-4' />
                </div>
                <div className='text-gray-400 font-normal'>May/01/2023</div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-white mt-2'
            >
              <li>
                <Calendar />
              </li>
            </ul>
          </div>
          {/* router.push(/reserve/cars) */}
          <button
            className='main-button'
            onClick={() => router.push('/reserve/cars')}
          >
            Browse Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
