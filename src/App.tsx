import { Container } from './styles/styled-app'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { theme } from './styles/theme'
import Header from './components/Header/header'
import Home from './components/Home/Home'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <Global />
  </ThemeProvider>
)
