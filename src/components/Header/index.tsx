import { HeaderContainer, BioSpan, PianoPoaContainer, BioContainer } from './style-header'

function Header() {
  return (
    <HeaderContainer>
      <PianoPoaContainer>PIANO POA</PianoPoaContainer>
      <BioContainer>
        <BioSpan>BIO</BioSpan>
        <BioSpan>AULAS </BioSpan>
        <BioSpan>GALERIA</BioSpan>
        <BioSpan>MÚSICA</BioSpan>
        <BioSpan>NEWSLETTER</BioSpan>
        <BioSpan>CONTATO</BioSpan>
      </BioContainer>
    </HeaderContainer>
  )
}

export default Header
