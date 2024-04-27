import React, { useEffect, useState } from "react";

//Renderizado de la pagina
function MiApi({ searchValue }) {
    const [originalData, setOriginalData] = useState([]);
    const [data, setData] = useState([]);

//Funcion llamar a la Api
    async function Api() {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_CQutDP603IxURN1a5Ap5bqpp5CeyFmisR8AUEswsZZVvyXiMICzoTjfykuYNPE4x');
        const data = await response.json();
        //ordenado alfabetico de los datos
        const sortedData = data.sort((a, b) => a.breeds[0].name.localeCompare(b.breeds[0].name));
        setOriginalData(sortedData);
        setData(sortedData);
    }
//llamado unico de api
    useEffect(() => {
        Api();
    }, []);

//Filtrado por nombre//
    useEffect(() => {
        const filteredData = originalData.filter((item) =>
            item.breeds[0].name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setData(filteredData);
    }, [searchValue, originalData]);

//return de llenado de la pagina
    return (
        <div className="card-container">
            {data.map((item, index) => (
                <div className="card mx-2" key={index} style={{ width: '18rem', overflow: 'hidden' }}>
                    <img src={item.url} className="card-img-top" style={{ objectFit: 'cover', height: "250px" }} />
                    <div className="card-body">
                        <h5 className="card-title rose">{item.breeds[0].name}</h5>
                        <p className="card-text spicy" style={{ justifyContent: "stretch", overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.breeds[0].description}</p>
                        <a href={item.breeds[0].vetstreet_url} target="_blank" className="btn bg-dark btn-outline-info">More info</a>
                        <div>
                            <span className="p-1 m-1 badge text-bg-secondary">Origin: {item.breeds[0].origin}</span>
                            <span className="p-1 m-1 badge text-bg-secondary">Weight: {item.breeds[0].weight.metric} Kg</span>
                            <span className="p-1 m-1 badge text-bg-secondary">Life span: {item.breeds[0].life_span} Years</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MiApi;