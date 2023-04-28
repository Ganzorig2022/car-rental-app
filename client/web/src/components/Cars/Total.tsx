import React from 'react';

type Props = {};

const Total = (props: Props) => {
  return (
    <div className='flex flex-row justify-end'>
      <div className='w-[130px] bg-white p-2'>
        <div className='flex flex-row space-x-2 justify-end'>
          <span className='font-semibold pt-1'>TOTAL</span>
          <span className='text-5xl md:text-7xl'>0</span>
          <span className='font-semibold pt-1'>.00</span>
        </div>
      </div>
    </div>
  );
};

export default Total;
