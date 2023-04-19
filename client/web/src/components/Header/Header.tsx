import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import DarkModeButton from '../DarkModeButton';
import SignUp from '../modal/SignUp';

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

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white px-5 py-5 shadow-md transition-all duration-700  dark:bg-slate-800 md:px-10'>
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
      <div className='flex items-center rounded-full py-2 md:border-2 md:shadow-sm'>
        <input
          type='text'
          placeholder={'Start your search'}
          className='flex-grow bg-transparent pl-5 outline-none'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {/* 768px - search icon alga bolno. */}
        <MagnifyingGlassIcon className='hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex' />
      </div>

      {searchInput && (
        <div className='col-span-3 mx-auto flex flex-col'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
        </div>
      )}
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
        <button className='btn-primary btn'>Sign In</button>
        <SignUp />
      </div>
    </header>
  );
};

export default Header;
