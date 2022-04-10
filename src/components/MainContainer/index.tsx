import { ReactNode } from 'react'

import { useProvider } from '../../contexts/MainContext'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Container, MainFilter, Main } from './styles'

type Props = { children: ReactNode }

export const MainContainer = ({ children }: Props) => {
  const { backgroundImage } = useProvider()

  return (
    <Container backgroundImage={backgroundImage}>
      <MainFilter>
        <Navbar />
        <Main>{children}</Main>
      </MainFilter>
      <Footer />
    </Container>
  )
}
