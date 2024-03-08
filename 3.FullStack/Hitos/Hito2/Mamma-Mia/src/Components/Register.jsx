import { useState } from "react"
export default function Register (){
    const [user, setUser] = useState({})
    function reset (){
        document.getElementById("form1").reset()
    }
    return (
        <div className="d-flex justify-content-center text-light">
            <div className="border border-light m-5 w-50 rounded p-4 d-flex flex-column">
                <h1 className="text-warning text-center">Register</h1>
                    <form id="form1" className="d-flex flex-column p-3">
                        <input type="text" placeholder="nombre" onChange={(e) => setUser({...user, name: e.target.value})} />
                        <input type="text" placeholder="apellido" onChange={(e) => setUser({...user, apellido: e.target.value})} />
                        <input type="tel" placeholder="telefono" onChange={(e) => setUser({...user, telefono: e.target.value})} />
                        <input type="email" placeholder="email" onChange={(e) => setUser({...user, email: e.target.value})} />
                        <input type="password" placeholder="password" onChange={(e) => setUser({...user, password: e.target.value})} />
                        <input type="text" placeholder="pais" onChange={(e) => setUser({...user, pais: e.target.value})} />
                        <input type="text" placeholder="direccion" onChange={(e) => setUser({...user, direccion: e.target.value})} />
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary mt-3 large w-50 m-1 ">Register</button>
                            <button onClick={() => reset()} className="btn btn-danger mt-3 large w-50 m-1">Clear</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}