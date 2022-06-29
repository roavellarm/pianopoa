/* eslint-disable jsx-a11y/anchor-is-valid */
import { FooterContainerB, ContainerImages, LinksContainer, ContainerText } from './styles'
import Whatsapp from './images/whats.svg'
import Insta from './images/insta.svg'
import Email from './images/email.svg'
import Face from './images/face.svg'
import yt from './images/yt.svg'

function FooterB() {
  return (
    <FooterContainerB>
      <LinksContainer>
        <ContainerImages style={{ alignItems: 'center', display: 'flex', marginBottom: '9px' }}>
          <a
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'black',
            }}
            target="_blank"
            href="#Olá, gostaria de um orçamento"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="whataspp" width="25" />
            <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
              (51)-984596917
            </span>
          </a>
        </ContainerImages>

        <ContainerImages>
          <a
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'black',
            }}
            href="mailto:jordanabrusa11@gmail.com?subject=Minha Mensagem&body=Olá, Bom dia!"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Email} alt="email" width="25" />
            <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
              jordanabrusa11@gmail.com
            </span>
          </a>
        </ContainerImages>
        <ContainerText>
          <a href="https://www.facebook.com/jordana.brusa">
            <img src={Face} alt="whataspp" width="35" style={{ marginRight: '25px' }} />
          </a>
          <a href="https://www.instagram.com/jordanabrusa/?hl=pt-br">
            <img src={Insta} alt="whataspp" width="35" />
          </a>
          <a href="https://www.youtube.com/channel/UCh1K7DHlglexif0ll-jSN0g">
            <img src={yt} alt="youtube" width="35" style={{ marginLeft: '25px' }} />
          </a>
        </ContainerText>
      </LinksContainer>
    </FooterContainerB>
  )
}

export default FooterB
