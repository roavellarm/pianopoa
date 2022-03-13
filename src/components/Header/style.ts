import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderContainer = styled.div`
  background: #737373;
  box-shadow: 0px 0px 25px 25px #737373;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const PianoPoaContainer = styled.div`
  font-family: ${theme.fontFamily.oswald};
  font-size: 36px;
  margin-left: 4.5rem;
  letter-spacing: 0.5rem;
  line-height: 53.35px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.51);
  font-weight: 400;
  color: #efefeb;
`
export const BioContainer = styled.div`
  width: 50rem;
  height: 26px;
  display: flex;
  align-items: flex-end;
  justify-content: right;
  margin-left: 11.1rem;
  margin-top: 0.7rem;

  @media screen and (max-width: 700px) {
    margin-top: 1rem;
    margin-left: -14rem;
  }
`
export const BioSpan = styled.span`
  margin-right: 2.7rem;
  font-family: ${theme.fontFamily.urbanist};
  font-size: 22px;
  line-height: 26.4px;
  color: rgba(244, 211, 194, 1);
  text-shadow: 1px 1px 1px #000000;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    font-size: 15px;
    margin-right: 2rem;
  }
`
