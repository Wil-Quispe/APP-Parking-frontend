import { useMutation } from '@apollo/client'
import { FormEvent, useContext } from 'react'
import BOOKING from '../graphql/mutation/Booking'
import { ModalContext } from '../context/modal/modalContext'

const Booking = () => {
  const [booking] = useMutation(BOOKING)
  const { state, dispatch } = useContext(ModalContext)

  const { parkId } = state

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = (name: string) => {
      const elems = e.currentTarget.elements
      const value = (elems.namedItem(name) as HTMLInputElement).value
      return value
    }

    const name = elements('name')
    const carId = elements('carId')
    const pin = elements('pin')

    const condition = name === '' || carId === '' || pin === ''

    if (condition) {
      return alert('Fill the field please')
    }

    try {
      await booking({
        variables: {
          name,
          carId,
          pin,
          parkId,
        },
      })
      dispatch({ type: 'closeModal', payload: { show: false } })
      alert('allright')
    } catch (err) {
      console.log(err)
    }
  }

  const cancelBtn = () => {
    dispatch({ type: 'closeModal', payload: { show: false } })
  }

  return (
    <div className="rounded-lg flex py-5 justify-center items-center bg-blue-900 w-1/3">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          name="name"
          className="mb-2 bg-gray-700 rounded-lg pl-2"
          placeholder="Name"
        />
        <input
          name="carId"
          className="mb-2 bg-gray-700 rounded-lg pl-2"
          placeholder="Car ID"
        />
        <input
          name="pin"
          className="mb-2 bg-gray-700 rounded-lg pl-2"
          placeholder="PIN"
        />
        <div className="flex justify-center">
          <button
            onClick={cancelBtn}
            className="bg-blue-400 px-3 mr-2 rounded-sm hover:bg-blue-700"
          >
            close
          </button>
          <input
            type="submit"
            value="Book"
            className="bg-blue-400 px-3 mr-2 rounded-sm hover:bg-blue-700"
          />
        </div>
      </form>
    </div>
  )
}

export default Booking
