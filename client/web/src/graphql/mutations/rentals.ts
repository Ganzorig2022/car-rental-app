import { gql } from '@apollo/client';

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
