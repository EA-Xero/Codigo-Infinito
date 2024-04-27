import { useContext } from "react"
import MyContext from './Mycontext';
export default function Carrito() {
    const { Conteo, setConteo } = useContext(MyContext);

    function eliminarPedido(index) {
        const nuevoConteo = Conteo.filter((_, i) => i !== index);
        setConteo(nuevoConteo);
    }
    function compra(){
        alert('Gracias por tu compra!')
        setConteo([]);
    }
    return (
        <div>
            {Conteo.map((item, index) => (
                <div key={index}>
                    <h1 className="text-light">{item.nombre.toUpperCase()}</h1>
                    <span className="text-light h5">Cantidad: {item.cantidad}</span>
                    <i onClick={() => eliminarPedido(index)} className="fa-solid fa-trash fa-2x text-danger m-3 fa-beat-fade"></i>
                </div>
            ))}
            <div className="text-center">
                <button onClick={() => compra()} className="btn btn-warning mt-3 large">Comprar</button>
            </div>
        </div>
    );
}