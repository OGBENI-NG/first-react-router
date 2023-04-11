import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VanLife from './pages/VanLife';
import About from './pages/About';
import Van from './pages/Van';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>#vanlife</Link>
        <Link to="/about">About</Link>
        <Link to='/van'>Van</Link>
      </nav>
      <Routes>
        <Route path='/'element={<VanLife />}/>
        <Route path='/about'element={<About />}/>
        <Route path='/van'element={<Van />}/>
      </Routes>
    </BrowserRouter>
  )
}





ReactDOM.createRoot(document.getElementById('root')).render(
  <App />,
);