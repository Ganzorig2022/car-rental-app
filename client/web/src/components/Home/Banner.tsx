import React from 'react';
import Image from 'next/image';
import PickUp from './PickUp';

const Banner = () => {
  return (
    <div className='relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] pt-5 bg-gray-primary '>
      <div>
        <Image
          src='/cars/wrangler.png'
          height={450}
          width={400}
          alt='wrangler'
          priority
          className='absolute z-10 -right-0 top-20 sm:top-32 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[800px]'
        />
      </div>
      <div className='w-full'>
        <p className='absolute top-10 left-10 z-10 text-lg sm:text-xl md:text-3xl lg:text-4xl sm:top-20 sm:left-20 md:left-44 md:top-40 font-bold dark:text-white md:w-40 lg:w-60'>
          Та өөрт тохирох төмөр хүлгээ түрээслэхэд бэлэн үү?
        </p>
      </div>

      <div className='absolute sm:right-20 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0 bg-gradient-to-b from-red-primary to-red-secondary w-[400px] md:w-[700px] lg:w-[560px] sm:h-[500px] md:h-[627px] xl:h-[800px] h-[400px] rounded-2xl' />

      {/* LOCATION, PICKUP DATE */}
      <PickUp />
    </div>
  );
};

export default Banner;
