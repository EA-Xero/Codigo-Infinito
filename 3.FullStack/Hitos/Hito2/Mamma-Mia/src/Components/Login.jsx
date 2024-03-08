import { useState,useEffect } from "react"
export default function Login() {
    const [login, setLogin] = useState({})
    useEffect(() =>{
        console.log(login)
    },[login])
    function reset (){
        document.getElementById("inputPassword").value = ""
        document.getElementById("mail").value = ""
    }
    return (
        <div className="d-flex justify-content-center text-light">
            <div className="border border-light m-5 w-50 rounded p-4">
                <h1 className="text-center text-warning mt-3">Log In</h1>
                <div className="mb-3">
                    <label htmlFor="mail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="mail" placeholder="tu@mail.com" 
                    onChange={(e) => setLogin({...login, email: e.target.value})}/>
                </div>
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" placeholder="******" 
                onChange={(e) => setLogin({...login,password: e.target.value})}/>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary mt-3 large w-50 m-1 ">Log In</button>
                    <button onClick={() => setLogin({},reset())} 
                    className="btn btn-danger mt-3 large w-50 m-1 ">Clear</button>
                </div>
            </div>
        </div>
    )
}