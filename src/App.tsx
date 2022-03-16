import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { theme } from './styles/theme'
import Footer from './components/Footer'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <h1>Hello World</h1>
    <Global />
    <Footer />
  </ThemeProvider>
)
