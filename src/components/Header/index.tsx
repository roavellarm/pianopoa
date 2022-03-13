import { HeaderContainer } from './style'
import { theme } from '../../styles/theme'

function Header() {
  return (
    <HeaderContainer>
      <h1
        style={{
          fontFamily: theme.fontFamily.oswald,
          fontSize: '36px',
          marginLeft: '20px',
          letterSpacing: '0.5rem',
          lineHeight: '53.35px',
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.51)',
          fontWeight: '400',
          color: '#EFEFEB',
        }}
      >
        PIANO POA
      </h1>
    </HeaderContainer>
  )
}

export default Header
