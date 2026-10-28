import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/bodoni-moda'
import '@fontsource-variable/bodoni-moda/wght-italic.css'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
