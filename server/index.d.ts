interface createUser {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
  role: Role;
}

type Rental = {
  id: string;
  dateRent: string;
  dateReturn: string;
  location: string;
  verified: boolean;
  renter: User;
  userId: string;
  createdAt: Date;
};

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
