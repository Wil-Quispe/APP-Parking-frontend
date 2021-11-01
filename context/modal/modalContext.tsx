import { createContext, Dispatch, ReactNode, useReducer } from 'react'

interface ContextType {
  state: InitStateInterface
  dispatch: Dispatch<ActionType>
}

interface InitStateInterface {
  show: boolean
  parkId: string
  booking: boolean
}

type ActionType =
  | {
      type: 'booking'
      payload: { booking: boolean; show: boolean; parkId: string }
    }
  | {
      type: 'unBook'
      payload: {
        booking: boolean
        show: boolean
        parkId: string
        // carId: string
        // pin: string
      }
    }
  | { type: 'closeModal'; payload: { show: boolean } }

const InitState = {} as InitStateInterface

const ModalReducer = (state: InitStateInterface, action: ActionType) => {
  switch (action.type) {
    case 'booking':
      return {
        ...state,
        booking: action.payload.booking,
        show: action.payload.show,
        parkId: action.payload.parkId,
      }
    case 'unBook':
      return {
        ...state,
        booking: action.payload.booking,
        show: action.payload.show,
        parkId: action.payload.parkId,
        // carId: action.payload.carId,
        // pin: action.payload.pin,
      }
    case 'closeModal':
      return {
        ...state,
        show: action.payload.show,
        parkId: '',
      }
    default:
      return { ...state }
  }
}

export const ModalContext = createContext({} as ContextType)

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ModalReducer, InitState)
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
