import Image from 'next/image';
import React from 'react';

const Confirmed = () => {
  return (
    <section className='w-full flex-col gap-y-[30px]'>
        <div className='dark:bg-black w-full py-[20px] px-[100px]'>
            <div className='flex-row justify-between w-full'>
                <div className='flex gap-x-[20px]'>
                    <Image width={35} height={35} src="/logos/confirmation.png" className='object-contain' alt='comfirmed' />
                    <div className='flex-col gap-y-[10px] max-w-[326px] flex-wrap'>
                        <h1 className='font-semibold text-[25px] dark:text-white duration-300'>Reservation Confirmed</h1>
                        <p className='font-normal dark:text-white duration-300 text-[10px]'>Thanks USERNAME! We look forward to seeing you on April 20, 2023 Confirmation Number: 12345678</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Confirmed;