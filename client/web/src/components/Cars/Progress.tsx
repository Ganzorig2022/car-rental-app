import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

type Props = {};

const Progress = (props: Props) => {
  return (
    <>
      <div className='bg-gray-secondary'>
        <div className='flex flex-row justify-center flex-wrap lg:flex-nowrap items-start'>
          {/* 1) RENTAL DETAILS */}
          <div className='flex flex-row items-center space-x-2 p-2 sm:p-4'>
            <div className='flex flex-col space-y-2 sm:space-y-4'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='cursor-pointer'>
                  <span className='flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full border-2 border-gray-600 text-xs md:text-sm p-2'>
                    1
                  </span>
                </div>
                <label className='font-bold text-[10px] sm:text-xs md:text-sm'>
                  RENTAL DETAILS
                </label>
              </div>
              <div className='text-red-500 text-[9px] sm:text-[10px] md:text-xs ml-2'>
                05/01/2023 13:00pm
              </div>
            </div>
            <div className='pl-2 md:pl-5'>
              <ArrowRightIcon className='h-4 md:h-6' />
            </div>
          </div>
          {/* 2) PICKUP RETURN */}
          <div className='flex flex-row items-center space-x-2 p-2 sm:p-4'>
            <div className='flex flex-col space-y-2 sm:space-y-4'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='cursor-pointer'>
                  <span className='flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full border-2 border-gray-600 text-xs md:text-sm p-2'>
                    2
                  </span>
                </div>
                <label className='font-bold text-[10px] sm:text-xs md:text-sm'>
                  PICK UP & RETURN
                </label>
              </div>
              <div className='text-red-500 text-[9px] sm:text-[10px] md:text-xs ml-2'>
                Ulaanbaatar, Bayangol
              </div>
            </div>
            <div className='pl-2 md:pl-5'>
              <ArrowRightIcon className='h-4 md:h-6' />
            </div>
          </div>
          {/* 3) VEHICLE */}
          <div className='flex flex-row items-center space-x-2 p-2 sm:p-4'>
            <div className='flex flex-col space-y-2 sm:space-y-4'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='cursor-pointer'>
                  <span className='flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full bg-gradient-to-r from-red-primary to-red-secondary text-xs md:text-sm text-white p-2.5'>
                    3
                  </span>
                </div>
                <label className='font-bold text-[10px] sm:text-xs md:text-sm'>
                  VEHICLE
                </label>
              </div>
              <div className='text-[10px] sm:text-xs md:text-sm ml-2 font-semibold'>
                Select
              </div>
            </div>
            <div className='pl-2 md:pl-5'>
              <ArrowRightIcon className='h-4 md:h-6' />
            </div>
          </div>
          {/* 4) EXTRAS */}
          <div className='flex flex-row items-center space-x-2 p-2 sm:p-4'>
            <div className='flex flex-col space-y-2 sm:space-y-4'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='cursor-pointer'>
                  <span className='flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full border-2 border-gray-600 text-xs md:text-sm p-2'>
                    4
                  </span>
                </div>
                <label className='font-bold text-[10px] sm:text-xs md:text-sm'>
                  EXTRAS
                </label>
              </div>
              <div className='text-red-500 text-[9px] sm:text-[10px] md:text-xs ml-2'></div>
            </div>
            <div className='pl-2 md:pl-5'>
              <ArrowRightIcon className='h-4 md:h-6' />
            </div>
          </div>
          {/* 5) EXTRAS */}
          <div className='flex flex-row items-center space-x-2 p-2 sm:p-4'>
            <div className='flex flex-col space-y-2 sm:space-y-4'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='cursor-pointer'>
                  <span className='flex h-4 w-4 md:h-6 md:w-6 items-center justify-center rounded-full border-2 border-gray-600 text-xs md:text-sm p-2'>
                    5
                  </span>
                </div>
                <label className='font-bold text-[10px] sm:text-xs md:text-sm'>
                  REVIEW & RESERVE
                </label>
              </div>
              <div className='text-red-500 text-[9px] sm:text-[10px] md:text-xs ml-2'></div>
            </div>
            <div className='pl-2 md:pl-5'>
              <ArrowRightIcon className='h-4 md:h-6' />
            </div>
          </div>
        </div>
      </div>
      {/* CHOOSE VEHICLE CLASS */}
      <div className='w-full shadow p-5'>
        <div className='flex flex-row items-end space-x-4'>
          <div className='text-lg sm:text-2xl md:text-3xl font-bold leading-none'>
            Choose a Vehicle Class
          </div>
          <div className='text-gray-500 text-xs sm:text-base'>24 results</div>
        </div>
      </div>
    </>
  );
};

export default Progress;
