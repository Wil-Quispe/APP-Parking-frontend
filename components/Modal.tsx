import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { ModalContext } from '../context/modal/modalContext'
import Booking from './Booking'
import UnBook from './UnBook'
const Modal = () => {
  const { state } = useContext(ModalContext)
  let container
  if (typeof window !== 'undefined') {
    container = document.getElementById('Modal')
  }

  const Component = () => (
    <div className="w-full h-full absolute modal flex justify-center items-center">
      {state.booking ? <Booking /> : <UnBook />}
    </div>
  )

  return container
    ? createPortal(state.show ? <Component /> : null, container)
    : null
}

export default Modal
