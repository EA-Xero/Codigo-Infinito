import React, { useState } from "react";

function Nav({ setSearchValue, resetSearch }) {
    const [searchInput, setSearchInput] = useState("");

//Guarda en setSearchInput los datos en tiempo real colocados en el input
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
};

//previene comportamiento por defecto y coloca el estado para filtrar los datos
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(searchInput);
};

//vaciado de los estados en nav.jsx y App.jsx
    const handleReset = () => {
        setSearchInput("");
        resetSearch();
};

//renderizado de la navbar
    return (
        <nav className="navbar bg-body-tertiary mb-3">
            <div className="container-fluid d-flex" style={{ justifyContent: "center" }}>
                <form style={{ width: "50%" }} className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-success mx-1" type="submit">
                        Search
                    </button>
                    <button className="btn btn-outline-danger mx-1" type="button" onClick={handleReset}>
                        Reset
                    </button>
                </form>
            </div>
        </nav>
    );
}
export default Nav;