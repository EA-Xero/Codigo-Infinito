import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav style={{height: "10vh"}} className="bg-danger bg-gradient d-flex justify-content-between">
            <div style={{ width: "15%" }} className="d-flex justify-content-between align-items-center p-3">
                <i class="fa-solid fa-house fa-lg text-white px-1"></i>
                <Link className="h4 text-white pe-4" to="/">Home</Link>
                <i class="fa-solid fa-comment fa-lg text-white px-1"></i>
                <Link className="h4 text-white" to="/Contacto">Contacto</Link>
            </div>
            <div className="d-flex justify-content-between align-items-center p-3">
                <p className="h4 text-warning p-2">Happy Cake</p>
                <i class="fa-solid fa-cake-candles fa-2xl text-warning"></i>
            </div>
        </nav>
    )
}