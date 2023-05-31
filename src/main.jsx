import React from 'react'
import ReactDOM from 'react-dom/client'
import ResetStyle from './assets/style/Reset'
import App from './assets/App'
import GlobalStyle from './assets/style/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
