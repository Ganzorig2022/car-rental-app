import { gql } from '@apollo/client';

export const GET_ALL_RENTALS = gql`
  query GetAllRentals {
    getAllRentals {
      createdAt
      dateRent
      dateReturn
      extras {
        GPS
        child_safety
        coverage
      }
      id
      location
      renter {
        age
        createdAt
        email
        name
        phone
      }
      totalDays
      userId
      verified
    }
  }
`;
