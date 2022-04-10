import styled from 'styled-components'
import theme from '../../styles/theme'

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7.5rem;
  background: rgba(244, 211, 194, 0.9);
  flex-shrink: 0;
`
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -10px;

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    margin-left: -90px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: -90px;
  }
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
  width: 250px;

  @media screen and (max-width: 900px) {
    font-size: 44px;
  }
`
export const LineNameContainer = styled.div`
  color: rgba(41, 42, 44, 1);
  width: 66px;
  height: 0px;
  margin-left: -18px;
  top: 4px;
  border: 2px solid #292a2c;
  transform: rotate(90deg);

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    margin-left: -17px;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: -75px;
  margin-top: 22px;

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    margin-left: -180px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: -290px;
  }
`
export const WhatsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -25px;
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
  /* left: 316px; */
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
  width: 25%;
  height: 70px;
  margin-left: 100px;

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    margin-left: -405px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-left: -550px;
  }
`

export const SocialText = styled.span`
  text-align: right;
  font-family: ${theme.fontFamily.oswald};

  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.2em;

  color: #292a2c;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 70px;
  margin-left: 169px;
  margin-top: -5px;
`
