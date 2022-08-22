import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './pages/Home.js'
import './styles/App.css'

export default function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}
