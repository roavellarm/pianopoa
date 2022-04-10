/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useContext, useState } from 'react'

type ContextType = {
  backgroundImage?: string
  setBackgroundImage: (img: string) => void
}

const MainContext = createContext<ContextType>({
  backgroundImage: '',
  setBackgroundImage: (img: string) => undefined,
})

type Props = {
  children: ReactNode
}
export const MainProvider = ({ children }: Props) => {
  const [backgroundImage, setBackgroundImage] = useState('')

  return (
    <MainContext.Provider value={{ backgroundImage, setBackgroundImage }}>
      {children}
    </MainContext.Provider>
  )
}

export const useProvider = () => useContext(MainContext)
