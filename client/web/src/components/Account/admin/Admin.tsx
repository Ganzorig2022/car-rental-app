import { generateReactHelpers } from '@uploadthing/react';
import { useState } from 'react';
import type { OurFileRouter } from '../../../pages/api/server/uploadthing';
import ProfileInputs from './ProfileInputs';
import CarInputs from './CarInputs';
const { useUploadThing } = generateReactHelpers<OurFileRouter>();

type Props = {};

const Upload = (props: Props) => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return (
    <>
      <div className='mx-auto p-5 flex flex-col items-center'>
        <div className='lg:w-1/3 md:w-1/3 w-2/3 mx-auto h-[40px] bg-[#393939]  rounded-xl flex justify-center items-center'>
          <div className='w-5/6 mx-auto h-[35px] flex flex-row items-center px-[3xl] rounded-xl shadow-2xl  transition bg-[#393939] cursor-pointer'>
            <div
              className={
                toggle === 1
                  ? 'tabs active-tabs bg-[#ff2f01] w-1/2 h-full rounded-xl flex items-center justify-center '
                  : 'tabs w-1/2 flex items-center justify-center'
              }
              onClick={() => toggleTab(1)}
            >
              <span className='text-white text-center text-xs lg:text-base md:text-sm'>
                My Profile
              </span>
            </div>
            <div
              className={
                toggle === 2
                  ? 'tabs active-tabs bg-[#ff2f01] w-1/2 h-full rounded-xl flex items-center justify-center'
                  : 'tabs w-1/2 flex items-center justify-center'
              }
              onClick={() => toggleTab(2)}
            >
              <span className='text-white text-xs lg:text-base md:text-sm'>
                My car
              </span>
            </div>
          </div>
        </div>
        <div className='mt-6 p-5'>
          {toggle === 1 && <ProfileInputs />}
          {toggle === 2 && <CarInputs />}
        </div>
      </div>
    </>
  );
};
export default Upload;

//https://www.youtube.com/watch?v=7lhUsK-FxYI&t=259s
