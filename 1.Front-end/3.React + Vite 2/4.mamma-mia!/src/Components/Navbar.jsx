import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-danger bg-opacity-50 bg-gradient text-warning d-flex justify-content-between">
            <div className="mt-2">
                <NavLink to={"/"} className="pizza mt-3 ms-3 h1 text-decoration-none">Mamma Mia!!</NavLink>
            </div>
            <div className="d-flex justify-content-between ">
                <NavLink to={"/carrito"} className="m-3 align-middle h3 pizza m-1" >Carrito<i className="fa-solid fa-cart-shopping m-1"></i></NavLink>
                <NavLink to={"/"} className=" m-3 align-middle h3 pizza m-1" >Inicio<i className="fa-solid fa-house m-1"></i></NavLink>
            </div>
        </nav>
    )
}