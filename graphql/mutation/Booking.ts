import gql from 'graphql-tag'

const BOOKING = gql`
  mutation Booking(
    $name: String!
    $carId: String!
    $parkId: String!
    $pin: String!
  ) {
    booking(name: $name, carId: $carId, parkId: $parkId, pin: $pin)
  }
`
export default BOOKING
