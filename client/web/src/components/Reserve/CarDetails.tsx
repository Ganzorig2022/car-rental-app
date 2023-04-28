import React from 'react';
import Image from 'next/image';


type Props = {};

const CarDetails = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-row justify-between'>
                <div className='flex gap-2 flex-col'>
                    <h4 className='card-title md:text-2xl mt-6'>Full Size SUV</h4>
                    <p>BMW X6</p>
                    <div className='flex gap-2 ml-2'>
                        <div className='flex gap-2'>
                            <Image
                                src={'/icons/gear.png'}
                                alt='Movie'
                                width={15}
                                height={15}
                                className='object-contain'
                            />
                            <p className='text-xs text-gray-500'>Automatic</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image
                                src={'/icons/users.png'}
                                alt='Movie'
                                width={15}
                                height={15}
                                className='object-contain'
                            />
                            <p className='text-xs text-gray-500'>5</p>
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
                            <p className='text-xs text-gray-500'>15KML</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image
                                src={'/icons/door.png'}
                                alt='Movie'
                                width={15}
                                height={15}
                                className='object-contain'
                            />
                            <p className='text-xs text-gray-500'>4</p>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <Image
                        src={'/cars/bmw_x6.png'}
                        alt='Movie'
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
                    <p>Time & Distance 1 Day(s) @ $ 106.09 / Day</p>
                    $ 700.00
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
                    <p>-</p>
                    $ 0.00
                </div>
                <div className='flex justify-between text-xs mt-2'>
                    <p>-</p>
                    $ 0.00
                </div>
                <div className='flex justify-between text-xs mt-2'>
                    <p>Gps 1 Day(s) @ $ 4.00 / Day</p>
                    $ 28.00
                </div>
            </div>
            {/* ----------------------------------------------------------------------------- */}
            <div className='w-full h-0.5 bg-gray-200 mt-8'></div>
            {/* ----------------------------------------------------------------------------- */}
            <div className='mt-8 w-full'>
                <p className='font-normal text-primary text-sm'>Taxes & Fees</p>
                <div className='flex justify-between text-xs mt-4'>
                    <p>SALES TAX (10.0%)</p>
                    $ 72.80
                </div>
            </div>
            {/* ----------------------------------------------------------------------------- */}
            <div className='w-full h-0.5 bg-gray-200 mt-8'></div>
            {/* ----------------------------------------------------------------------------- */}
            <div className='my-4 w-full'>
                <p className='font-semibold text-sm'>Estimated Total</p>
                <div className='flex justify-between text-sm mt-2 font-semibold'>
                    <p></p>
                    $<span className='text-4xl mt-[-4px]'>800</span>.80
                </div>
            </div>
        </div>
    );
}
export default CarDetails;
