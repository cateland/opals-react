import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="light">Light</NavLink></li>
          <li><NavLink to="/sandbox">Sandbox</NavLink></li>
          <li><NavLink to="/donations">Donations</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
