import { FinalType } from '../interface/Final'

const Final = ({
  name,
  carId,
  startedAt,
  minutes,
  toPay,
  parkId,
  pin,
}: FinalType) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  } as const

  const date = new Date(Number(startedAt)).toLocaleDateString('en', options)
  const pay = Math.round(Number(toPay))

  return (
    <div className="bg-gray-800 rounded-lg flex flex-col w-full mb-3 py-3">
      <div className="text-center">
        <span className="text-blue-400">Name</span>
        <p>{name}</p>
      </div>

      <div className="text-center">
        <span className="text-blue-400">CarId</span>
        <p>{carId}</p>
      </div>
      <div className="text-center">
        <span className="text-blue-400">StartedAt</span>
        <p>{date}</p>
      </div>
      <div className="text-center">
        <span className="text-blue-400">Minutes</span>
        <p>{minutes}</p>
      </div>
      <div className="text-center">
        <span className="text-blue-400">Topay</span>
        <p>{pay} $</p>
      </div>
      <div className="text-center">
        <span className="text-blue-400">ParkId</span>
        <p>{parkId}</p>
      </div>
      <div className="text-center">
        <span className="text-blue-400">PIN</span>
        <p>{pin}</p>
      </div>
    </div>
  )
}

export default Final
