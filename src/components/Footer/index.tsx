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
} from './styled-footer'

import whats from '../../images/whats.svg'
import email from '../../images/email.svg'

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
      <div>Footer</div>
    </FooterContainer>
  )
}

export default Footer
