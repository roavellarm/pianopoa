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
        </EmailContainer>
      </ContactContainer>
      Footer
    </FooterContainer>
  )
}

export default Footer
