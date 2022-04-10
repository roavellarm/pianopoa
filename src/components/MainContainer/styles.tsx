import styled from 'styled-components'

export const Container = styled.div<{ backgroundImage?: string }>`
  display: flex;
  height: 100vh;
  min-height: 100%;
  flex-direction: column;
  align-items: stretch;
  background: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const MainFilter = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100%;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  background: rgba(16, 12, 8, 0.25);
  padding: 0 4rem;
  align-items: stretch;
`

export const Main = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
`
