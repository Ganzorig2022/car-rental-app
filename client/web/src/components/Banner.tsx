import React from 'react';
import Image from 'next/image';
import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Calendar from './Calendar';
import Search from './Search';

const Banner = () => {
  return (
    <div className='relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <div>
        <Image
          src='/wrangler.png'
          height={450}
          width={400}
          alt='wrangler'
          className='absolute z-10 -right-0 top-20 sm:top-32 sm:w-[500px]'
        />
      </div>
      <div className='w-full'>
        <p className='absolute top-10 sm:top-20 sm:left-20 md:left-36 left-10 z-10 text-3xl font-bold'>
          Та машин түрээслэх үү?
        </p>
      </div>

      <div className='absolute sm:right-20 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0 bg-gradient-to-b from-red-primary to-red-secondary w-[546px] sm:h-[500px] xl:h-[627px] h-[400px] rounded-2xl' />

      {/* LOCATION, PICKUP DATE */}
      <Search />
    </div>
  );
};

export default Banner;
