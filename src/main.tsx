import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { MainProvider } from './contexts/MainContext'
import { Router } from './Router'
import Global from './styles/global'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainProvider>
          <Router />
        </MainProvider>
      </BrowserRouter>
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
