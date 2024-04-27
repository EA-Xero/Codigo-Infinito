import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from './Mycontext';
import { useContext } from 'react';
import axiosInstance from '../middlewares/axios';
export default function Home() {
    const { setNombrepizza, setConteo, Conteo, setImg, setprecio } = useContext(MyContext)
    const Navigate = useNavigate();
    const [data, setData] = useState([]);
    const [counts, setCounts] = useState([]);
    const [unitCounts, setUnitCounts] = useState([]);
    const [rol, setRol] = useState("");
    const [cambio,setCambio] = useState([]);
    async function Call() {
        try {
            const response = await axiosInstance.post('/');
            setData(response.data[1]);
            setRol(response.data[0])
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        Call();
    }, [cambio]);
    function handleIncrement(index) {
        const updatedCounts = [...counts];
        updatedCounts[index] = (updatedCounts[index] || 0) + 1;
        setCounts(updatedCounts);

        const updatedUnitCounts = [...unitCounts];
        updatedUnitCounts[index] = (updatedUnitCounts[index] || 0) + 1;
        setUnitCounts(updatedUnitCounts);
    }
    function handleDecrement(index) {
        const updatedCounts = [...counts];
        updatedCounts[index] = (updatedCounts[index] || 0) - 1;
        setCounts(updatedCounts);

        const updatedUnitCounts = [...unitCounts];
        updatedUnitCounts[index] = (updatedUnitCounts[index] || 0) - 1;
        setUnitCounts(updatedUnitCounts);
    }
    function MostrarPizza(pizzaName) {
        const pizza = pizzaName;
        Navigate(`/detalle/${pizza}`);
    }
    function añadir(index) {
        const pizzaName = data[index].name;
        setNombrepizza(pizzaName);
        const Img = data[index].img;
        setImg(Img);
        const unitCount = unitCounts[index] || 0;
        const Precio = data[index].price;
        setprecio(Precio);
        if (unitCount > 0) {
            setConteo([...Conteo, { nombre: pizzaName, cantidad: unitCount, img: Img, precio: Precio }]);
        } else {
            alert('Ingresa una cantidad valida');
            return
        }
    }
    const eliminarPizza = async (pizzaId) => {
        try {
            const res = await axiosInstance.delete(`/pizza/${pizzaId}`);
            alert(res.data)
            setCambio([...cambio,`Eliminando pizza con ID: ${pizzaId}`])
        } catch (error) {
            console.error(`Error al eliminar la pizza: ${error}`);
        }
    };

    const addpizza = async () => {
        try {
            const pizza = {
                name: document.getElementById('name').value,
                price: document.getElementById('price').value,
                img: document.getElementById('img').value,
                description: document.getElementById('description').value,
                ingredientes: document.getElementById('ingredientes').value
            };
            const res = await axiosInstance.post('/pizza', pizza);
            setCambio([...cambio,`Agregando pizza con ID: ${res.data}`])
            alert(res.data)
        } catch (error) {
            console.log(`Error al agregar la pizza: ${error}`);
        }
    }
    if (rol == 'admin') {
        return (
            <div className='container-fluid bg-black bg-gradient mt-3'>
                <div className="h1">Admin</div>
                <div className='text-center text-warning-emphasis kit'>
                    <h1>La mejor Pizzeria de la ciudad!</h1>
                    <h3>Bienvenido a Mamma Mia pizzas, ¿qué quisieras llevar hoy a casa? ;)</h3>
                </div>
                <div className="mt-3 row row-cols-2 row-cols-md-3 g-4 d-flex justify-content-center">
                    {data.map((item) => {
                        return (
                            <div key={item.id} className="card m-3 p-3 bg-info bg-opacity-10 border border-info rounded-end" style={{ width: '18rem' }}>
                                <img src={item.img} className="card-img-top img-fluid p-3" alt={item.name} />
                                <div className="card-body pizza">
                                    <h5 className="card-title text-light">{"Pizza " + item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-light ">{"$ " + item.price}</h6>
                                    <div className='text-center'>
                                        <button onClick={() => MostrarPizza(item.name)} className="card-link m-1 btn btn-primary">Ver mas</button>
                                        <button onClick={() => eliminarPizza(item.id)} className="card-link m-1 btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='text-info text-center mt-5 mb-5 p-3 bg-info bg-opacity-10 border border-info rounded w-50 mx-auto'>
                    <h1 className='text-center text-warning mt-5'>Añadir pizza</h1>
                    <div className="mb-3 ">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="terreneitor" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="precio" className="form-label">precio</label>
                        <input type="text" className="form-control" id="price" placeholder="9999" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="img" className="form-label">img</label>
                        <input type="text" className="form-control" id="img" placeholder="https://img.com" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="descripcion" className="form-label">descripcion</label>
                        <input type="text" className="form-control" id="description" placeholder="Caro pero lo vale" />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="ingredientes" className="form-label">ingredientes</label>
                        <input type="text" className="form-control" id="ingredientes" placeholder="piña,tomate,aguacate" />
                    </div>
                    <button onClick={addpizza} className="btn btn-primary">Anadir</button>
                </div>
            </div>
        );
    } else
        return (
            <div className='container-fluid bg-black bg-gradient mt-3'>
                <div className='text-center text-warning-emphasis kit'>
                    <h1>La mejor Pizzeria de la ciudad!</h1>
                    <h3>Bienvenido a Mamma Mia pizzas, ¿qué quisieras llevar hoy a casa? ;)</h3>
                </div>
                <div className="mt-3 row row-cols-2 row-cols-md-3 g-4 d-flex justify-content-center">
                    {data.map((item, index) => {
                        return (
                            <div key={item.id} className="card m-3 p-3 bg-info bg-opacity-10 border border-info rounded-end" style={{ width: '18rem' }}>
                                <img src={item.img} className="card-img-top img-fluid p-3" alt={item.name} />
                                <div className="card-body pizza">
                                    <h5 className="card-title text-light">{"Pizza " + item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-light ">{"$ " + item.price}</h6>
                                    <div>
                                        <button className='bg-black bg-gradient h5 px-2 py-1 text-info' onClick={() => handleIncrement(index)}>+</button>
                                        <span id={index} itemID={index} className='mx-3 text-light'>{counts[index] || 0}</span>
                                        <button className='bg-black bg-gradient h5 px-2 py-1 text-info' onClick={() => handleDecrement(index)}>-</button>
                                    </div>
                                    <div className='text-center'>
                                        <button onClick={() => MostrarPizza(item.name)} className="card-link m-1 btn btn-primary">Ver mas</button>
                                        <button onClick={() => {
                                            añadir(index);
                                            let ele = document.getElementById(index)
                                            ele.value = 0
                                            ele.innerHTML = 0
                                        }} className="card-link m-1 btn btn-warning">Añadir a carrito</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
}