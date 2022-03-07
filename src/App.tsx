import { Container } from './styles/styled-app'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { theme } from './styles/theme'
import Home from './Home/Home'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <Global />
  </ThemeProvider>
)
