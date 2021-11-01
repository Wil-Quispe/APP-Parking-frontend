import { useMutation } from '@apollo/client'
import React, { FormEvent, useContext, useState } from 'react'
import { ModalContext } from '../context/modal/modalContext'
import UNBOOK from '../graphql/mutation/UnBook'
import Final from './Final'

const UnBook = () => {
  const [unBook] = useMutation(UNBOOK)
  const { state, dispatch } = useContext(ModalContext)
  const [final, setFinal] = useState<any>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = (name: string) => {
      const elems = e.currentTarget.elements
      const value = (elems.namedItem(name) as HTMLInputElement).value
      return value
    }

    const carId = elements('carId')
    const pin = elements('pin')

    const condition = carId === '' || pin === ''

    if (condition) {
      return alert('Fill the field please')
    }

    try {
      const result = await unBook({
        variables: {
          carId,
          pin,
          parkId: state.parkId,
        },
      })
      // dispatch({ type: 'closeModal', payload: { show: false } })

      if (!result?.data.unBook.name) {
        return alert('Ocurrio un Error')
      }
      setFinal(result.data.unBook)
      alert('allright')
    } catch (err) {
      console.log(err)
    }
  }

  const cancelBtn = () => {
    dispatch({ type: 'closeModal', payload: { show: false } })
  }

  return (
    <div className="w-1/3">
      {final ? (
        <div className="flex flex-col items-center">
          <Final
            name={final.name}
            carId={final.carId}
            startedAt={final.startedAt}
            minutes={final.minutes}
            toPay={final.toPay}
            parkId={final.parkId}
            pin={final.pin}
          />
          <button
            onClick={cancelBtn}
            className="bg-blue-600 px-3 mr-2 rounded-sm hover:bg-blue-900"
          >
            close
          </button>
        </div>
      ) : (
        <div className="rounded-lg flex py-5 justify-center items-center bg-red-400 mb-3">
          <form className="flex flex-col" onSubmit={handleSubmit}>
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
                className="bg-red-600 px-3 mr-2 rounded-sm hover:bg-red-700"
              >
                close
              </button>
              <input
                type="submit"
                value="Unbook"
                className="bg-red-600 px-3 mr-2 rounded-sm hover:bg-red-700"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default UnBook
