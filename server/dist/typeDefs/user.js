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

  type loginUserResponse {
    success: Boolean
    token: String
    userId: String
  }

  type CreateUserResponse {
    user: User
    token: String
  }

  type IsSuccess {
    success: Boolean
  }

  # QUERIES = GET REQUESTS
  type Query {
    loginUser(email: String, password: String): loginUserResponse
  }
  type Query {
    getUserByEmail(email: String): User
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
    ): CreateUserResponse
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
    deleteUserByEmail(email: String!): IsSuccess
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
