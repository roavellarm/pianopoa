import { ReactNode, useMemo } from 'react'

import { useProvider } from '../../contexts/MainContext'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Container, MainFilter, Main } from './styles'
import { useScreenSize } from '../../screenSize'
import FooterB from '../FooterB/FooterB'

type Props = { children: ReactNode }

export const MainContainer = ({ children }: Props) => {
  const { backgroundImage } = useProvider()

  const { width } = useScreenSize()

  const showSideArea = useMemo(() => width > 800, [width])

  return (
    <Container backgroundImage={backgroundImage}>
      <MainFilter>
        <Navbar />
        <Main>{children}</Main>
      </MainFilter>
      {showSideArea ? <Footer /> : <FooterB />}
    </Container>
  )
}
