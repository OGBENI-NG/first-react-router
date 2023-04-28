import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import "./server"
import Vans, {loader as vanLoader} from './pages/vans/Vans'
import VanDetails, {loader as vanDetailsLoader} from './pages/vans/VanDetails'
import Layouts from './components/Layouts'
import Dashboard, {loader as dashboardVanLoader} from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayouts from './components/HostLayouts'
import HostVans, {loader as hostVanLoader} from './pages/host/HostVans'
import HostVansDetails, {loader as hostVanDetailsLoader} from './pages/host/HostVansDetails'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPricing from './pages/host/HostVanPricing'
import HostVanPhotos from './pages/host/HostVanPhotos'
import Login from './pages/Login'
import Error from './components/Error'
//import { requireAuth } from './utils'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts />}>
      <Route index element={<Home />}/>
      <Route path='about'element={<About />}/>
      <Route path='login' element={<Login />}/>
      {/* vans route details id */}
      <Route 
        path='vans' 
        element={<Vans />} 
        loader={vanLoader}
        errorElement={<Error />}
      />
      <Route 
        path='vans/:id'
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />
    

      {/* nested route for host-layouts, dashboard, income and review path.*/}
      <Route path='host' element={<HostLayouts />}>
        <Route 
          index 
          element={<Dashboard />}
          loader={dashboardVanLoader}
          // loader={async () => await requireAuth()}
        />
        <Route 
          path='income' 
          element={<Income />}
          // loader={async () => await requireAuth()}  
        />
        <Route 
          path='reviews' 
          element={<Reviews />}
          // loader={async () => await requireAuth()}  
        />
        <Route 
          path='vans' 
          element={<HostVans />}
          loader={hostVanLoader}  
        />

        <Route 
          path='vans/:id' 
          element={<HostVansDetails />}
          loader={hostVanDetailsLoader}  
        >
          <Route 
            index 
            element={<HostVanInfo />}
            // loader={async () => await requireAuth()}  
          />
          <Route 
            path="pricing" 
            element={<HostVanPricing />}
            // loader={async () => await requireAuth()}  
          />
          <Route 
            path="photos" 
            element={<HostVanPhotos />}
            // loader={async () => await requireAuth()}  
          />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)