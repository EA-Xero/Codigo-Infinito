import { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Favoritos from './assets/components/Favoritos';
import MyContext from './assets/components/Mycontext';
import {createClient} from 'pexels'
function App() {
  //Asignar como valor del Provider un estado creado con el hook useState
  const [phootos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const client = createClient("Zr3vPqYJyu2eoQyurSMZ3JtLwkklhhm7oNui7O5zXlJatEKCvhvho0yj")
        const query = 'Nature';
        client.photos.search({ query, per_page: 80 }).then(data => {setPhotos(data.photos)});
      } catch (error) {
        alert(`Error al cargar la página: ${error}`);
      }
    }

    fetchPhotos();
  }, []);

  return (
    //Usar el contexto creado como un componente para envolver toda la aplicación.
    <MyContext.Provider value={phootos}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favoritos' element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;