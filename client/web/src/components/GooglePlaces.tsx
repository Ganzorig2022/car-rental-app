import React, { useState } from 'react';
import { useLoadScript } from '@react-google-maps/api/';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import Combobox from 'react-widgets/Combobox';
import 'react-widgets/styles.css';

type Props = {};

const GooglePlaces = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
  });
  const [selected, setSelected] = useState(null);

  return (
    <div className='places-container'>
      <PlacesAutocomplete setSelected={setSelected} />
    </div>
  );
};

export default GooglePlaces;

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  console.log(data);

  const handleSelect = async (e) => {
    // console.log('first', e.target.value);
    setValue(e.target.value);
    // console.log('address', address);
    // setValue(address, false);
    // clearSuggestions();

    // const results = await getGeocode({ address });
    // const { lat, lng } = await getLatLng(results[0]);
    // setSelected({ lat, lng });
  };

  return (
    // <Combobox
    //   data={data}
    //   value={value}
    //   onSelect={handleSelect}
    //   onChange={(value) => setValue(value)}
    // />
    <input
      value={value}
      onChange={handleSelect}
      //   disabled={!ready}
      placeholder='Where are you going?'
    />
  );
};
