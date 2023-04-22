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
  }

  type Rental {
    id: String
    date_rent: DateTime
    date_return: DateTime
    destination: String
    verified: Boolean
    renter: User
    rentalId: String
    createdAt: DateTime
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
      # array of objects
      rentals: [Rental]
      role: String
    ): User
  }

  type Mutation {
    updateUser(
      email: String!
      username: String
      phone: String
      birthDate: String
      address: String
      gender: String
      role: String
    ): User
  }

  # DELETE REQUESTS
  type Mutation {
    deleteUser(email: String!): IsSuccess
  }

  type Mutation {
    deleteUserById(id: String!): IsSuccess
  }
`;

export default typeDefs;
