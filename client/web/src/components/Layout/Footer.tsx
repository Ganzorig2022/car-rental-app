import React from 'react';

const Footer = () => {
  return (
    <div className='p-5 bg-white dark:bg-dark-secondary'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <h5 className='font-bold text-sm sm:text-base md:text-lg dark:text-gray-secondary'>
            CAR RENTAL
          </h5>
          <p className='text-[10px] sm:text-[12px] dark:text-gray-secondary'>
            @2023 CAR RENTAL. All rights Reserved | Designed by Temuujin.E
          </p>
        </div>
        <div className='flex flex-row items-center justify-between px-5'>
          <p className='text-[10px] sm:text-[12px] md:text-sm dark:text-gray-secondary'>
            Books
          </p>
          <p className='text-[10px] sm:text-[12px] md:text-sm dark:text-gray-secondary'>
            My Rentals
          </p>
          <p className='text-[10px] sm:text-[12px] md:text-sm dark:text-gray-secondary'>
            Investors
          </p>
          <p className='text-[10px] sm:text-[12px] md:text-sm dark:text-gray-secondary'>
            My Resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
