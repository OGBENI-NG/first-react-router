import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import "./server"
import Vans from './pages/vans/Vans'
import VanDetails from './pages/vans/VanDetails'
import Layouts from './components/Layouts'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayouts from './components/HostLayouts'
import HostVans from './pages/host/HostVans'
import HostVansDetails from './pages/host/HostVansDetails'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* nested route for header and footer */}
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />}/>
          <Route path='about'element={<About />}/>
          
          {/* vans route details id */}
          <Route path='vans'>
            <Route index element={<Vans />}/>
            <Route path=':id'element={<VanDetails />}/>
          </Route>

          {/* nested route for host-layouts, dashboard, income and review path.*/}
          <Route path='host' element={<HostLayouts />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/id' element={<HostVansDetails />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)