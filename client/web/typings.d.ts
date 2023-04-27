type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
  role: Role;
};

interface Posts {
  author: Author;
  commentsCount: number;
  createdAt: string;
  likesCount: number;
  parent: string;
  text: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

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
};
