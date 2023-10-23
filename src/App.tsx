import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/light">Light</Link></li>
          <li><Link to="/sandbox">Sandbox</Link></li>
          <li><Link to="/donations">Donations</Link></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
