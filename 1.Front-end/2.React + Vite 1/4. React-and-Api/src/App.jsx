import './App.css'
import MiApi from './assets/Miapi.jsx'
import Nav from "./assets/buscador.jsx"
import React from 'react'
import { useState } from 'react'

function App() {
    //definiendo constante para pasarla como prop a nav.jsx
    const [searchValue, setSearchValue] = useState("");

    //funcion para resetear el buscador desde nav.jsx
    const resetSearch = () => {
        setSearchValue("");
    };

    //renderizado de la pagina
    return (
        <div>
            <Nav setSearchValue={setSearchValue} resetSearch={resetSearch} />
            <MiApi searchValue={searchValue} />
        </div>
    );
}

export default App;