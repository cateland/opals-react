import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Donations from './components/Donations.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Donations />
  </React.StrictMode>,
)
