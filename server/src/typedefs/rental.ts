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

  type RentalType {
    id: String
    dateRent: String
    dateReturn: String
    totalDays: Int
    location: String
    verified: Boolean
    renter: User
    userId: String
    createdAt: Date
    extras: Extras
  }

  type Extras {
    coverage: Boolean
    child_safety: Boolean
    GPS: Boolean
  }

  # https://stackoverflow.com/questions/45806368/graphql-error-field-type-must-be-input-type-but-got

  # In GraphQL, an input cannot be used as a type and a type cannot be used as an input.
  # Must use "input" type for graphql function parameters input

  input ExtrasInput {
    coverage: Boolean
    child_safety: Boolean
    GPS: Boolean
  }

  type IsSuccess {
    success: Boolean
  }

  # QUERIES = GET REQUESTS
  type Query {
    getRentalById(id: String): RentalType
  }
  type Query {
    getOwnRentals(userId: String): [RentalType]
  }

  type Query {
    getAllRentals: [RentalType]
  }

  # MUTATIONS = POST or PUT or DELETE REQUESTS
  type Mutation {
    createRental(
      userId: String
      dateRent: String
      dateReturn: String
      totalDays: Int
      location: String
      verified: Boolean
      extras: ExtrasInput
    ): RentalType
  }

  type Mutation {
    updateRentalById(
      id: String
      dateRent: String
      dateReturn: String
      totalDays: Int
      location: String
      verified: Boolean
      extras: ExtrasInput
    ): RentalType
  }

  type Mutation {
    deleteRentalById(id: String): IsSuccess
  }
`;

export default typeDefs;
