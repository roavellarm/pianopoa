import { ReactNode, useEffect } from 'react'

import { useProvider } from '../../contexts/MainContext'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Container, MainFilter, Main } from './styles'

import homeBgImg from '../../images/homeBg.png'

type Props = {
  children: ReactNode
}

export const MainContainer = ({ children }: Props) => {
  const { backgroundImage, setBackgroundImage } = useProvider()

  useEffect(() => {
    setBackgroundImage(homeBgImg)
  }, [setBackgroundImage])

  return (
    <Container backgroundImage={backgroundImage}>
      <MainFilter>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </MainFilter>
    </Container>
  )
}
