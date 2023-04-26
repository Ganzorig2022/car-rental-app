interface ProviderType {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

interface Author {
  email: string;
  emailVerified: string | null;
  image: string;
  name: string;
  username: string;
  _id: string;
}
interface User {
  email: string;
  emailVerified: string | null;
  image: string;
  name: string;
  username: string;
  _id: string;
  cover: string;
  bio: string;
}

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

interface Vehicles {
  id: string;
  image: string;
  type: string;
  typeDefinition: string;
  model: string;
  kml: string;
  transmission: string;
  passengers: string;
  doors: string;
  price: number;
  mileage: string;
  details: {
    make: string;
    model: string;
    year: string;
    exterior: string;
    interior: string;
  };
}
