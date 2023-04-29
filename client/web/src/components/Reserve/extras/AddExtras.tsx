import React, { useState } from 'react';
import CardBox from './CardBox';

type Props = {};

export const AddExtras = (props: Props) => {
  const [addExtrasArray, setAddExtrasArray] = useState([
    {
      id: '1',
      image: 'https://cdn-icons-png.flaticon.com/512/4544/4544523.png',
      typeDefinition: 'Coverage',
      text: 'Insurance and Other Coverages',
      price: '$ 7.00 / day',
    },
    {
      id: '2',
      image: 'https://cdn-icons-png.flaticon.com/512/5557/5557145.png',
      typeDefinition: 'Child Safety Seat',
      text: 'Travel with child safety and securely',
      price: '$ 5.00 / day',
    },
    {
      id: '3',
      image: 'https://cdn-icons-png.flaticon.com/512/5248/5248673.png',
      typeDefinition: 'GPS',
      text: 'Find your destination easier with this GPS device',
      price: '$ 7.00 / day',
    },
  ]);

  return (
    <div>
      {addExtrasArray.map((extras) => (
        <CardBox key={extras.id} {...extras} />
      ))}
    </div>
  );
};

export default AddExtras;
