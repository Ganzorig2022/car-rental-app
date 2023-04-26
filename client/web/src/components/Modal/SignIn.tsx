import { LOGIN_USER } from '@/graphql/mutations/users';
import { useMutation, useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { closeModalState } from '../../atoms/closeModal';
import { loggedInState } from '../../atoms/loginAtom';

type Props = {};

const SignIn = (props: Props) => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);
  const router = useRouter();

  //react hook form
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [formData, setFormData] = useState<loginUserFormType>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  // 2) getting user data from MONGODB using Apollo Client
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    variables: { email, password },
  });

  //2)
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (error) return toast.error(error?.message);

    try {
      const data = (await loginUser()).data;

      if (data.loginUser.success) toast.success('Successfully signed.');
      setCloseModal(false);
      setLoggedIn(true);

      Cookies.set('token', data.loginUser.token);
      Cookies.set('userId', data.loginUser.userId);
    } catch (error: any) {
      const errors = new Error(error);
      toast.error(errors.message);
      return;
    }
  };

  const goToPasswordRequestPage = () => {
    router.push('/password/request');
    setCloseModal(false);
  };

  return (
    <>
      <input type='checkbox' id='signin' className='modal-toggle' />
      <div className='modal modal-middle'>
        <div className='modal-box'>
          <h3 className='text-lg font-boldtext-lg md:text-2xl font-bold text-center uppercase'>
            Sign In
          </h3>
          <label
            htmlFor='signin'
            className='btn-sm btn-circle btn absolute right-2 top-2'
            onClick={() => setCloseModal(false)}
          >
            ✕
          </label>

          <form
            className='relative space-y-8 rounded py-2 px-6'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='space-y-4'>
              <label className='inline-block w-full'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  className={`input w-full bg-red-100 ${
                    errors.email && 'border-b-2 border-orange-500 '
                  }`}
                  onChange={onChangeHandler}
                  id='email'
                  required
                />
                {errors.email && (
                  <p className='p-1 text-[13px] font-light  text-orange-500'>
                    Please enter a valid email.
                  </p>
                )}
              </label>
              <label className='inline-block w-full'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  className={`input w-full bg-red-100 ${
                    errors.password && 'border-b-2 border-orange-500'
                  }`}
                  onChange={onChangeHandler}
                  id='password'
                  required
                />
                {errors.password && (
                  <p className='p-1 text-[13px] font-light  text-orange-500'>
                    Your password must contain between 4 and 60 characters.
                  </p>
                )}
              </label>
            </div>
            <button className={`w-full main-button ${loading && 'loading'}`}>
              Login
            </button>
          </form>
          <div className='flex flex-row items-center justify-center mt-5'>
            <p className='text-[gray]'>Forgot password?</p>
            <button
              className='cursor-pointer font-semibold hover:underline ml-1 text-red-400'
              onClick={goToPasswordRequestPage}
              type='submit'
            >
              Click here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
