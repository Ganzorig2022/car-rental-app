import React, { useCallback, useState } from 'react';
import ContactDetails from './ContactDetails';
import CarDetails from './CarDetails';
import { useRecoilValue } from 'recoil';
import { loggedInState } from '@/atoms/loginAtom';
import { toast } from 'react-hot-toast';
import { useRental } from '@/providers/rentalProvider';

type Props = {};
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const RentalDetail = () => {
  const loggedIn = useRecoilValue(loggedInState);
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const { rentals, setRentals } = useRental();
  const inputProps = {
    email,
    phone,
    setPhone,
    setEmail,
    lastName,
    firstName,
    setLastName,
    setFirstName,
  };
  const onSubmit = useCallback(() => {
    if (!re.test(email) || !email || !phone || !lastName || !firstName) {
      toast.error('You have to input your information!!!');
      return;
    }
    // setRentals({ ...rentals, {} })
  }, [email, lastName, phone, firstName]);
  return (
    <div className='flex flex-row justify-between my-4 mx-8 w-full align-top'>
      <div>
        <div className='flex flex-col md:px-5 items-center justify-center md:flex-row md:justify-between bg-white rounded border border-gray-300'>
          <div className='card-body w-[365px] p-2'>
            <h4 className='card-title md:text-2xl mt-6'>Rental Details</h4>
            <p className='mt-4 font-semibold'>Dates & Times</p>
            <div className='text-gray-500'>
              <p>Sat, Apr 22, 2023 @ 12:00 PM</p>
              <p>Sun, Apr 23, 2023 @ 12:00 PM</p>
            </div>
            <p className='mt-4 font-semibold'>Pick-up & Return Location</p>
            <p className='text-gray-500'>Ulaanbaatar, Bayangol</p>
            <p className='mt-4 font-semibold'>Additional Details</p>
            <p className='text-gray-500'>Renter Age: 25+</p>
          </div>
        </div>
        <div className='flex flex-col my-2 md:px-5 items-center justify-center md:flex-row md:justify-between bg-white rounded border border-gray-300'>
          <div className='card-body p-2 w-full'>
            <CarDetails />
          </div>
        </div>
      </div>

      {/* ============== Forum side =============== */}

      <div className='w-full ml-4'>
        {!loggedIn ? (
          <div className='relative h-[110px] w-full sm:h-[110px] bg-gradient-to-r from-red-primary to-red-secondary rounded'>
            <div className='flex flex-col w-[730px]'>
              <div className='w-full px-6 md:w-auto md:px-2'>
                <button className='absolute right-8 top-8 bg-transparent hover:bg-white text-white font-semibold hover:text-primary py-2 px-6 border-2 border-white hover:border-transparent rounded-full'>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='w-[730px]' />
        )}
        <div>
          <ContactDetails states={inputProps} />
        </div>
        <div className='w-full h-[160px] bg-white rounded border border-gray-300 px-8'>
          <h4 className='card-title md:text-2xl mt-6'>Contact Details</h4>
          <div className='h-0.5 w-full bg-primary'></div>
          <div className='flex flex-row justify-between items-center mt-6'>
            <p>You will be charged when you pick up your rental.</p>
            <b className='flex items-start'>
              $<span className='text-4xl'>800</span>.80
            </b>
          </div>
        </div>
        <div className='flex w-full justify-end mt-4'>
          <button
            className='btn btn-primary text-white normal-case rounded-3xl py-2'
            onClick={onSubmit}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default RentalDetail;
