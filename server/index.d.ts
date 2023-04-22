interface userEmailInput {
  email: string;
}

interface createUserType {
  id: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  age: string;
  role: string;
  rentals: [Rental];
}
