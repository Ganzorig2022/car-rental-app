import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
  query LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      success
      userId
      token
    }
  }
  query GetSingleUser($email: String) {
    getSingleUser(email: $email) {
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
