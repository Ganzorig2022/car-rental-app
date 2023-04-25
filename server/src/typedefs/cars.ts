import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: String
    email: String
    password: String
    name: String
    phone: String
    age: String
    role: String
    # array of objects
    rentals: [Rental]
    createdAt: Date
  }

  type Car {
    id: String
    image: String
    type: String
    typeDefinition: String
    model: String
    transmission: String
    kml: Int
    passengers: Int
    price: Int
    # doors: String
    # mileage: String
    # details: Details
    user: User
    userId: String
  }

  type Details {
    make: String
    mode: String
    year: String
    exterior: String
    interioir: String
  }

  type IsSuccess {
    success: Boolean
  }

  # QUERIES = GET REQUESTS
  type Query {
    getCarById(id: String): Car
  }

  type Query {
    getCarsByType(type: String): [Car]
  }

  type Query {
    getCarsByPassengers(passengers: Int): [Car]
  }

  type Query {
    getOwnCars(userId: String): [Car]
  }
  type Query {
    getAllCarsWithPagination(skip: Int, pagination: Int): [Car]
  }

  # MUTATIONS = POST or PUT or DELETE REQUESTS
  type Mutation {
    createCar(
      image: String
      type: String
      typeDefinition: String
      model: String
      transmission: String
      kml: Int
      passengers: Int
      price: Int
      # doors: String
      # mileage: String
      # details: Details
      userId: String
    ): Car
  }

  type Mutation {
    updateCar(
      id: String
      image: String
      type: String
      typeDefinition: String
      model: String
      kml: String
      transmission: String
      passengers: Int
      # doors: String
      # mileage: String
      # details: Details
      price: Float
    ): Car
  }

  type Mutation {
    deleteCarById(id: String): IsSuccess
  }
  type Mutation {
    deleteCarsByUserId(userId: String): IsSuccess
  }
`;

export default typeDefs;
