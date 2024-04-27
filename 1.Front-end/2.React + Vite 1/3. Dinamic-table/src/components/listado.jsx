// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Filtro from "./filtro";

const Listado = ({ colaboradores }) => {
  const [colaboradoresFiltrados, setColaboradoresFiltrados] =
    useState(colaboradores);

  const handleFiltrar = (filtro) => {
    const colaboradoresFiltrados = colaboradores.filter((c) => {
      const lowerFiltro = filtro.toLowerCase();
      return (
        c.nombre.toLowerCase().includes(lowerFiltro) ||
        c.correo.toLowerCase().includes(lowerFiltro) ||
        c.edad.toLowerCase().includes(lowerFiltro) ||
        c.cargo.toLowerCase().includes(lowerFiltro) ||
        c.telefono.toLowerCase().includes(lowerFiltro)
      );
    });
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  const handleReset = () => {
    setColaboradoresFiltrados(colaboradores);
  };

  useEffect(() => {
    setColaboradoresFiltrados(colaboradores);
  }, [colaboradores]);

  return (
    <>
      <Filtro onFiltrar={handleFiltrar} onReset={handleReset} />
      <Table className="mt-4" responsive striped bordered hover>
        <thead>
          <tr>
            <th className="bg-dark text-warning">Nombre</th>
            <th className="bg-dark text-warning">Correo</th>
            <th className="bg-dark text-warning">Edad</th>
            <th className="bg-dark text-warning">Cargo</th>
            <th className="bg-dark text-warning">Telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradoresFiltrados.map((c) => (
            <tr key={c.id}>
              <td className="bg-transparent text-info">{c.nombre}</td>
              <td className="bg-transparent text-info">{c.correo}</td>
              <td className="bg-transparent text-info">{c.edad}</td>
              <td className="bg-transparent text-info">{c.cargo}</td>
              <td className="bg-transparent text-info">{c.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;
