import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import { useRental } from '@/providers/rentalProvider';

type Props = {
  setSummary: Dispatch<SetStateAction<number>>;
};

const CarDetails = ({ setSummary }: Props) => {
  const { rentals } = useRental();
  const carCostADay = rentals.car.price;
  const GPScostADay = 4 * rentals.totalDays;
  const totalDays = rentals.totalDays;
  const tax = (totalDays * carCostADay + GPScostADay) * 0.1;
  const summary = totalDays * carCostADay + GPScostADay + tax;

  useEffect(() => {
    setSummary(summary);
  }, [setSummary, summary]);

  return (
    <div className='w-full'>
      <div className='flex flex-row justify-between'>
        <div className='flex gap-2 flex-col'>
          <h4 className='card-title md:text-2xl mt-6'>{rentals.car.model}</h4>
          <p>{rentals.car.type}</p>
          <div className='flex gap-2 ml-2'>
            <div className='flex gap-2'>
              <Image
                src={'/icons/gear.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='text-xs text-gray-500'>
                {rentals.car.transmission}
              </p>
            </div>
            <div className='flex gap-2'>
              <Image
                src={'/icons/users.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='text-xs text-gray-500'>{rentals.car.passengers}</p>
            </div>
          </div>
          <div className='flex gap-2 ml-2'>
            <div className='flex gap-2'>
              <Image
                src={'/icons/km.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='text-xs text-gray-500'>{rentals.car.kml}KML</p>
            </div>
            <div className='flex gap-2'>
              <Image
                src={'/icons/door.png'}
                alt='Movie'
                width={15}
                height={15}
                className='object-contain'
              />
              <p className='text-xs text-gray-500'>
                {rentals.car.type === 'SUV' ? '4' : '1'}
              </p>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <Image
            src={rentals.car.image}
            alt='car'
            width={140}
            height={100}
            className='object-contain'
          />
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className='mt-10 w-full'>
        <p className='font-semibold'>Vehicle</p>
        <div className='flex justify-between text-xs mt-4'>
          <p>Time & Distance 1 Day(s) @ $ {carCostADay} / Day</p>${' '}
          {carCostADay * totalDays}.00
        </div>
        <div className='flex justify-between text-xs mt-2'>
          <p>Unlimited Mileage</p>
          Included
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className='mt-10 w-full'>
        <p className='font-semibold'>Extras</p>
        <div className='flex justify-between text-xs mt-4'>
          {rentals.extras.coverage ? (
            <div>Coverage {totalDays} Day(s) @ $ 4.00 / Day</div>
          ) : (
            <p>-</p>
          )}
          $ {totalDays * 4}.00
        </div>
        <div className='flex justify-between text-xs mt-2'>
          {rentals.extras.child_safety ? (
            <div>Childe Safety Belts {totalDays} Day(s) @ $ 4.00 / Day</div>
          ) : (
            <p>-</p>
          )}
          $ {totalDays * 4}.00
        </div>
        <div className='flex justify-between text-xs mt-2'>
          {rentals.extras.GPS ? (
            <div>GPS {totalDays} Day(s) @ $ 4.00 / Day</div>
          ) : (
            <p>-</p>
          )}
          $ {totalDays * 4}.00
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className='w-full h-0.5 bg-gray-200 mt-8' />
      {/* ----------------------------------------------------------------------------- */}
      <div className='mt-8 w-full'>
        <p className='font-normal text-primary text-sm'>Taxes & Fees</p>
        <div className='flex justify-between text-xs mt-4'>
          <p>SALES TAX (10.0%)</p>$ {tax.toFixed(2)}
        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className='w-full h-0.5 bg-gray-200 mt-8'></div>
      {/* ----------------------------------------------------------------------------- */}
      <div className='my-4 w-full'>
        <p className='font-semibold text-sm'>Estimated Total</p>
        <div className='flex justify-between text-sm mt-2 font-semibold'>
          <p></p>$<span className='text-4xl mt-[-4px]'>{summary}</span>00
        </div>
      </div>
    </div>
  );
};
export default CarDetails;
