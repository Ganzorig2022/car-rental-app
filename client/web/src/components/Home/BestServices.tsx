/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

type Props = {};

const BestServices = (props: Props) => {
  return (
    <div>
      <div className='flex flex-row items-center sm:flex-col'>
        <div className='w-1/2'>
          <Image
            src='/cars/range_rover.png'
            height={200}
            width={200}
            alt='wrangler'
            className='sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[800px] object-contain'
          />
        </div>
        <div className='flex flex-col items-start w-1/2 m-2'>
          <h3 className='uppercase text-[10px] mb-3 font-semibold ml-2'>
            Манай шилдэг үйлчилгээ
          </h3>
          <h3 className='text-sm font-bold ml-2'>
            Feel the best experience with our rental deals
          </h3>
          <div className='flex flex-row space-y-2'>
            <Image
              src='/logos/deals.png'
              height={50}
              width={50}
              alt='wrangler'
              // className='absolute z-10 -right-0 -bottom-100 sm:top-32 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[800px]'
            />
            <div className='flex flex-col'>
              <h5 className='text-[10px] font-semibold'>
                Deals for every budget
              </h5>
              <p className='text-[8px]'>Incredible price</p>
            </div>
          </div>
          <div className='flex flex-row space-y-2'>
            <Image
              src='/logos/best_price.png'
              height={50}
              width={50}
              alt='wrangler'
              // className='absolute z-10 -right-0 -bottom-100 sm:top-32 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[800px]'
            />
            <div className='flex flex-col'>
              <h5 className='text-[10px] font-semibold'>
                Best price guaranteed
              </h5>
              <p className='text-[8px]'>Find a lower price</p>
            </div>
          </div>
          <div className='flex flex-row space-y-2'>
            <Image
              src='/logos/support_24/7.png'
              height={50}
              width={50}
              alt='wrangler'
              // className='absolute z-10 -right-0 -bottom-100 sm:top-32 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[800px]'
            />
            <div className='flex flex-col'>
              <h5 className='text-[10px] font-semibold'>
                Deals for every budget
              </h5>
              <p className='text-[8px]'>Incredible price</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
