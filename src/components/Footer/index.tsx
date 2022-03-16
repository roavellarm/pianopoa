import {
  FooterContainer,
  ContactContainer,
  LineNameContainer,
  Name,
  NameContainer,
  WhatsImage,
  WhatsContainer,
  WhatsNumber,
  EmailImage,
  EmailContainer,
  EmailNumber,
  SocialContainer,
  SocialText,
  SocialIconsContainer,
} from './style-footer'

import whats from '../../images/whats.svg'
import email from '../../images/email.svg'
import face from '../../images/face.svg'
import insta from '../../images/insta.svg'
import yotube from '../../images/yt.svg'

function Footer() {
  return (
    <FooterContainer>
      <NameContainer>
        <Name>Jordana Brusa</Name>
        <LineNameContainer />
      </NameContainer>
      <ContactContainer>
        <WhatsContainer>
          <WhatsImage src={whats} alt="whats" />
          <WhatsNumber>(51) 98459 6917</WhatsNumber>
        </WhatsContainer>
        <EmailContainer>
          <EmailImage src={email} alt="email" />
          <EmailNumber>jordanabrusa11@gmail.com</EmailNumber>
        </EmailContainer>
      </ContactContainer>
      <SocialContainer>
        <SocialText>Social</SocialText>
        <SocialIconsContainer>
          <a href="https://www.facebook.com/jordana.brusa">
            <img src={face} alt="face" width="30" height="30" style={{ marginRight: '20px' }} />
          </a>
          <a href="https://www.youtube.com/channel/UCh1K7DHlglexif0ll-jSN0g">
            <img
              src={yotube}
              alt="youtube"
              width="32"
              height="33"
              style={{ marginRight: '20px' }}
            />
          </a>
          <a href="https://www.instagram.com/jordanabrusa/?hl=pt-br">
            <img src={insta} alt="instagram" width="30" height="30" />
          </a>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterContainer>
  )
}

export default Footer
