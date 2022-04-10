import styled from 'styled-components'
import theme from '../../styles/theme'

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  justify-content: space-around;
  background: rgba(244, 211, 194, 0.9);
  flex-shrink: 0;
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Name = styled.span`
  font-family: ${theme.fontFamily.oswald};
  font-size: 3rem;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0.05rem;
  color: rgba(41, 42, 44, 1);
`
export const LineNameContainer = styled.div`
  color: rgba(41, 42, 44, 1);
  width: 5rem;
  margin: 0px 0.5rem;
  border: 2px solid #292a2c;
  transform: rotate(90deg);
`
export const WhatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WhatsImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`
export const WhatsNumber = styled.div`
  width: 298px;
  height: 20px;
  margin-top: -4px;

  font-family: ${theme.fontFamily.oswald};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  letter-spacing: 0.06em;
  color: #292a2c;
`

export const EmailContainer = styled.div`
  display: flex;
  margin-top: 13px;
`

export const EmailImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`

export const EmailNumber = styled.div`
  width: 298px;
  height: 20px;
  margin-top: -4px;

  font-family: ${theme.fontFamily.oswald};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.75px;

  letter-spacing: 0.06em;
  color: #292a2c;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: 130px;
  font-family: ${theme.fontFamily.oswald};
  font-weight: 500;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  color: #292a2c;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.3rem;
`
