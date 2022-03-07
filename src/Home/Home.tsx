import { Container } from './style_home'
import Header from '../components/Header/header'
import Footer from '../components/Footer/Footer'
import HomeText from '../components/HomeText/HomeText'

function Home() {
  return (
    <>
      <Container>
        <Header />

        <div style={{ display: 'flex', justifyContent: 'right' }}>
          <HomeText />
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Home
