interface createUser {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
  role: Role;
}
interface updateUserInput {
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
}

interface Rental {
  id: string;
  dateRent: string;
  dateReturn: string;
  totalDays: number;
  location: string;
  verified: boolean;
  renter: User;
  userId: string;
  createdAt: Date;
  extras: Extras;
}

type updateRentalType = {
  id: string;
  dateRent: string;
  dateReturn: string;
  location: string;
  verified: boolean;
  renter: User;
  createdAt: Date;
  extras: Extras;
};

interface createCarType {
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

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
  role: Role;
  rentals: Rental[];
};

type Transaction = {
  userId: string;
  verified: boolean;
};

declare enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

type ContextType = {
  token: {
    id: string;
    iat: string;
    exp: string;
  };
};

type Details = {
  make: string;
  mode: string;
  year: string;
  exterior: string;
  interioir: string;
};

type Extras = {
  coverage: boolean;
  child_safety: boolean;
  GPS: boolean;
};
