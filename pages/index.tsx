import Navbar from '../components/Navbar'
import Image from 'next/image'
import Item from '../components/Item'
import React from 'react'
import Modal from '../components/Modal'

const App = () => {
  return (
    <div>
      <Modal />
      <Navbar />
      <div className="text-center mt-5">
        <Image
          className="rounded-lg"
          width="350"
          height="200"
          src={'/mapa.jpg'}
        />
      </div>
      <div className="w-11/12 m-auto">
        <div className="grid gap-x-1 grid-cols-10 grid-rows-5">
          <Item parkId="0" />
          <Item parkId="1" />
          <Item parkId="2" />
          <Item parkId="3" />
          <Item parkId="4" />
          <Item parkId="5" />
          <Item parkId="6" />
          <Item parkId="7" />
          <Item parkId="8" />
          <Item parkId="9" />
          <span className="col-span-10 flex justify-center items-center bg-gray-600">
            {'<----------------'}
          </span>
          <span className="row-span-2 text-vertical flex justify-center items-center bg-gray-600">
            {'---------------->'}
          </span>
          <Item parkId="10" css="border-top" />
          <Item parkId="11" css="border-top" />
          <Item parkId="12" css="border-top" />
          <Item parkId="13" css="border-top" />
          <Item parkId="14" css="border-top" />
          <Item parkId="15" css="border-top" />
          <Item parkId="16" css="border-top" />
          <Item parkId="17" css="border-top" />
          <Item parkId="18" css="border-top" />
          <Item parkId="19" />
          <Item parkId="20" />
          <Item parkId="21" />
          <Item parkId="22" />
          <Item parkId="23" />
          <Item parkId="24" />
          <Item parkId="25" />
          <Item parkId="26" />
          <Item parkId="27" />
          <span className="col-span-10 flex justify-center items-center bg-gray-600">
            {'---------------->'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
