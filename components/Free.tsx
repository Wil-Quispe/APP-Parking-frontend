import { useContext, useState } from 'react'
import { ModalContext } from '../context/modal/modalContext'

const Free = ({ css, parkId }: { css: string; parkId: string }) => {
  const [showBtn, setShowBtn] = useState(false)
  const { dispatch } = useContext(ModalContext)

  const mouseAction = () => {
    setShowBtn(true)
  }
  const mouseAction1 = () => {
    setShowBtn(false)
  }

  const booking = () => {
    dispatch({
      type: 'booking',
      payload: { show: true, parkId, booking: true },
    })
  }

  return (
    <div
      onMouseEnter={mouseAction}
      onMouseLeave={mouseAction1}
      className={`${css}  flex justify-center items-center`}
    >
      {showBtn ? (
        <button
          onClick={booking}
          className="bg-blue-400 px-3 rounded-sm hover:bg-blue-700"
        >
          Book
        </button>
      ) : (
        <span className=" w-full text-center py-3">free</span>
      )}
    </div>
  )
}

export default Free
