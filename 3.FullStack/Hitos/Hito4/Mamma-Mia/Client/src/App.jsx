import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './Components/Profile'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Carrito from './Components/Carrito'
import Detalle from './Components/Detalle'
import MyContext  from './Components/Mycontext'
import { useState } from 'react'
function App() {
  const [Nombrepizza, setNombrepizza] = useState('');
  const [Conteo, setConteo] = useState([]);
  const [Img,setImg] = useState("");
  const [Precio, setprecio] = useState(0);
  return (
    <MyContext.Provider value = {{ Nombrepizza, setNombrepizza, Conteo, setConteo, Img, setImg, setprecio, Precio}}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="/detalle/:pizza" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App
