/* eslint-disable no-unused-vars */

import React, { useState } from "react";

const Filtro = ({ onFiltrar, onReset }) => {
  const [filtro, setFiltro] = useState("");

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
    onFiltrar(e.target.value);
  };

  const handleResetClick = () => {
    setFiltro("");
    onFiltrar("");
    onReset();
  };

  return (
    <div>
      <input
        placeholder="Buscar..."
        type="text"
        value={filtro}
        onChange={handleFiltroChange}
      />
      <button className="p-2 m-2" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Filtro;
