/* eslint-disable jsx-a11y/anchor-is-valid */
import { FooterContainerB, ContainerImages, LinksContainer, ContainerText } from './styles'
import Whatsapp from './images/whats.svg'
import Insta from './images/insta.svg'
import Email from './images/email.svg'
import Face from './images/face.svg'

function FooterB() {
  return (
    <FooterContainerB>
      <LinksContainer>
        <ContainerImages style={{ alignItems: 'center', display: 'flex' }}>
          <a
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'white',
            }}
            target="_blank"
            href="#Olá, gostaria de um orçamento"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="whataspp" width="25" />
            <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
              (51)-0000000
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
              color: 'white',
            }}
            target="_blank"
            href={`mailto:ggg@gmail.com?subject=Minha Mensagem&body=Olá, Bom dia!
           
          `}
            rel="noreferrer"
          >
            <img src={Email} alt="email" width="25" />
            <span style={{ marginLeft: '10px', fontFamily: 'Arial', fontSize: '17px' }}>
              fulano@gmail.com
            </span>
          </a>
        </ContainerImages>
        <ContainerText>
          <a href="#">
            <img src={Face} alt="whataspp" width="35" style={{ marginRight: '25px' }} />
          </a>

          <a href="#">
            <img src={Insta} alt="whataspp" width="35" />
          </a>
        </ContainerText>
      </LinksContainer>
    </FooterContainerB>
  )
}

export default FooterB
