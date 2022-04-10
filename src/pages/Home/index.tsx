import { Row, SideContainer, ParagraphLarge, Button } from './styles'

export const Home = () => (
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
