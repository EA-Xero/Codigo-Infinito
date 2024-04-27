import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./components/dataBase/BaseColaboradores";
import Listado from "./components/listado";
import Formulario from "./components/Formulario";

function App() {
  const [colaboradoresTemporales, setColaboradoresTemporales] =
    useState(BaseColaboradores);

  const agregarColaborador = (colaborador) => {
    const lastId =
      colaboradoresTemporales[colaboradoresTemporales.length - 1].id;

    const nextId = Number(lastId) + 1;
    const colaboradorConId = { ...colaborador, id: nextId };

    setColaboradoresTemporales([...colaboradoresTemporales, colaboradorConId]);
  };

  return (
    <>
      <Listado colaboradores={colaboradoresTemporales} />
      <Formulario agregarColaborador={agregarColaborador} />
    </>
  );
}

export default App;
