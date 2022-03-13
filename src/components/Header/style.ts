import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderContainer = styled.div`
  background: #737373;
  box-shadow: 0px 0px 25px 25px #737373;
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  position: fixed;
`
export const PianoPoaContainer = styled.div`
  font-family: ${theme.fontFamily.oswald};
  font-size: 36px;
  margin-left: 20px;
  letter-spacing: 0.5rem;
  line-height: 53.35px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.51);
  font-weight: 400;
  color: #efefeb;
`
