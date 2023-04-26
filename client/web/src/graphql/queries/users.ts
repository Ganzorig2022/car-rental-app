import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      email
      username
      phone
      birthDate
      address
      gender
      role
    }
  }
`;
