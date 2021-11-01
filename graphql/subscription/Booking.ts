import { gql } from '@apollo/client'

const BOOKING = gql`
  subscription Booking($parkId: String!) {
    booking(parkId: $parkId) {
      mutation
      data {
        name
        carId
        startedAt
        minutes
        toPay
        parkId
        pin
      }
    }
  }
`

export default BOOKING
