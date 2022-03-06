import { Container } from './styles/styled-app'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { theme } from './styles/theme'
import Header from './components/Header/header'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Container />
    <Global />
  </ThemeProvider>
)
