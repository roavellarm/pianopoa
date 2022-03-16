import {
  FooterContainer,
  ContactContainer,
  LineNameContainer,
  Name,
  NameContainer,
  WhatsImage,
} from './styled-footer'

import whats from '../../images/whats.svg'

function Footer() {
  return (
    <FooterContainer>
      <NameContainer>
        <Name>Jordana Brusa</Name>
        <LineNameContainer />
      </NameContainer>
      <ContactContainer>
        <WhatsImage src={whats} alt="whats" />
      </ContactContainer>
      Footer
    </FooterContainer>
  )
}

export default Footer
