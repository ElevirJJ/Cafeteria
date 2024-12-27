import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'


import Local from './components/Pages/Local.jsx'
import Home from './components/Pages/Home.jsx'
import Sobre from './components/Pages/Sobre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>

      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Local" element={<Local />} />
  
     </Routes>
    </BrowserRouter>
  </StrictMode>
)