import { refreshUserData } from '@/atoms/userSaved';
import Spinner from '@/components/UI/Spinner';
import useGraphql from '@/hooks/useGraphql';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

type Props = { userData: UserData | undefined };

const MyProfile = ({ userData }: Props) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(1);
  const [userInputs, setUserInputs] = useState({
    name: userData?.name ? userData?.name : '',
    email: userData?.email ? userData?.email : '',
    phone: userData?.phone ? userData?.phone : '',
  });
  const setUserDataRefresh = useSetRecoilState(refreshUserData);

  const { updateUserByID, updateUserLoading } = useGraphql();

  // 1) Button toggler
  const toggleButton = (index: number) => {
    setToggle(index);
  };

  // 2) Handling both SELECT and INPUT elements at once
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  // 3) Save user data to mongoDb
  const onSubmitHandler = async () => {
    const userId = Cookies.get('userId');
    let { name, email, phone } = userInputs;

    //3.1) Validations
    if (
      email === userData?.email &&
      name === userData?.name &&
      phone === userData?.phone
    )
      return toast.error('Таны мэдээлэл өөрчлөгдөөгүй байна!');

    if (email === '') return toast.error('Таны имэйлийн талбар хоосон байна!');

    // 3.2) Update user data to mongoDb
    const responseUser = await updateUserByID(userId!, name, phone, email);

    if (!responseUser) return toast.error('User not found');

    // 3.3) Trigger for refresh user data
    setUserDataRefresh(true);

    toast.success('Таны мэдээлэл амжилттай хадгалагдлаа.');
  };

  if (updateUserLoading) return <Spinner />;

  return (
    <>
      <div className=''>
        <div className=' flex justify-between'>
          <h2 className='tex-xl text-gray-800 lg:text-2xl md:text-xl text-base font-semibold dark:text-gray-secondary'>
            Contact Details
          </h2>
          {toggle === 1 ? (
            <button
              className='btn btn-sm bg-white border-red-primary text-red-primary !max-h-4 hover:bg-red-primary hover:text-white normal-case font-normal rounded-full dark:bg-transparent dark:hover:border-gray-secondary'
              onClick={() => toggleButton(2)}
            >
              Modify
            </button>
          ) : (
            <div className='flex flex-row space-x-2'>
              <button
                className='btn btn-sm bg-white border-red-primary text-red-primary !max-h-4 hover:bg-red-primary hover:text-white normal-case font-normal rounded-full dark:bg-transparent dark:hover:border-gray-secondary'
                onClick={() => {
                  toggleButton(1);
                  onSubmitHandler();
                }}
              >
                Save
              </button>
              <button
                className='btn btn-sm bg-white border-red-primary text-red-primary !max-h-4 hover:bg-red-primary hover:text-white normal-case font-normal rounded-full dark:bg-transparent dark:hover:border-gray-secondary'
                onClick={() => toggleButton(1)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className='border-b-4 border-[#848484] my-4 ' />
        <div className='table dark:text-gray-secondary w-full'>
          <div className='flex flex-row w-full'>
            <div className='text-xs font-semibold my-auto'>Name:</div>
            <div className='ml-4 w-2/4'>
              <input
                className='input input-bordered w-full input-sm border border-gray-400 bg-red-100 disabled:bg-gray-primary disabled:border-none dark:disabled:bg-transparent dark:bg-transparent dark:border-gray-secondary'
                placeholder={userData?.name ? userData?.name : 'no name'}
                value={userInputs.name}
                disabled={toggle === 1 ? true : false}
                id='name'
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className='border-b border-[#848484] my-3 w-full'> </div>
          <div className='flex flex-row  w-full '>
            <div className='text-xs font-semibold my-auto'>Email Address:</div>
            <div className='ml-4 w-2/4'>
              <input
                className='input input-bordered w-full input-sm border border-gray-400 bg-red-100 disabled:bg-gray-primary disabled:border-none dark:disabled:bg-transparent dark:bg-transparent dark:border-gray-secondary'
                placeholder={userData?.email}
                value={userInputs.email}
                disabled={toggle === 1 ? true : false}
                id='email'
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className='border-b border-[#848484] my-3 w-full'> </div>

          <div className='flex flex-row  w-full '>
            <div className='text-xs font-semibold my-auto'>Phone Number:</div>
            <div className='ml-4 w-2/4'>
              <input
                className='input input-bordered w-full input-sm border border-gray-400 bg-red-100 disabled:bg-gray-primary disabled:border-none dark:disabled:bg-transparent dark:bg-transparent dark:border-gray-secondary'
                placeholder={userData?.phone}
                value={userInputs?.phone}
                disabled={toggle === 1 ? true : false}
                id='phone'
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className='border-b border-[#848484] my-3 w-full'> </div>
        </div>
        <div className=' flex justify-between my-8'>
          <h2 className='tex-xl text-gray-800 lg:text-2xl md:text-xl text-base font-semibold dark:text-gray-secondary'>
            Saved Payment Methods
          </h2>
          <button className='btn btn-sm bg-white border-red-primary font-normal text-red-primary rounded-full !max-h-4 hover:bg-red-primary hover:text-white mt-2 md:mt-0 md:ml-2 gap-2 dark:bg-transparent dark:hover:border-gray-secondary normal-case'>
            + Add Payment Methods
          </button>
        </div>
        <div className='border-b-4 border-[#848484] my-4 '> </div>
        <div className=' flex justify-between my-8'>
          <h2 className='tex-xl text-gray-800 lg:text-2xl md:text-xl text-base  font-semibold dark:text-gray-secondary'>
            Password
          </h2>
          <button
            className='btn btn-sm bg-white border-red-primary font-normal text-red-primary rounded-full !max-h-4 hover:bg-red-primary hover:text-white mt-2 md:mt-0 md:ml-2 gap-2 dark:bg-transparent dark:hover:border-gray-secondary normal-case'
            onClick={() => router.push('/password/request')}
          >
            Modify
          </button>
        </div>
        <div className='border-b-4 border-[#848484] my-4 '> </div>
        <div className='text-sm dark:text-gray-secondary'> ******** </div>
        <div className='border border-[#848484] mt-2'> </div>
      </div>
    </>
  );
};

export default MyProfile;
