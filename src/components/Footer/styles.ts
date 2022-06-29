import styled from 'styled-components'
import theme from '../../styles/theme'

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7.2rem;
  justify-content: space-around;
  background: rgba(244, 211, 194, 0.9);
  flex-shrink: 0;
  filter: brightness(77%);

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: auto;
    bottom: 0px;
    padding-bottom: 32px;
    padding-top: 22px;
    padding-left: 22px;
    filter: brightness(59%);
  }
`
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
  }
`
export const Name = styled.span`
  font-family: ${theme.fontFamily.oswald};
  font-size: 3rem;
  font-style: normal;
  font-weight: 200;
  letter-spacing: 0.05rem;
  color: rgba(41, 42, 44, 1);

  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const LineNameContainer = styled.div`
  color: rgba(41, 42, 44, 1);
  background: rgba(41, 42, 44, 1);
  width: 5rem;
  margin: 0px 0.5rem;
  border: 2px solid #292a2c;
  transform: rotate(90deg);

  @media screen and (max-width: 800px) {
    display: none;
  }
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

  @media screen and (max-width: 800px) {
    width: 16px;
    height: 16px;
  }
`
export const WhatsNumber = styled.div`
  width: 298px;
  height: 20px;
  margin-top: -4px;

  font-family: ${theme.fontFamily.oswald};
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;

  letter-spacing: 0.06em;
  color: #292a2c;

  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
`

export const EmailContainer = styled.div`
  display: flex;
  margin-top: 13px;
`

export const EmailImage = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media screen and (max-width: 800px) {
    width: 16px;
    height: 16px;
  }
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

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
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

  @media screen and (max-width: 500px) {
    align-items: center;
    margin-left: 1.2rem;
    font-size: 1.4rem;
    margin-top: 10px;
    width: 10rem;
  }
`

export const SocialIconsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.3rem;

  @media screen and (max-width: 800px) {
    /* display: none; */
    /* margin-bottom: 120px; */
  }
`

export const Img = styled.img`
  display: flex;
  width: 30px;
  height: 30px;

  @media screen and (max-width: 800px) {
    /* display: none; */
    width: 20px;
    height: 20px;
  }
`
