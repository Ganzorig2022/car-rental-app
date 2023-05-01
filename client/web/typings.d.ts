type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
  role: Role;
};

type Inputs = {
  email: string;
  password: string;
};
type createUserFormType = {
  email: string;
  password: string;
  role: string;
};
type loginUserFormType = {
  email: string;
  password: string;
};

interface CarsType {
  id: string;
  image: string;
  type: string;
  typeDefinition: string;
  model: string;
  transmission: string;
  kml: number;
  passengers: number;
  price: number;
  user: User;
  userId: string;
}
interface CarType {
  image: string;
  type: string;
  typeDefinition: string;
  model: string;
  transmission: string;
  kml: number;
  passengers: number;
  price: number;
}

type RentalType = {
  userId: string;
  dateRent: string;
  dateReturn: string;
  totalDays: number;
  location: string;
  verified: boolean;
  extras: {
    coverage: boolean;
    child_safety: boolean;
    GPS: boolean;
  };
  car: CarType;
};

interface UserData {
  email: string;
  name: string;
  phone: string;
  age: string;
  role: string;
  rentals: RentalType;
  cars: CarsType[];
}

interface CarsType {
  image: string;
  type: string;
  typeDefinition: string;
  model: string;
  transmission: string;
  kml: number;
  passengers: number;
  price: number;
}

interface SearchResultsType {
  name: string;
  mapbox_id: string;
  place_formatted: string;
}
