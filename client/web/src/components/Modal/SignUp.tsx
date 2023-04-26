import { CREATE_NEW_USER } from '@/graphql/mutations/users';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { closeModalState } from '../atoms/closeModal';

type Props = {};

const SignUp = (props: Props) => {
  const [closeModal, setCloseModal] = useRecoilState(closeModalState);
  const router = useRouter();
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

  const { email, password, role } = formData;

  //Apollo Client request for Apollo Server/Prisma/MongoDB
  const [createNewUser, { data, loading, error }] = useMutation(
    CREATE_NEW_USER,
    {
      variables: {
        email,
        password,
        role,
      },
    }
  );

  // 2) Create new user
  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    const { email, password } = inputs;

    setFormData((prev) => ({
      ...prev,
      email,
      password,
      role: selectValue,
    }));

    try {
      await createNewUser();
    } catch (error) {
      console.log('ERROR', error);
    }

    if (error) {
      toast.error(`Already signed with this email: ${email}`);
      return;
    }

    // router.push('/reserve/cars');

    setCloseModal(true);

    toast.success('Successfully signed.');
  };

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
                  className={`input w-full bg-red-100  ${
                    errors.password && 'border-b-2 border-orange-500'
                  }`}
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
                    className='select w-full'
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
            {/* <div className='flex flex-row items-center justify-center mt-5'>
              <p className='text-[gray]'>New here?</p>
              <button
                className='cursor-pointer font-semibold hover:underline ml-1 text-red-400'
                onClick={() => toggleView('signup')}
                type='submit'
              >
                Sign Up now
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
