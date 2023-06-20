import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Light from './components/Light.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Light />
  </React.StrictMode>,
)
