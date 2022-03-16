import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(244, 211, 194, 0.9);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 45.2rem;
  color: gray;
`
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -350px;
`
export const Name = styled.span`
  font-family: ${theme.fontFamily.oswald};
  font-size: 45px;
  font-style: normal;
  font-weight: 200;
  line-height: 66.69px;
  letter-spacing: 0.05em;
  text-align: left;
  color: rgba(41, 42, 44, 1);
`
export const LineNameContainer = styled.div`
  color: rgba(41, 42, 44, 1);
  width: 66px;
  height: 0px;
  left: 259px;
  top: 4px;
  border: 2px solid #292a2c;
  transform: rotate(90deg);
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -416px;
`
export const WhatsImage = styled.img`
  width: 20px;
  height: 20px;
  left: 289px;
  margin-top: -25px;
`
