import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./assets/components/Navbar"
import Home from "./assets/components/Home"
import Contacto from './assets/components/Contacto'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contacto' element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
