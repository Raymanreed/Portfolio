import { Outlet } from 'react-router'
import './App.css'
import Headband from './components/headband'
import FooterComponent from './components/footerComponent'

function App() {
  return (
    <div className="main-page">
      <Headband />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
