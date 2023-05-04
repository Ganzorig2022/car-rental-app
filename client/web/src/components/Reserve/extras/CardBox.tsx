import { useRental } from '@/providers/rentalProvider';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  image: string;
  typeDefinition: string;
  text: string;
  price: string;
};

const CardBox = ({ image, typeDefinition, text, price }: Props) => {
  const [clicked, setClicked] = useState(false);
  const { rentals, setRentals } = useRental();

  const onSubmitHandler = (extras: string) => {
    setClicked((prev) => !prev);

    if (extras === 'Coverage')
      setRentals((prev) => ({
        ...prev,
        extras: { ...prev.extras, coverage: !prev.extras.coverage },
      }));
    if (extras === 'Child Safety Seat')
      setRentals((prev) => ({
        ...prev,
        extras: { ...prev.extras, child_safety: !prev.extras.child_safety },
      }));
    if (extras === 'GPS') {
      setRentals((prev) => ({
        ...prev,
        extras: { ...prev.extras, GPS: !prev.extras.GPS },
      }));
    }
  };

  return (
    <div className='mx-6 my-4 w-full'>
      <div className='flex flex-col md:px-5 items-center justify-center md:flex-row md:justify-between bg-white dark:bg-dark-secondary shadow-xl rounded-xl hover:scale-[1.01] transition-all duration-400 '>
        <div className='card-body p-4 w-full'>
          <h4 className='card-title md:text-2xl dark:text-gray-secondary'>
            {typeDefinition}
          </h4>
          <div className='flex space-x-2 md:flex-wrap'>
            <div className='flex space-x-1'>
              <Image
                src={image}
                alt='Movie'
                width={35}
                height={35}
                className='object-contain dark:bg-gray-secondary dark:rounded-full '
              />
              <p className='font-normal mt-3 pl-2 text-xs dark:text-gray-secondary'>
                {text}
              </p>
            </div>
          </div>
        </div>
        <div className='w-[610px]'>
          <p className='dark:text-gray-secondary'>{price}</p>
        </div>
        <div className='w-full px-6 md:w-auto md:px-2'>
          <button
            className={`btn btn-outline border-2 btn-primary rounded-full px-6 normal-case ${
              clicked && 'bg-red-primary !text-white'
            }`}
            onClick={() => onSubmitHandler(typeDefinition)}
          >
            {clicked ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
