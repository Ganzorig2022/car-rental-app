import React from 'react';
import Image from 'next/image';
import PickUp from './PickUp';

const Banner = () => {
  return (
    <div className='relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] mt-5 sm:mt-6 md:mt-10'>
      <div>
        <Image
          src='/wrangler.png'
          height={450}
          width={400}
          alt='wrangler'
          className='absolute z-10 -right-0 top-20 sm:top-32 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[800px]'
        />
      </div>
      <div className='w-full'>
        <p className='absolute top-10 text-lg sm:text-xl md:text-3xl sm:top-20 sm:left-20 md:left-44 left-10 z-10 font-bold dark:text-white'>
          Та машин түрээслэх үү?
        </p>
      </div>

      <div className='absolute sm:right-20 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0 bg-gradient-to-b from-red-primary to-red-secondary w-[400px] md:w-[700px] lg:w-[560px] sm:h-[500px] md:h-[627px] xl:h-[800px] h-[400px] rounded-2xl' />

      {/* LOCATION, PICKUP DATE */}
      <PickUp />
    </div>
  );
};

export default Banner;
