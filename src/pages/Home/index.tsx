import { useEffect } from 'react'
import { Row, SideContainer, ParagraphLarge, Button } from './styles'

import { useProvider } from '../../contexts/MainContext'
import homeBgImg from '../../images/homeBg.png'

export const Home = () => {
  const { setBackgroundImage } = useProvider()

  useEffect(() => {
    setBackgroundImage(homeBgImg)
    return () => setBackgroundImage('')
  }, [setBackgroundImage])

  return (
    <Row>
      <SideContainer>
        <ParagraphLarge>
          Aprenda piano e harmonia musical online ou presencial através de meu método prático e
          personalizado, que atende desde iniciantes a pianistas avançados.
        </ParagraphLarge>

        <Button onClick={() => alert('Em breve!')}>INSCREVA-SE JÁ!</Button>
      </SideContainer>
    </Row>
  )
}
