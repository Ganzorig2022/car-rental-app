import { gql } from '@apollo/client';

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String) {
    getUserByEmail(email: $email) {
      age
      cars {
        id
        image
        kml
        model
        passengers
        price
        typeDefinition
        type
        transmission
      }
      createdAt
      email
      id
      name
      phone
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserByIdId($id: String) {
    getUserById(id: $id) {
      age
      cars {
        image
        kml
        model
        passengers
        price
        transmission
        type
        typeDefinition
        id
      }
      createdAt
      email
      name
      id
      phone
      rentals {
        createdAt
        dateReturn
        dateRent
        id
        location
        verified
      }
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
