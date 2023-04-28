import { useAuth } from '@/hooks/useAuth';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { closeModalState } from '../../atoms/closeModal';
import { loggedInState } from '../../atoms/loginAtom';
import SignIn from '../Modal/SignIn';
import SignUp from '../Modal/SignUp';
import DarkModeButton from '../UI/DarkModeButton';
import Spinner from '../UI/Spinner';

const Header = () => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const { loading } = useAuth();
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

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

  if (loading) return <Spinner />;

  return (
    <div
      className={`sticky top-0 z-50 flex flex-row items-center justify-between py-2 px-2 ${
        navbar && 'bg-white shadow-md'
      } transition-all duration-700 dark:bg-slate-800`}
    >
      {/* LEFT */}
      <div className='' onClick={() => router.push('/')}>
        <Image
          src='/logo.png'
          width={50}
          height={50}
          className='object-contain sm:h-14 sm:w-14 md:h-14 md:w-20'
          alt='logo'
        />
      </div>

      {/* Center Menu */}
      <div className='hidden sm:flex items-center justify-between space-x-4'>
        <div className='border-b-2 border-transparent hover:border-red-primary cursor-pointer text-sm dark:text-white'>
          <Link href='/'>Захиалга</Link>
        </div>
        <div className='border-b-2 border-transparent hover:border-red-primary cursor-pointer text-sm dark:text-white'>
          <Link href='/about'>Бидний тухай</Link>
        </div>
        <div className='border-b-2 border-transparent hover:border-red-primary cursor-pointer text-sm dark:text-white'>
          <Link href='/account'>Аккаунт</Link>
        </div>
        <div className='border-b-2 border-transparent hover:border-red-primary cursor-pointer text-sm dark:text-white'>
          <Link href='/contact'>Холбогдох</Link>
        </div>
      </div>

      {/* menu for mobile device */}
      <div className='flex-none sm:hidden'>
        <div className='dropdown'>
          <label tabIndex={0} className='m-1 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current dark:text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44'
          >
            <li className='text-sm '>
              <Link href='/'>Book</Link>
            </li>
            <li className='text-sm '>
              <Link href='/rentals'>My Rentals</Link>
            </li>
            <li className='text-sm '>
              <Link href='/'>Account</Link>
            </li>
            <li className='text-sm '>
              <Link href='/rentals'>My Resources</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className='flex items-center justify-end space-x-2'>
        <div className='flex-none sm:hidden'>
          <ul className='menu menu-horizontal px-1'>
            <li tabIndex={0} className=''>
              <a className='dark:text-white'>
                Buttons
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              {/* The button to open modal */}
              <ul className='p-2 bg-base-100 w-full items-center'>
                <DarkModeButton />
                <div className='divider m-0' />
                {!loggedIn ? (
                  <>
                    <label
                      htmlFor='signup'
                      className='text-[10px] p-2 py-0 '
                      onClick={() => setCloseModal(true)}
                    >
                      Бүртгүүлэх
                    </label>
                    <div className='divider m-0' />
                    <label
                      htmlFor='signin'
                      className='text-[10px] p-2 py-0 uppercase'
                      onClick={() => setCloseModal(true)}
                    >
                      Нэвтрэх
                    </label>
                  </>
                ) : (
                  <button
                    className='btn text-white ml-2'
                    onClick={() => {
                      setLoggedIn(false);
                      Cookies.remove('token');
                      Cookies.remove('userId');
                    }}
                  >
                    Гарах
                  </button>
                )}
              </ul>
            </li>
          </ul>
        </div>
        {/* The button to open modal */}
        <div className='hidden sm:flex sm:flex-row sm:items-center'>
          <DarkModeButton />
          {!loggedIn ? (
            <>
              <label
                htmlFor='signup'
                className='btn-ghost btn dark:text-white'
                onClick={() => setCloseModal(true)}
              >
                Бүртгүүлэх
              </label>
              <label
                htmlFor='signin'
                className='main-button'
                onClick={() => setCloseModal(true)}
              >
                Нэвтрэх
              </label>
            </>
          ) : (
            <button
              className='btn text-white ml-2 uppercase'
              onClick={() => {
                setLoggedIn(false);
                Cookies.remove('token');
                Cookies.remove('userId');
              }}
            >
              Гарах
            </button>
          )}
        </div>
      </div>

      {closeModal && <SignUp />}
      {closeModal && <SignIn />}
    </div>
  );
};

export default Header;
