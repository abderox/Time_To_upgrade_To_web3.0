import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { TransactionProvider } from "./context/Transaction";
import App from './App'

ReactDOM.render(

    <TransactionProvider>
    <App />
  </TransactionProvider>,
  
  document.getElementById('root')
)
