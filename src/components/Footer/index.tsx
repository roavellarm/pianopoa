import {
  FooterContainer,
  ContactContainer,
  LineNameContainer,
  Name,
  LeftContainer,
  WhatsImage,
  WhatsContainer,
  WhatsNumber,
  EmailImage,
  EmailContainer,
  EmailNumber,
  SocialContainer,
  SocialIconsContainer,
  LineNameContainerHide,
  Img,
} from './styles'

import whats from '../../images/whats.svg'
import email from '../../images/email.svg'
import face from '../../images/face.svg'
import insta from '../../images/insta.svg'
import yotube from '../../images/yt.svg'

export function Footer() {
  return (
    <FooterContainer>
      <LeftContainer>
        <Name>Jordana Brusa</Name>

        <LineNameContainer />
        <ContactContainer>
          <WhatsContainer>
            <WhatsImage src={whats} alt="whats" />
            <WhatsNumber>(51) 98459 6917</WhatsNumber>
          </WhatsContainer>
          <EmailContainer>
            <EmailImage src={email} alt="email" />
            <EmailNumber>jordanabrusa11@gmail.com</EmailNumber>
          </EmailContainer>

          <LineNameContainerHide />
        </ContactContainer>
      </LeftContainer>

      <SocialContainer>
        Social
        <SocialIconsContainer>
          <a href="https://www.facebook.com/jordana.brusa">
            <Img src={face} alt="face" />
          </a>
          <a href="https://www.youtube.com/channel/UCh1K7DHlglexif0ll-jSN0g">
            <Img src={yotube} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/jordanabrusa/?hl=pt-br">
            <Img src={insta} alt="instagram" />
          </a>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterContainer>
  )
}
