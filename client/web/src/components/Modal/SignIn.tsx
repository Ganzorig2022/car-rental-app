import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { closeModalState } from '../atoms/closeModal';

type Props = {};

const SignIn = (props: Props) => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);

  const loading = false;
  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    const { email, password } = inputs;

    // // 1) MIDDLEWARE for checking if there is user or not...
    // const response = await checkUser(email);

    // if (response?.data.message === 'user not found') {
    //   toast.error('You are not signed up. Please sign up instead!');
    //   return;
    // }

    // // 2) If there is user, then sign in
    // await signIn(email, password);

    // if (error === 'Network Error') {
    //   toast.error('Network error. Something wrong with backend service.');
    //   return;
    // }

    toast.success('Successfully signed.');
  };

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
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
                  //   placeholder='Email'
                  className={`input w-full bg-red-100 ${
                    errors.email && 'border-b-2 border-orange-500 '
                  }`}
                  {...register('email', { required: true })}
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
                  {...register('password', { required: true })}
                  //   placeholder='Password'
                  className={`input w-full bg-red-100 ${
                    errors.password && 'border-b-2 border-orange-500'
                  }`}
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
        </div>
      </div>
    </>
  );
};

export default SignIn;
