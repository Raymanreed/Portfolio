import { Outlet } from 'react-router'
import './App.css'
import Headband from './components/headband'

function App() {
  return (
    <div>
      <Headband />
      <Outlet />
    </div>
  )
}

export default App
