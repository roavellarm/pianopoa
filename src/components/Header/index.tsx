import { HeaderContainer } from './style'
import { theme } from '../../styles/theme'

function Header() {
  return (
    <HeaderContainer>
      <h1
        style={{
          fontFamily: theme.fontFamily.urbanist,
          fontSize: '31px',
          marginLeft: '20px',
          letterSpacing: '15px',
        }}
      >
        PIANO POA
      </h1>
    </HeaderContainer>
  )
}

export default Header
