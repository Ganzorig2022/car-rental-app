import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className='overflow-hidden'>
        <div className='flex flex-col md:flex-row justify-between md:items-center m-8 '>
          <div className=''>
            <h6 className='text-sm md:text-base lg:text-2xl font-normal '>
              TEMUUJIN ERDENE
            </h6>
            <p className='lg:text-[10px] md:text-[8px] text-[8px] mt-2'>
              Start a reservation to earn and redeem points. While making a
              reservation, you will have the option to use your points on
              qualifying rentals by selecting the number of days you wish to
              redeem.
            </p>
          </div>
          <div className='lg:w-[156px] md:w-[100px] w-[156px] h-[20px] lg:h-[36px] md:h-[30px] mx-auto lg:m-10 m-1'>
            <button className={`w-full main-button`}>Reserve Redeem</button>
          </div>
        </div>
        {children}
      </main>
    </>
  );
};

export default Layout;
