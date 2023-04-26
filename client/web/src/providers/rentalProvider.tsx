import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface RentalContextType {
  rentals: RentalType; // from typings.d.ts
  setRentals: Dispatch<SetStateAction<RentalType>>;
}

const RentalContext = createContext<RentalContextType>({} as RentalContextType);

interface RentalProviderProps {
  children: ReactNode;
}

export const RentalProvider = ({ children }: RentalProviderProps) => {
  const [rentals, setRentals] = useState({
    userId: '',
    dateRent: '',
    dateReturn: '',
    totalDays: 0,
    location: '',
    verified: false,
    extras: {
      coverage: false,
      child_safety: false,
      GPS: false,
    },
  });

  return (
    <RentalContext.Provider value={{ rentals, setRentals }}>
      {children}
    </RentalContext.Provider>
  );
};

export const useRental = () => useContext(RentalContext);
