import { useState, useEffect } from "react"
import axiosInstance from '../middlewares/axios.js';
export default function Login() {
    const [login, setLogin] = useState({})
    const [reload, setReload] = useState(false);
    function reset() {
        document.getElementById("inputPassword").value = ""
        document.getElementById("mail").value = ""
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataToSend = {
                    email: login.email,
                    password: login.password
                };
                const response = await axiosInstance.post('/profile/login', dataToSend);
                localStorage.setItem("token", response.data)
                alert('logeado con exito')
                handleReload()
            } catch (error) {
                alert(error.response.data)
            }
        };
        const handleClick = () => {
            fetchData();
        };

        const button = document.getElementById('log');
        button.addEventListener('click', handleClick);
        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, [login]);
    useEffect(() => {
        if (reload) {
            window.location.reload();
        }
    }, [reload]);
    const handleReload = () => {
        setReload(true);
    };
    return (
        <div className="d-flex justify-content-center text-light">
            <div className="border border-light m-5 w-50 rounded p-4">
                <h1 className="text-center text-warning mt-3">Log In</h1>
                <div className="mb-3">
                    <label htmlFor="mail" className="form-label">Email address</label>
                    <input required type="email" className="form-control" id="mail" placeholder="tu@mail.com"
                        onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                </div>
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input required type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" placeholder="******"
                    onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                <div className="d-flex justify-content-between">
                    <button id="log" className="btn btn-primary mt-3 large w-50 m-1 ">Log In</button>
                    <button onClick={() => setLogin({}, reset())}
                        className="btn btn-danger mt-3 large w-50 m-1 ">Clear</button>
                </div>
            </div>
        </div>
    )
}