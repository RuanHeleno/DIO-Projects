import React from 'react'
import { StylesProvider } from '@mui/styles'
import CssBaseLine from '@mui/material/CssBaseline'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseLine />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  )
}

export default App