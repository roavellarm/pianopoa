import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ContainerHeader = styled.div`
  height: 50px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.primary};
`
