import styled from 'styled-components'
import bgHome from '../images/bg-home.jpg'

export const Container = styled.div`
  background: url(${bgHome});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  filter: brightness(45%);
`