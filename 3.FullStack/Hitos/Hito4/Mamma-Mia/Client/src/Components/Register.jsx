import { useState,useEffect } from "react"
import axiosInstance from '../middlewares/axios.js';
export default function Register (){
    const [user, setUser] = useState({})
    function reset (){
        document.getElementById("form1").reset()
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataToSend = {
                    email: user.email,
                    password: user.password,
                    nombre: user.name,
                    apellido: user.apellido,
                    telefono: user.telefono,
                    pais: user.pais,
                    direccion: user.direccion,
                };
                const response = await axiosInstance.post('/profile/register', dataToSend);
                alert(response.data)
            } catch (error) {
                console.log(error)
                alert("Ha sido imposible registrar el usuario")
            }
        };
        const handleClick = (event) => {
            fetchData();
            event.preventDefault();
            reset();
        };
        const button = document.getElementById('reg');
        button.addEventListener('click', handleClick);
        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, [user]);
    return (
        <div className="d-flex justify-content-center text-light">
            <div className="border border-light m-5 w-50 rounded p-4 d-flex flex-column">
                <h1 className="text-warning text-center">Register</h1>
                    <form id="form1" className="d-flex flex-column p-3">
                        <input required type="text" placeholder="nombre" onChange={(e) => setUser({...user, name: e.target.value})} />
                        <input required type="text" placeholder="apellido" onChange={(e) => setUser({...user, apellido: e.target.value})} />
                        <input required type="tel" placeholder="telefono" onChange={(e) => setUser({...user, telefono: e.target.value})} />
                        <input required type="email" placeholder="email" onChange={(e) => setUser({...user, email: e.target.value})} />
                        <input required type="password" placeholder="password" onChange={(e) => setUser({...user, password: e.target.value})} />
                        <input required type="text" placeholder="pais" onChange={(e) => setUser({...user, pais: e.target.value})} />
                        <input required type="text" placeholder="direccion" onChange={(e) => setUser({...user, direccion: e.target.value})} />
                        <div className="d-flex justify-content-between">
                            <button id="reg" className="btn btn-primary mt-3 large w-50 m-1 ">Register</button>
                            <button onClick={() => reset()} className="btn btn-danger mt-3 large w-50 m-1">Clear</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}