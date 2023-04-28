import React, { useState } from 'react';

interface Props {
  states: {
    email: string;
    setEmail: () => void;
    lastName: string;
  };
}

const ContactDetails = (props: any) => {
  // const [email, setEmail] = useState<string>('')
  const {
    email,
    setEmail,
    lastName,
    setLastName,
    firstName,
    setFirstName,
    phone,
    setPhone,
  } = props.states;
  return (
    <div className='my-2'>
      <div className='flex flex-col md:px-5 items-center justify-center md:flex-row md:justify-between bg-white rounded border border-gray-300'>
        <div className='card-body w-[600px] p-4'>
          <h4 className='card-title md:text-2xl mt-6'>Contact Details</h4>
          <div className='h-0.5 w-full bg-primary'></div>
          <div className='flex flex-row justify-between'>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text font-semibold'>First Name</span>
              </label>
              <input
                type='text'
                placeholder='First Name'
                className='input w-[350px] bg-white border border-gray-300 rounded focus:outline-primary'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='form-control w-full ml-4'>
              <label className='label'>
                <span className='label-text font-semibold'>Last Name</span>
              </label>
              <input
                type='text'
                placeholder='Last Name'
                className='input w-[350px] bg-white border border-gray-300 rounded focus:outline-primary'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='form-control w-full mt-6'>
            <label className='label'>
              <span className='label-text font-semibold'>Phone Number</span>
            </label>
            <input
              type='phone'
              placeholder='Phone number'
              className='input w-full bg-white border border-gray-300 rounded focus:outline-primary'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className='form-control w-full mt-6'>
            <label className='label'>
              <span className='label-text font-semibold'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Email Address'
              className='input w-full bg-white border border-gray-300 rounded focus:outline-primary'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/*  =============== checkbox ============= */}

          <div className='form-control w-full mt-2'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Would you like to receive SMS notifications from Enterprise
                about this rental?
              </span>
            </label>
            <div className='flex flex-col gap-4 mt-6'>
              <label className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='radio-8'
                  className='radio radio-error'
                  checked
                />
                <span className='label-text text-xs text-gray-700'>
                  Yes, I would like to receive text messages about this rental
                  to the phone number on this reservation
                </span>
              </label>
              <label className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='radio-8'
                  className='radio radio-error'
                />
                <span className='label-text text-xs text-gray-700'>
                  No, By selecting {'Yes'} above, message and data rates may
                  apply. Message frequency varies and depends on the activity of
                  your reservation.
                </span>
              </label>
            </div>
            {/*  ================ sign-up checkbox =============== */}
            <div className='flex mt-10 items-center gap-4'>
              <input type='checkbox' name='checkbox' className='w-5 h-5' />
              <span className='label-text text-xs text-gray-700'>
                Sign up for Car Rental Email Specials
              </span>
            </div>
            <span className='mt-2 ml-9 mb-10 label-text text-xs text-gray-700'>
              By selecting this box, you would like to receive our latest
              benefits and updates from Car Rental and its affiliates. Note that
              your email interactions can be used to perform analytics and
              produce content and ads tailored to your interest. Some of these
              offers will be received in advertising on non-Car Rental sites,
              including on social media and digital advertising platforms.
              Please understand that there is no charge and that you can
              unsubscribe at any time by (i) using the links provided in the
              emails, (ii) managing your preferences in your Car Rental Plus
              profile or (iii) contacting us. Please consult our Privacy Policy
              and our Cookie Policy to find out more.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
