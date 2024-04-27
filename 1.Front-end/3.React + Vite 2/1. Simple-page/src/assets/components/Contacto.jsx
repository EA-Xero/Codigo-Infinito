export default function Contacto() {
    return (
        <div style={{height: "90vh"}} className="d-flex flex-column justify-items-center align-items-center bg-dark">
            <h2 className="m-3 text-center text-warning">Cuentanos, en que te podemos ayudar?</h2>
            <form className="w-100 mx-3 bg-dark bg-gradient">
                <div className="mb-3 p-2 d-flex flex-column align-items-center">
                    <label for="email-input" className="text-white form-label">Correo Electronico:</label>
                    <input type="email" className="bg-info-subtle form-control" id="email-input" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3 p-2 d-flex flex-column align-items-center">
                    <label for="desc-input" className="text-white form-label">Descripcion:</label>
                    <textarea placeholder="Muy buenos sus pasteles ;)" className="bg-info-subtle form-control" id="desc-input" rows="3"></textarea>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <button style={{width: "15%",}} type="button" class="btn btn-outline-light btn-danger bg-gradient m-3 btn-lg">Enviar</button>
                </div>
            </form>
        </div>
    )
}