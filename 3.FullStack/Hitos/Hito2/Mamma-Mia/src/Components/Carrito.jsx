import { useContext } from "react"
import MyContext from './Mycontext';
import { useNavigate } from "react-router-dom";
export default function Carrito() {
    const { Conteo, setConteo } = useContext(MyContext);
    const navigate = useNavigate();
    function eliminarPedido(index) {
        const nuevoConteo = Conteo.filter((_, i) => i !== index);
        setConteo(nuevoConteo);
    }
    function compra(){
        alert('Gracias por tu compra!')
        setConteo([]);
    }
    function reset(){
        setConteo([]);
        alert('Carrito vaciado')
        navigate('/');
    }
    return (
        <div className="container-fluid bg-black bg-gradient">
            {Conteo.map((item, index) => (
                <div className="d-flex flex-column justify-content-center align-items-center text-center" key={index}>
                    <h1 className="text-light">Pizza {item.nombre}</h1>
                    <img className="border rounded " style={{ width: '500px', height: '200px' }} src={item.img} alt={item.nombre} />
                    <span className="text-light h5">Cantidad: {item.cantidad}</span>
                    <span className="text-light h5">Costo: ${item.precio}</span>
                    <i onClick={() => eliminarPedido(index)} className="fa-solid fa-trash fa-2x text-danger m-3 fa-beat-fade"></i>
                </div>
            ))}
                

            <div className="d-flex justify-content-center border-top border-light">
                <button onClick={() => compra()} className="btn btn-warning m-5 large">Comprar</button>
                <span className="text-light text-center m-5">Total: ${Conteo.reduce((total, item) => total + item.precio * item.cantidad, 0)}</span>
                <button onClick={() => reset()} className="btn btn-danger m-5 large">Cancelar</button>
            </div>
        </div>
    );
}