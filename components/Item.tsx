import { useQuery, useSubscription } from '@apollo/client'
import { ItemsType } from '../interface/item'

import BOOKING from '../graphql/subscription/Booking'
import ITEM from '../graphql/query/item'

import Free from './Free'
import Busy from './Busy'

const Item = ({ css = 'border-bottom', parkId }: ItemsType) => {
  const { data: qData, error: qError } = useQuery(ITEM, {
    variables: { parkId },
  })
  const { data, error } = useSubscription(BOOKING, { variables: { parkId } })

  if (error || qError) return <>{alert('Something went wrong')}</>

  if (data?.booking.mutation === 'booked' || qData?.item.booking === true) {
    return <Busy css={css} parkId={parkId} />
  } else {
    return <Free css={css} parkId={parkId} />
  }
}

export default Item
