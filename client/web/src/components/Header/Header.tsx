import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import DarkModeButton from '../DarkModeButton';
import SignUp from '../Modal/SignUp';

const Header = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const [navbar, setNavbar] = useState(false);

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <div
      className={`sticky top-0 z-50 grid grid-cols-3 px-5 py-5 ${
        navbar && 'bg-white shadow-md'
      } transition-all duration-700 dark:bg-slate-800 md:px-10`}
    >
      {/* LEFT */}
      <div
        className='relative my-auto flex h-10 cursor-pointer items-center'
        onClick={() => router.push('/')}
      >
        <Image
          src='/car.png'
          fill
          className='object-contain object-left'
          alt='logo'
        />
      </div>

      {/* Center Menu */}
      <div className='flex items-center justify-between'>
        <p className='border-b-2 border-transparent hover:border-red-primary cursor-pointer'>
          Book
        </p>
        <p className='border-b-2 border-transparent hover:border-red-primary cursor-pointer'>
          My Rentals
        </p>
        <p className='border-b-2 border-transparent hover:border-red-primary cursor-pointer'>
          Account
        </p>
        <p className='border-b-2 border-transparent hover:border-red-primary cursor-pointer'>
          Resources
        </p>
      </div>

      <div className='flex items-center justify-end space-x-2'>
        {/* DarkMode Button */}
        <DarkModeButton />
        {/* <button className='btn-ghost btn text-black dark:text-white'>
          Sign Up
        </button> */}
        {/* The button to open modal */}
        <label htmlFor='signup' className='btn-ghost btn'>
          Sign Up
        </label>
        <button className='main-button'>Sign In</button>
        <SignUp />
      </div>
    </div>
  );
};

export default Header;
