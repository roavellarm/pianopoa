import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Wrapper = styled.div`
  background: black;
  height: 500px;
  display: flex;
  margin-top: 70px;
  width: 38%;
  line-height: 29px;
  font-size: 20px;
  padding-top: 25px;
  padding-left: 25px;
  margin-right: 50px;
  opacity: 0.8;
`

export const TextDiv = styled.div`
  width: 95%;
  line-height: 29px;
  font-size: 20px;
  padding-top: 25px;
  padding-left: 25px;
  margin-right: 50px;
  font-family: ${theme.fontFamily.raleway};
`
