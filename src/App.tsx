import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import { theme } from './styles/theme'

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <h1 title="botao">Hellow World</h1>
    <Global />
  </ThemeProvider>
)
