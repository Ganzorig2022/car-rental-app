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

  type Rental {
    id: String
    dateRent: String
    dateReturn: String
    location: String
    verified: Boolean
    renter: User
    userId: String
    createdAt: Date
  }

  type IsSuccess {
    success: Boolean
  }

  # QUERIES = GET REQUESTS
  type Query {
    getSingleRental(id: String): Rental
  }

  type Query {
    getAllRentals: [Rental]
  }

  # MUTATIONS = POST or PUT or DELETE REQUESTS
  type Mutation {
    createRental(
      userId: String
      dateRent: String
      dateReturn: String
      location: String
      verified: Boolean
    ): Rental
  }

  type Mutation {
    updateRental(
      dateRent: String
      dateReturn: String
      location: String
      verified: Boolean
    ): Rental
  }

  type Mutation {
    deleteRental(id: String): IsSuccess
  }
`;

export default typeDefs;
