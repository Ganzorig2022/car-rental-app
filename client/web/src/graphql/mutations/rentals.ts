import { gql } from '@apollo/client';

export const CREATE_RENTAL = gql`
  mutation CreateRental(
    $dateRent: String
    $dateReturn: String
    $location: String
    $verified: Boolean
    $userId: String
    $extras: ExtrasInput
    $totalDays: Int
  ) {
    createRental(
      dateRent: $dateRent
      dateReturn: $dateReturn
      location: $location
      verified: $verified
      userId: $userId
      extras: $extras
      totalDays: $totalDays
    ) {
      id
      userId
      dateRent
      dateReturn
      verified
      location
      createdAt
      user {
        id
        email
        name
        phone
      }
      extras {
        GPS
        child_safety
        coverage
      }
      totalDays
    }
  }
`;
