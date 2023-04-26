import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password) {
      success
      userId
      token
    }
  }
`;

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

export const PASSWORD_RESET_REQUEST = gql`
  mutation ResetPasswordRequest($email: String) {
    resetPasswordRequest(email: $email) {
      link
      success
    }
  }
`;

export const PASSWORD_RESET = gql`
  mutation ResetPassword($token: String, $password: String, $userId: String) {
    resetPassword(token: $token, password: $password, userId: $userId) {
      success
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
