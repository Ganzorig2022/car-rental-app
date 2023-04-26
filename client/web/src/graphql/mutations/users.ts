import { gql } from '@apollo/client';

export const CREATE_NEW_USER = gql`
  mutation createUser($email: String, $password: String, $role: String) {
    createUser(email: $email, password: $password, role: $role) {
      user {
        email
        role
        rentals {
          id
          dateRent
          dateReturn
          location
          verified
          createdAt
        }
      }
      token
    }
  }
`;

export const UPDATE_SINGLE_USER = gql`
  mutation UpdateUser(
    $email: String!
    $username: String
    $phone: String
    $birthDate: String
    $address: String
    $gender: String
    $role: String
  ) {
    updateUser(
      email: $email
      username: $username
      phone: $phone
      birthDate: $birthDate
      address: $address
      gender: $gender
      role: $role
    ) {
      email
      username
      phone
      birthDate
      address
      gender
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($email: String!) {
    deleteUser(email: $email) {
      success
    }
  }
`;
export const DELETE_USER_BY_ID = gql`
  mutation DeleteUserById($id: String!) {
    deleteUserById(id: $id) {
      success
    }
  }
`;
