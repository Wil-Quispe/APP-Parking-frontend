import gql from 'graphql-tag'

const ITEM = gql`
  query Item($parkId: String!) {
    item(parkId: $parkId) {
      _id
      booking
      parkId
    }
  }
`

export default ITEM
