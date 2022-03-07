import styled from 'styled-components'

export const ContainerFooter = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.blackLight};

  width: 100vw;
  height: 50px;
  align-items: baseline;
`
