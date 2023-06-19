import React from 'react'
import ReactDOM from 'react-dom/client'
import Light from './components/Light.tsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Light />
  </React.StrictMode>,
)
