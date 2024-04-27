export default function Home () {
    const imagen = "https://images.vexels.com/media/users/3/294732/isolated/preview/db214df819b4b87cec954949d94a0fc3-lindo-icono-de-pastel-de-autoestima.png"
    return (
        <div className="d-flex flex-column justify-items-center align-items-center">
            <h1>Bienvenido a Happy Cake</h1>
            <h3>El lugar de los pasteles felices</h3>
            <img style={{width: "400px"}} src={imagen} alt="Happy Cake" className="img-fluid" />
        </div>
    )
}