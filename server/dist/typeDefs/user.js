import gql from 'graphql-tag';
const typeDefs = gql `
  scalar Date

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
  }

  type Rental {
    id: String
    dateRent: String
    dateReturn: String
    location: String
    verified: Boolean
    renter: User
    rentalId: String
    createdAt: Date
  }

  type IsSuccess {
    success: Boolean
  }

  # QUERIES = GET REQUESTS
  type Query {
    getSingleUser(email: String): User
  }

  type Query {
    getAllUsers: [User]
  }

  # MUTATIONS = POST or PUT or DELETE REQUESTS
  type Mutation {
    createUser(
      id: String
      email: String
      password: String
      name: String
      phone: String
      age: String
      role: String
    ): User
  }

  type Mutation {
    updateUser(
      email: String!
      password: String
      name: String
      phone: String
      age: String
    ): User
  }

  # DELETE REQUESTS
  type Mutation {
    deleteUser(email: String!): IsSuccess
  }

  type Mutation {
    deleteUserById(id: String!): IsSuccess
  }

  enum Role {
    USER
    ADMIN
  }
`;
export default typeDefs;
