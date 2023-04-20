import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Calendar from './Calendar';
import { useRouter } from 'next/router';
import GooglePlaces from '../GooglePlaces';

type Props = {};

const PickUp = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();

  return (
    <>
      <div className='absolute -bottom-10 left-1/2 md:-bottom-40 lg:-bottom-10 -translate-x-1/2 bg-white p-2 shadow-md rounded-lg z-20 w-[200px] sm:w-[500px] md:w-[800px]'>
        <div className='flex flex-col space-y-2 md:flex-row justify-between'>
          {/* LOCATION */}
          <GooglePlaces />
          <div className='dropdown dropdown-bottom'>
            <label
              tabIndex={0}
              className='btn m-1 bg-white border-none text-black focus:bg-white hover:bg-gray-100'
            >
              <div className='flex flex-row space-x-4 items-center justify-between'>
                {/* <MapPinIcon className='h-6' />
                <div>Choose a location</div>
                <ChevronDownIcon className='h-4' /> */}
                {/* <select className='select w-full max-w-xs'>
                  <option disabled selected>
                    Choose a location
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select> */}
              </div>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>{/* <Calendar /> */}</li>
            </ul>
          </div>
          {/* PICKUP date */}
          <div className='dropdown dropdown-bottom'>
            <label
              tabIndex={0}
              className='btn bg-white border-none text-black focus:bg-white hover:bg-gray-100'
            >
              <div className='flex flex-col items-start space-y-1'>
                <div className='flex flex-row space-x-4 items-center justify-between'>
                  <div>Pickup date</div>
                  <ChevronDownIcon className='h-4' />
                </div>
                <div className='text-gray-400 font-normal normal-case'>
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
                  <div>Drop-off date</div>
                  <ChevronDownIcon className='h-4' />
                </div>
                <div className='text-gray-400 font-normal normal-case'>
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
