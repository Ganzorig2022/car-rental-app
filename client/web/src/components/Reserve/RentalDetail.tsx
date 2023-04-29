import { closeModalState } from '@/atoms/closeModal';
import { loggedInState } from '@/atoms/loginAtom';
import useGraphql from '@/hooks/useGraphql';
import { useRental } from '@/providers/rentalProvider';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Spinner from '../UI/Spinner';
import CarDetails from './CarDetails';
import ContactDetails from './ContactDetails';

const RentalDetail = () => {
  const loggedIn = useRecoilValue(loggedInState);
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const { rentals } = useRental();
  const setCloseModal = useSetRecoilState(closeModalState);
  const [summary, setSummary] = useState(0);
  const router = useRouter();

  const inputProps = {
    phone,
    setPhone,
    lastName,
    firstName,
    setLastName,
    setFirstName,
  };

  const {
    createRentals,
    updateUserByID,
    createRentalLoading,
    updateUserLoading,
  } = useGraphql();

  const onSubmit = useCallback(async () => {
    if (!loggedIn) return toast.error('Please login to complete your reserve');

    if (!phone || !lastName || !firstName) {
      toast.error('You have to enter your information!!!');
      return;
    }

    const userId = Cookies.get('userId');
    const name = `${firstName} ${lastName}`;

    //1) Save user name to database
    const responseUser = await updateUserByID(userId!, name, phone);

    if (!responseUser) toast.error('User not found');

    //2) Save rentals to database
    const response = await createRentals(rentals);

    if (response?.id) {
      toast.success('Congrats! Successfully created a rental!.');
    }

    // 3) go to home page
    router.push('/reserve/confirmed');
  }, [
    lastName,
    phone,
    firstName,
    loggedIn,
    createRentals,
    rentals,
    updateUserByID,
    router,
  ]);

  if (createRentalLoading || updateUserLoading) return <Spinner />;

  return (
    <div className='flex flex-row justify-between my-4 mx-8 w-full align-top'>
      <div>
        <div className='flex flex-col md:px-5 items-center justify-center md:flex-row md:justify-between bg-white rounded border border-gray-300'>
          <div className='card-body w-[365px] p-2'>
            <h4 className='card-title md:text-2xl mt-6'>Rental Details</h4>
            <p className='mt-4 font-semibold'>Dates & Times</p>
            <div className='text-gray-500'>
              <p>{rentals.dateRent} @ 12:00 PM</p>
              <p>{rentals.dateReturn} @ 12:00 PM</p>
            </div>
            <p className='mt-4 font-semibold'>Pick-up & Return Location</p>
            <p className='text-gray-500'>{rentals.location}</p>
            <p className='mt-4 font-semibold'>Additional Details</p>
            <p className='text-gray-500'>Renter Age: 25+</p>
          </div>
        </div>
        <div className='flex flex-col my-2 md:px-5 items-center justify-center md:flex-row md:justify-between bg-white rounded border border-gray-300'>
          <div className='card-body p-2 w-full'>
            <CarDetails setSummary={setSummary} />
          </div>
        </div>
      </div>

      {/* ============== FORM SECTION =============== */}
      <div className='w-full ml-4'>
        {!loggedIn ? (
          <div className='relative h-[110px] w-full sm:h-[110px] bg-gradient-to-r from-red-primary to-red-secondary rounded'>
            <div className='flex flex-col w-[730px]'>
              <div className='w-full px-6 md:w-auto md:px-2'>
                <label
                  htmlFor='signin'
                  className='absolute right-8 top-8 bg-transparent hover:bg-white text-white font-semibold hover:text-primary py-2 px-6 border-2 border-white hover:border-transparent rounded-full'
                  onClick={() => setCloseModal(true)}
                >
                  Нэвтрэх
                </label>
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
              $<span className='text-4xl'>{summary}</span>00
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
