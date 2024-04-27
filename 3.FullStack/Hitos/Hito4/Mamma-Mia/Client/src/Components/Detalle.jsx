import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from '../middlewares/axios.js';
export default function Detalle() {
    const [data, setData] = useState([]);
    async function Call() {
        try {
            const response = await axios.post('/')
            console.log(response)
            const data = await response.data;
            setData(data[1]);
        } catch (error) {
            console.log(error);
        }
    }
    const { pizza } = useParams();
    useEffect(() => {
        Call();
    },[])
    return (
        <div className="container-fluid m-3 p-3">
            {data.map((item) => { 
                if (item.name === pizza) {
                    return (
                        <div className="d-flex mt-5 pt-5" key={item.id}>
                            <img className=" w-50 h-75" src={item.img} alt={item.name} />
                            <div className="kit d-flex flex-column justify-content-center align-items-center text-center w-100 m-3 p-3 bg-info bg-opacity-10 border border-info rounded-end">
                                <h1 className="text-info">{item.name.toUpperCase()}</h1>
                                <h2 className="text-info">${item.price}</h2>
                                <p className="text-info h4">{item.description}</p>
                                <h1 className="text-warning">Ingredientes</h1>
                                <h4 className="text-warning">{item.ingredientes}</h4>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
     
}