import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  setCarInputData: Dispatch<SetStateAction<CarType>>;
};

const UploadData = ({ setCarInputData }: Props) => {
  //1) Handling both SELECT and INPUT elements at once
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCarInputData((prev) => ({
      ...prev,
      [e.target.id]:
        e.target.type === 'number' ? Number(e.target.value) : e.target.value,
    }));
  };

  return (
    <>
      <div className='form-control w-full max-w-xs'>
        <label className='label'>
          <span className='label-text dark:text-gray-secondary'>
            Машины талаарх мэдээллээ оруулна уу*
          </span>
        </label>
        <div className='form-control space-y-2'>
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>Type</span>

            <select
              className='select select-bordered w-full select-sm max-w-[250px] font-normal'
              id='type'
              onChange={onChangeHandler}
            >
              <option disabled selected>
                Pick car type
              </option>
              <option>SUV</option>
              <option>Bus</option>
              <option>Standard</option>
              <option>Pickup</option>
              <option>Economy</option>
            </select>
          </label>
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>Model</span>
            <select
              className='select select-bordered w-full select-sm max-w-[240px] font-normal'
              id='model'
              onChange={onChangeHandler}
            >
              <option disabled selected>
                Pick car model
              </option>
              <option>Toyota</option>
              <option>Nissan</option>
              <option>Daewoo</option>
              <option>Ford</option>
            </select>
          </label>
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>Gear</span>
            <select
              className='select select-bordered w-full select-sm max-w-[250px] font-normal'
              id='transmission'
              onChange={onChangeHandler}
            >
              <option disabled selected>
                Pick car gear
              </option>
              <option>auto</option>
              <option>manual</option>
            </select>
          </label>
          {/* Inputs */}
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>Detail</span>
            <input
              type='text'
              placeholder='details'
              className='input input-bordered w-full input-sm'
              required
              id='typeDefinition'
              onChange={onChangeHandler}
            />
          </label>
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>Kml</span>
            <input
              type='number'
              placeholder='km per litre'
              className='input input-bordered w-full input-sm'
              required
              id='kml'
              onChange={onChangeHandler}
            />
          </label>
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>People</span>
            <input
              type='number'
              placeholder='passengers number'
              className='input input-bordered w-full input-sm'
              required
              id='passengers'
              onChange={onChangeHandler}
            />
          </label>
          <label className='input-group'>
            <span className='bg-red-secondary text-sm'>Price</span>
            <input
              type='number'
              placeholder='$ price / 1 day'
              className='input input-bordered w-full input-sm'
              required
              id='price'
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default UploadData;
