import Image from 'next/image';
import React from 'react';

type Props = {};

const CardBox = ({
  image,
  typeDefinition,
  text,
  price,
}: any) => {
  return (
    <div className='mx-6 my-4 w-full'>
      <div className='flex flex-col md:px-5 items-center justify-center md:flex-row md:justify-between bg-white shadow-xl rounded-xl '>
        <div className='card-body p-4 w-full'>
          <h4 className='card-title md:text-2xl'>{typeDefinition}</h4>
          <div className='flex space-x-2 md:flex-wrap'>
            <div className='flex space-x-1'>
              <Image
                src={image}
                alt='Movie'
                width={35}
                height={35}
                className='object-contain'
              />
              <p className='font-normal mt-3 pl-2 text-xs'>{text}</p>
            </div>
          </div>

        </div>
        <div className='w-[610px]'>
          <p>{price}</p>
        </div>
        <div className='w-full px-6 md:w-auto md:px-2'>
          <button className='btn btn-outline border-2 btn-primary rounded-full px-6 normal-case'>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
