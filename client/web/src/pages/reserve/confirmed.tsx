import Image from 'next/image';
import React from 'react';

const Checklist = ["Familiarize yourself with your Pick-Up and Return location(s)", "Bring a valid driving license for each driver.", "Provide an acceptable method of payment in the renter's name. See your pick-up location is policies for details.", "For additional policy or deposit information, please refer to the Rental Policies section below, or within your email confirmation"]

const Confirmed = () => {
  return (
    <section className='w-full flex flex-col gap-y-[30px] gap-[30px]'>
        <div className='w-full py-[20px] px-2'>
            <div className='flex-col md:flex-row md:flex flex-wrap md:justify-between w-full items-center'>
                <div className='flex gap-x-[20px]'>
                    <Image width={35} height={35} src="/logos/confirmation.png" className='object-contain' alt='comfirmed' />
                    <div className='flex-col gap-y-[10px] max-w-[326px] flex-wrap'>
                        <h1 className='font-semibold text-[25px] dark:text-white duration-300'>Reservation Confirmed</h1>
                        <p className='font-normal dark:text-white duration-300 text-[10px]'>Thanks USERNAME! We look forward to seeing you on April 20, 2023 Confirmation Number: 12345678</p>
                    </div>
                </div>
                <div className='min-w-[220px] max-w-[220px] duration-300 md:mr-[10px] ml-[100px] md:ml-[200px] relative'>
                    <Image
                        width={100}
                        height={100}
                        src="/cars/test.png"
                        className='object-contain w-full'
                        alt='car'
                    />
                </div>
            </div>
            <div className='border border-[#E5E7E9] relative flex w-full h-auto'>
                <button className='absolute w-[30px] h-[30px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-[5px] rounded-full'>
                    <Image
                        width={100}
                        height={100}
                        src="/icons/right-arrow.png"
                        className='w-full object-contain'
                        alt='arrow-right'
                    />
                </button>
                <div className='py-[15px] pl-[30px] sm:w-1/2 w-full border-r border-r-[#E5E7E9]'>
                    <h4 className='font-semibold text-[12px] dark:text-white duration-300 flex flex-col gap-[7px]'>PICK-UP</h4>
                    <div className='max-w-[250px] flex-wrap'>
                        <p className='text-[#3E3E3E] text-normal text-[12px] dark:text-white'>Khan-Uul dustrict 17 Ulaanbaatar, Mongolia</p>
                        <p className='text-[#777777] font-medium text-[11px] dark:text-white'>Sat, Apr 22, 2023 @ 12:00 PM</p>
                    </div>
                </div>
                <div className='py-[15px] pl-[30px] sm:w-1/2 w-full'>
                    <h4 className='font-semibold text-[12px] dark:text-white duration-300 flex flex-col gap-[7px]'>RETURN</h4>
                    <div className='max-w-[250px] flex-wrap'>
                        <p className='text-[#3E3E3E] text-normal text-[12px] dark:text-white'>Khan-Uul dustrict 17 Ulaanbaatar, Mongolia</p>
                        <p className='text-[#777777] font-medium text-[11px] dark:text-white'>Sat, Apr 22, 2023 @ 12:00 PM</p>
                    </div>
                </div>
            </div>
            <div className='py-[25px] flex items-center justify-between sm:flex-row flex-col gap-[15px]'>
                <p className='font-normal text-[12px] dark:text-white duration-300 text-center'>A confirmation email has been sent to the email address provided.</p>
                <div className='flex items-center gap-[20px]'>
                    <button className='px-[25px] py-[10px] rounded-[30px] bg-[#FF3002] border-2 border-[#FF3002] text-white text-[10px] font-medium'>Modify Reservation</button>
                    <button className='px-[25px] py-[10px] rounded-[30px] bg-[#FFF] border-2 border-[#FF3002] text-[10px] font-medium text-[#FF3002]'>Cancel Reservation</button>
                </div>
            </div>
        </div>

        <div className='pt-[30px] flex flex-col gap-[30px] sm:flex-row'>
            <div className='w-full h-auto p-[30px] flex flex-col gap-[25px] items-start'>
                <h1 className='font-semibold text-[20px] dark:text-white'>Rental Details</h1>
                <div className='w-full flex flex-col gap-[25px]'>
                    <div className='pb-[5px] border-b border-[#959595]'>
                        <h4 className='font-semibold text-base dark:text-white'>Rental Details</h4>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Driver Name: <strong>TEMUUJIN</strong></h4>
                        <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Email Address: <strong>s*****a@gmail.com</strong></h4>
                        <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Phone Number: <strong>******6010</strong></h4>
                        <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Age: <strong>25+</strong></h4>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[25px]'>
                    <div className='pb-[5px] border-b border-[#959595]'>
                        <h4 className='font-semibold text-base'>Vehicle Class</h4>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Vehicle Class: <strong>BMW X6</strong></h4>
                        <ul className='pl-[30px]'>
                            <li className='font-normal list-disc text-base text-[#3E3E3E] dark:text-white'>Automatic</li>
                            <li className='font-normal list-disc text-base text-[#3E3E3E] dark:text-white'>4 door</li>
                            <li className='font-normal list-disc text-base text-[#3E3E3E] dark:text-white'>5 passengers</li>
                        </ul>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Time & Distance 1 Day(s) @ $ 106.09 / Day</h4>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>$ 700.00</h4>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Unlimited Mileage</h4>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>Inclueded</h4>
                        </div>
                        <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'></h4>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[25px]'>
                    <div className='pb-[5px] border-b border-[#959595]'>
                        <h4 className='font-semibold text-base'>Extras</h4>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>GPS:</h4>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>$ 28.00</h4>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[25px]'>
                    <div className='pb-[5px] border-b border-[#959595]'>
                        <h4 className='font-semibold text-base'>Taxes & Fees</h4>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>SALES TAX (10.0%)</h4>
                            <h4 className='font-normal text-base text-[#3E3E3E] dark:text-white'>$ 72.80</h4>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[25px]'>
                    <div className='pb-[5px] border-b border-[#959595]'>
                        <h4 className='font-semibold text-base'>Estimated Total</h4>
                    </div>
                    <div className='flex flex-col gap-[12px]'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex flex-col gap-[10px]'>
                                <h5 className='font-normal text-[#404040] dark:text-white text-[12px]'>Estimated Total due at the counter</h5>
                                <p className='font-normal text-[10px] text-black dark:text-white max-w-[321px]'>Rates, taxes and fees do not reflect rates, taxes and fees applicable to non-included optional caverages or extras added later.</p>
                            </div>
                            <h1 className='font-medium text-[18px] text-black dark:text-white flex items-center'>$ <strong className='text-[28px]'>72.80</strong></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full sm:w-[683px] flex flex-col gap-[17px] px-[5px]'>
                <button className='w-full text-center py-[10px] rounded-[30px] border-2 border-[#FF3002] text-[#FF3002] text-[10px] font-medium'>Start Another Reservation</button>
                <div className='px-[20px] py-[25px] flex flex-col gap-[24px]'>
                    <h1 className='font-semibold text-[16px] text-[#303030] dark:text-white'>Rental Checklist</h1>
                    {Checklist.map((text, idx) => (
                        <div className='flex gap-[10px] items-center' key={idx}>
                            <Image
                                width={100}
                                height={100}
                                className='w-[20px] h-[20px]'
                                src="/logos/confirmation.png"
                                alt='confirmation'
                            />
                            <p className='font-normal text-[10px] text-[#525252] dark:text-white'>{ text }</p>
                        </div>
                    ))}
                </div>

                <div className='px-[30px] py-[17px] flex flex-col gap-[15px]'>
                    <div className='flex items-center gap-[10px]'>
                        <Image
                            width={100}
                            height={100}
                            className="w-[26px] h-[29]"
                            src="/icons/location-red.png"
                            alt='location'
                        />
                        <p className='font-medium text-[12px] text-[#616161] dark:text-white'>Khan-Uul district 17 Ulaanbaatar, Mongolia</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <Image
                            width={100}
                            height={100}
                            className="w-[26px] h-[29]"
                            src="/icons/phone.png"
                            alt='phone'
                        />
                        <p className='font-medium text-[12px] text-[#616161] dark:text-white'>+976 9999 9999</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <Image
                            width={100}
                            height={100}
                            className="w-[26px] h-[29]"
                            src="/icons/email.png"
                            alt='email'
                        />
                        <p className='font-medium text-[12px] text-[#616161] dark:text-white'>info@carrent.mn</p>
                    </div>
                    <div className='flex items-center gap-[10px]'>
                        <Image
                            width={100}
                            height={100}
                            className="w-[26px] h-[29]"
                            src="/icons/clock.png"
                            alt='clock'
                        />
                        <p className='font-medium text-[12px] text-[#616161] dark:text-white'>mon - fri 08:00 - 18:00</p>
                    </div>
                    <Image
                        width={100}
                        height={100}
                        className="w-[322px] h-[322px]"
                        src="/test-map.png"
                        alt='map'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Confirmed;