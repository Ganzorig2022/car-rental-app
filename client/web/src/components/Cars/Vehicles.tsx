import React, { useState } from 'react';
import Card from './Card';

type Props = {};

const Vehicles = (props: Props) => {
  const [vehicleArray, setVehicleArray] = useState([
    {
      id: '1',
      image: 'https://www.pngmart.com/files/22/Lexus-LX-570-PNG-Pic.png',
      type: 'Standard',
      typeDefinition: 'Full Size Luxury Sedan',
      model: 'Lexus 570, Audi Q8',
      kml: '15',
      transmission: 'auto',
      passengers: '5',
      doors: '4',
      price: 124,
      details: {
        make: 'Lexus',
        model: 'LX',
        year: '2021',
        exterior: 'Atomic Silver',
        interior: 'White',
      },
      mileage: '26900km',
    },
    {
      id: '2',
      image: 'https://www.pngmart.com/files/22/Lexus-LX-570-PNG-Pic.png',
      type: 'Standard',
      typeDefinition: 'Full Size Luxury Sedan',
      model: 'Lexus 570, Audi Q8',
      kml: '15',
      transmission: 'auto',
      passengers: '5',
      doors: '4',
      price: 124,
      details: {
        make: 'Lexus',
        model: 'LX',
        year: '2021',
        exterior: 'Atomic Silver',
        interior: 'White',
      },
      mileage: '26900km',
    },
    {
      id: '3',
      image: 'https://www.pngmart.com/files/22/Lexus-LX-570-PNG-Pic.png',
      type: 'Standard',
      typeDefinition: 'Full Size Luxury Sedan',
      model: 'Lexus 570, Audi Q8',
      kml: '15',
      transmission: 'auto',
      passengers: '5',
      doors: '4',
      price: 124,
      details: {
        make: 'Lexus',
        model: 'LX',
        year: '2021',
        exterior: 'Atomic Silver',
        interior: 'White',
      },
      mileage: '26900km',
    },
  ]);

  return (
    <div>
      {vehicleArray.map((vehicle) => (
        <Card key={vehicle.id} {...vehicle} />
      ))}
    </div>
  );
};

export default Vehicles;
