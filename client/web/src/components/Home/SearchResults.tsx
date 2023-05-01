import { useRental } from '@/providers/rentalProvider';
import { MapIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  places: SearchResultsType[];
  setSearchInput: Dispatch<SetStateAction<string>>;
  setPlaceHolder: Dispatch<SetStateAction<string>>;
};

const SearchResults = ({ places, setPlaceHolder, setSearchInput }: Props) => {
  const { setRentals } = useRental();

  const onSubmitHandler = (location: string) => {
    setRentals((prev) => ({
      ...prev,
      location,
    }));
    setPlaceHolder(location);
    setSearchInput('');
  };

  return (
    <div>
      {places.map((place, i) => (
        <div
          key={place.mapbox_id}
          className='hover:bg-gray-200 cursor-pointer'
          onClick={() => onSubmitHandler(place.name)}
        >
          <div className='flex items-center justify-start '>
            <MapIcon className='h-6 md:h-8 rounded-full p-1 cursor-pointer dark:text-gray-secondary' />
            <p className='text-xs font-semibold dark:text-gray-secondary'>
              {place.name}
            </p>
          </div>
          <p className='text-[10px] pl-1 dark:text-gray-secondary'>
            {place.place_formatted}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
