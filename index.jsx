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
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* nested route for header and footer parent route*/}
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />}/>
          <Route path='about'element={<About />}/>
          {/* vans route details id */}
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id'element={<VanDetails />}/>
         

          {/* nested route for host-layouts, dashboard, income and review path.*/}
          <Route path='host' element={<HostLayouts />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVansDetails />}>
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)