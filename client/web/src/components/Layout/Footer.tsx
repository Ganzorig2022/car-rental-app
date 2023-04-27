import React from 'react';

const Footer = () => {
  return (
    <div className='border-t border-gray-300 p-5 bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <h5 className='font-bold text-sm sm:text-base md:text-lg'>
            CAR RENTAL
          </h5>
          <p className='text-[10px] sm:text-[12px]'>
            @2023 CAR RENTAL. All rights Reserved | Designed by Temuujin.E
          </p>
        </div>
        <div className='flex flex-row items-center justify-between px-5'>
          <p className='text-[10px] sm:text-[12px] md:text-sm'>Books</p>
          <p className='text-[10px] sm:text-[12px] md:text-sm'>My Rentals</p>
          <p className='text-[10px] sm:text-[12px] md:text-sm'>Investors</p>
          <p className='text-[10px] sm:text-[12px] md:text-sm'>My Resources</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
