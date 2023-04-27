import { gql } from '@apollo/client';

export const GET_CARS_BY_TYPE = gql`
  query GetCarsByType($type: String) {
    getCarsByType(type: $type) {
      id
      image
      kml
      model
      passengers
      price
      transmission
      type
      typeDefinition
      userId
    }
  }
`;
export const GET_CARS_BY_PASSENGERS = gql`
  query GetCarsByPassengers($passengers: Int) {
    getCarsByPassengers(passengers: $passengers) {
      id
      image
      kml
      model
      passengers
      price
      transmission
      type
      typeDefinition
      userId
    }
  }
`;

export const GET_ALL_CARS_WITH_PAGINATION = gql`
  query GetAllCarsWithPagination($skip: Int, $take: Int) {
    getAllCarsWithPagination(skip: $skip, take: $take) {
      id
      image
      kml
      model
      passengers
      price
      transmission
      type
      typeDefinition
      userId
    }
  }
`;

// export const GET_CARS_BY_TYPE = gql`
//   query GetCarsByType($type: String) {
//     getCarsByType(type: $type) {
//       id
//       image
//       kml
//       model
//       passengers
//       price
//       transmission
//       type
//       typeDefinition
//       userId
//     }
//   }
// `;
