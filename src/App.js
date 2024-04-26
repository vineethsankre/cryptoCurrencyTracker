import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import CryptocurrencyTracker from './components/CryptocurrencyTracker'
import './App.css'

const App = () => (
  <BrowserRouter>
    <CryptocurrencyTracker />
  </BrowserRouter>
)

export default App
