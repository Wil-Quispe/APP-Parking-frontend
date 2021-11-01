import { useContext } from 'react'
import { ModalContext } from '../context/modal/modalContext'

const Busy = ({ css, parkId }: { css: string; parkId: string }) => {
  const { dispatch } = useContext(ModalContext)

  const unBook = () => {
    dispatch({
      type: 'unBook',
      payload: { show: true, booking: false, parkId },
    })
  }

  return (
    <div
      className={`${css} relative flex flex-col justify-center items-center`}
    >
      <span>Busy</span>
      <button
        onClick={unBook}
        className="bg-red-400 px-3 rounded-sm hover:bg-red-600"
      >
        Unbook
      </button>
    </div>
  )
}

export default Busy
