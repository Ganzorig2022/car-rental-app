import Image from 'next/image';
import React from 'react';

const ConfirmedFooter = () => {
  return (
    <div className='w-full pt-[200px] pb-[240px]'>
        <div className='bg-gradient-to-r from-[#FF3202] to-[#FE7647] rounded-[20px] sm:px-[110px] px-[40px] w-full pt-[70px] pb-[44px] sm:pl-[160px] pl-[60px] relative'>
            <div className='flex justify-between items-center w-full relative'>
                <div className='flex flex-col gap-[10px] max-w-[267px]'>
                    <h1 className='font-semibold text-[30px] text-white flex-wrap'>Download the free Car Rentel app</h1>
                    <p className='text-white font-semibold text-[12px] flex-wrap'>for faster, easier booking and enclusive deals</p>
                    <div className='flex gap-[6px] items-center'>
                        <a href="" className='w-1/2'>
                            <Image
                                src="/icons/apple.png"
                                width={100}
                                height={100}
                                className="w-full"
                                alt='mobile'
                            />
                        </a>
                        <a href="" className='w-1/2'>
                            <Image
                                src="/icons/apple.png"
                                width={100}
                                height={100}
                                className="w-full"
                                alt='mobile'
                            />
                        </a>
                    </div>
                </div>
                <div className='absolute right-0'>
                    <Image
                        src="/mobile.png"
                        width={100}
                        height={100}
                        className="w-[248px] h-[500px]"
                        alt='mobile'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmedFooter