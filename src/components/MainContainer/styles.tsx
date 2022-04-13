import styled from 'styled-components'

export const Container = styled.div<{ backgroundImage?: string }>`
  display: flex;
  height: 100vh;
  min-height: 100%;
  flex-direction: column;
  background: ${({ backgroundImage }) =>
    backgroundImage === '' ? 'none' : `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 800px) {
    background-size: contain;
    background-position: top;
  }
`

export const MainFilter = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background: rgba(16, 12, 8, 0.25);
  padding: 0 4rem;
`

export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
`
