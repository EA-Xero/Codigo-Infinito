import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Carrito from './Components/Carrito'
import Detalle from './Components/Detalle'
import MyContext  from './Components/Mycontext'
import { useState } from 'react'
function App() {
  const [Nombrepizza, setNombrepizza] = useState('');
  const [Conteo, setConteo] = useState([]);
  return (
    <MyContext.Provider value = {{ Nombrepizza, setNombrepizza,Conteo,setConteo}}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="/detalle/:pizza" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App
