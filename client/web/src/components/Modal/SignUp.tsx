import toast from 'react-hot-toast';
import Spinner from '../UI/Spinner';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import useGraphql from '@/hooks/useGraphql';
import { loggedInState } from '../../atoms/loginAtom';
import { closeModalState } from '../../atoms/closeModal';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {};

const SignUp = (props: Props) => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);
  const [loggedIn, setLoggedIn] = useRecoilState(loggedInState);

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [selectValue, setSelectValue] = useState('user');
  const [formData, setFormData] = useState<createUserFormType>({
    email: '',
    password: '',
    role: '',
  });

  const { signUp, createUserLoading: loading } = useGraphql();

  const { email, password, role } = formData;

  //2) Setting email and password
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      role: selectValue,
    }));
  };

  // 3) Create new user
  const onSubmit: SubmitHandler<Inputs> = async () => {
    const response = await signUp(email, password, role);

    if (response) {
      setLoggedIn(true);
      toast.success('Successfully signed.');
    }
    setCloseModal(false);
  };

  if (loading) return <Spinner />;

  return (
    <>
      <input type='checkbox' id='signup' className='modal-toggle' />
      <div className='modal modal-middle'>
        <div className='modal-box'>
          <h3 className='text-lg md:text-2xl font-bold text-center uppercase'>
            Sign Up
          </h3>
          <label
            htmlFor='signup'
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
                  // {...register('email', { required: true })}
                  id='email'
                  required
                  onChange={onChangeHandler}
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
                  // {...register('password', { required: true })}
                  //   placeholder='Password'
                  id='password'
                  required
                  className={`input w-full bg-red-100  ${
                    errors.password && 'border-b-2 border-orange-500'
                  }`}
                  onChange={onChangeHandler}
                />
                {errors.password && (
                  <p className='p-1 text-[13px] font-light  text-orange-500'>
                    Your password must contain between 4 and 60 characters.
                  </p>
                )}
              </label>
              <label className='inline-block w-full'>
                <label className='label'>
                  <span className='label-text'>Owner or Renter?</span>
                </label>
                <div className='w-full overflow-hidden'>
                  <select
                    className='select w-full bg-red-100'
                    defaultValue=''
                    onChange={(e) => setSelectValue(e.target.value)}
                  >
                    <option selected value='user'>
                      Renter
                    </option>
                    <option value='admin'>Owner</option>
                  </select>
                </div>
              </label>
            </div>
            <button className={`w-full main-button ${loading && 'loading'}`}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
