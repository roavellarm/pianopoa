import { Container } from './styles/styled-app'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { theme } from './styles/theme'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Container></Container>
    <Global />
  </ThemeProvider>
)
