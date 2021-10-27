import Navbar from '../components/Navbar'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(!showModal)
  }

  const Booking = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const name = (e.currentTarget.elements.namedItem(
        'name',
      ) as HTMLInputElement).value
      const carId = (e.currentTarget.elements.namedItem(
        'carId',
      ) as HTMLInputElement).value
      const pin = (e.currentTarget.elements.namedItem(
        'pin',
      ) as HTMLInputElement).value

      if (name === '' || carId === '' || pin === '')
        return alert('Fill the field please')
      console.log(name, carId, pin)
    }
    return (
      <div className="z-10 rounded-lg absolute w-1/3 h-1/5 flex flex-col justify-center items-center opacity-100 bg-gray-900">
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
              onClick={handleClick}
              className="bg-blue-400 px-3 mr-2 rounded-sm hover:bg-blue-700"
            >
              close
            </button>
            <input
              type="submit"
              value="Book"
              // onClick={handleClick}
              className="bg-blue-400 px-3 mr-2 rounded-sm hover:bg-blue-700"
            />
          </div>
        </form>
      </div>
    )
  }

  const Item = ({ css = 'border-bottom' }: { css?: string }) => {
    const [show, setShow] = useState(false)
    const mouseAction = () => {
      setShow(!show)
    }

    return (
      <>
        <div
          onMouseEnter={mouseAction}
          onMouseLeave={mouseAction}
          className={`${css} relative flex justify-center items-center`}
        >
          {show ? (
            <button
              onClick={handleClick}
              className="bg-blue-400 px-3 rounded-sm hover:bg-blue-700"
            >
              Book
            </button>
          ) : (
            <span>free</span>
          )}
        </div>
      </>
    )
  }
  return (
    <div>
      <Navbar />
      <div className="text-center mt-5">
        <Image
          className="rounded-lg"
          width="350"
          height="200"
          src={'/mapa.jpg'}
        />
      </div>
      {showModal && <Booking />}
      <div className="w-9/12 m-auto">
        <div className="grid gap-x-1 grid-cols-10 grid-rows-5">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <span className="col-span-10 flex justify-center items-center bg-gray-600">
            {'<----------------'}
          </span>
          <span className="row-span-2 text-vertical flex justify-center items-center bg-gray-600">
            {'---------------->'}
          </span>
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item css="border-top" />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <span className="col-span-10 flex justify-center items-center bg-gray-600">
            {'---------------->'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
