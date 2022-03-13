import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Global from './styles/global'
import { theme } from './styles/theme'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <h1>Hello World</h1>
    <Global />
  </ThemeProvider>
)
