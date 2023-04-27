import Image from 'next/image';
import React from 'react';

type Props = {};

const Card = ({
  image,
  type,
  typeDefinition,
  model,
  kml,
  transmission,
  passengers,
  price,
  userId,
}: CarsType) => {
  return (
    <div className='mb-5'>
      <div className='flex flex-col py-5 md:px-5 items-center justify-center md:flex-row md:justify-between bg-white shadow-xl rounded-xl '>
        <figure>
          <Image
            src={image}
            alt='cars'
            width={150}
            height={150}
            className='md:w-[400px]'
          />
        </figure>
        <div className='card-body p-4 w-full'>
          <h4 className='card-title md:text-2xl'>{typeDefinition}</h4>
          <p>{model}</p>
          <div className='flex space-x-2 md:flex-wrap'>
            <div className='flex space-x-1'>
              <Image
                src={'/icons/km.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='font-semibold'>{kml} KML</p>
            </div>
            <div className='flex space-x-1'>
              <Image
                src={'/icons/gear.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='font-semibold'>{transmission}</p>
            </div>
            <div className='flex space-x-1'>
              <Image
                src={'/icons/users.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='font-semibold'>{passengers}</p>
            </div>
            <div className='flex space-x-1'>
              <Image
                src={'/icons/door.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='font-semibold'>{type === 'Bus' ? '1' : '4'}</p>
            </div>
          </div>
          <div
            tabIndex={0}
            className='collapse collapse-arrow bg-gray-100 rounded-box p-2! w-full'
          >
            <div className='collapse-title text-sm lg:text-lg font-medium text-red-primary'>
              More details
            </div>
            <div className='collapse-content flex flex-row flex-wrap space-x-2 md:grid'>
              <div>
                <span className='text-xs sm:text-sm pl-2'>Make: </span>
                <span className='text-xs sm:text-sm font-semibold'>Toyota</span>
              </div>
              <div>
                <span className='text-xs sm:text-sm'>Model: </span>
                <span className='text-xs sm:text-sm font-semibold'>
                  {model}
                </span>
              </div>
              <div>
                <span className='text-xs sm:text-sm'>Year: </span>
                <span className='text-xs sm:text-sm font-semibold'>{2020}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full px-6 md:w-auto md:px-2'>
          <button className='btn btn-primary normal-case rounded-3xl py-2 w-full'>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
