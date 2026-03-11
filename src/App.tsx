import { Outlet } from 'react-router'
import './App.css'
import Headband from './components/headband'

function App() {
  return (
    <>
      <Headband />
      <Outlet />
    </>
  )
}

export default App
