import gql from 'graphql-tag'

const UNBOOK = gql`
  mutation UnBook($carId: String!, $parkId: String!, $pin: String!) {
    unBook(carId: $carId, parkId: $parkId, pin: $pin) {
      name
      carId
      startedAt
      minutes
      toPay
      parkId
      pin
    }
  }
`

export default UNBOOK
