import styled from 'styled-components'
import theme from '../../styles/theme'

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 2rem;
  background: rgba(16, 12, 8, 0.55);
  box-shadow: 0px 0px 50px 50px rgba(16, 12, 8, 0.55);

  @media screen and (max-width: 800px) {
    width: 80%;
    justify-content: start;
    align-items: flex-end;
  }
`

export const ParagraphLarge = styled.h2`
  font-family: 'Urbanist';
  font-weight: 400;
  font-size: ${theme.fontSize.title3};
  margin-bottom: 2rem;

  @media screen and (max-width: 400px) {
    font-size: ${theme.fontSize.title4};
    width: 26rem;
    padding-left: 50px;
  }

  @media screen and (min-width: 400px) and (max-width: 600px) {
    font-size: ${theme.fontSize.title4};
    width: 90%;
    padding-left: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    font-size: ${theme.fontSize.title4};
    width: 75%;
    padding-right: 20px;
  }
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
  filter: brightness(77%);

  &:hover {
    background: transparent;
    color: rgba(244, 211, 194, 0.9);
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    font-size: 1.4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    margin-top: 0;
    filter: brightness(59%);
    margin-right: 36px;
  }

  @media screen and (min-width: 400px) and (max-width: 700px) {
    width: 70%;
    font-size: 1.4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    margin-top: 0;
    filter: brightness(59%);
    margin-right: 36px;
  }

  @media screen and (min-width: 700px) and (max-width: 800px) {
    width: 40%;
    font-size: 1.4rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    margin-top: 0;
    filter: brightness(59%);
  }
`
