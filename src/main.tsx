import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Sandbox from './components/Sandbox.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sandbox />
  </React.StrictMode>,
)
