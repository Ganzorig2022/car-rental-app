/* eslint-disable react/no-unescaped-entities */
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const TopDeal = (props: Props) => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h3 className='uppercase text-[10px] mb-3 font-semibold ml-2 sm:text-sm md:text-base'>
        Манай шилдэг үйлчилгээ
      </h3>
      <h3 className='text-sm font-bold ml-2 sm:text-base md:text-xl mb-2'>
        Explore Our Top Deal From Top-Rated Dealer
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>
        <div className='relative h-[250px] w-[200px] sm:h-[400px] sm:w-[300px] bg-gradient-to-b from-red-primary to-red-secondary rounded-2xl  m-5'>
          <div className='flex flex-row justify-between items-center m-2'>
            <div className='flex flex-col'>
              <p className='text-white'>TOYOTA</p>
              <p className='text-[10px] z-10 text-white w-[100px]'>LC 200</p>
            </div>
            <div className='flex flex-col'>
              <span className='text-white font-semibold'>$100</span>
              <span className='text-[10px] text-white'>/day/</span>
            </div>
          </div>

          <button className='text-[10px] text-white absolute left-10 bottom-2.5'>
            Details
          </button>
          <div className='absolute bottom-0 right-0'>
            <div className='text-[10px] text-white bg-[#292929] p-2 rounded-ee-2xl rounded-ss-2xl'>
              <div className='flex flex-row space-x-2 items-center justify-between w-[80px] sm:w-[120px]'>
                <button
                  className=''
                  onClick={() => router.push('reserve/cars')}
                >
                  Rent now
                </button>
                <ArrowRightIcon className='h-4' />
              </div>
            </div>
          </div>

          <Image
            src='/cars/land_200.png'
            height={200}
            width={200}
            alt='wrangler'
            className='sm:w-[300px] md:w-[400px] lg:w-[600px] object-contain z-20 absolute top-20 left-8'
          />
        </div>
      </div>
    </div>
  );
};

export default TopDeal;
