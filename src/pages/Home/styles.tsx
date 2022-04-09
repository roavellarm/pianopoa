import styled from 'styled-components'
import theme from '../../styles/theme'
import HomeImg from '../../images/homeBg.png'

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background: url(${HomeImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const MainFilter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background: rgba(16, 12, 8, 0.25);
  padding: 0 4rem;
`
export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: rgba(16, 12, 8, 0.55);
  box-shadow: 0px 0px 50px 50px rgba(16, 12, 8, 0.55);
  padding: 2rem;
`

export const ParagraphLarge = styled.h2`
  font-family: 'Urbanist';
  font-weight: 400;
  font-size: ${theme.fontSize.title3};
  margin-bottom: 2rem;
`

export const Button = styled.button`
  align-self: flex-end;
  background: rgba(244, 211, 194, 0.9);
  border: 2px solid rgba(244, 211, 194, 0.9);
  width: fit-content;
  white-space: nowrap;
  padding: 1rem 3rem;
  margin-top: 2rem;
  transition: all ease 0.25s;

  &:hover {
    background: transparent;
    color: rgba(244, 211, 194, 0.9);
  }
`
