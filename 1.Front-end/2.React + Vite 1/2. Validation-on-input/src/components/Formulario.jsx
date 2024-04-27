import { useState } from "react";
import Alert from "./Alert";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensajeFormulario, setMensajeFormulario] = useState("");
  const [mensajeTipo, setMensajeTipo] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setMensajeFormulario("Completa todos los campos!");
      setMensajeTipo("fill-out");
    } else if (password !== confirmPassword) {
      setMensajeFormulario("Las contraseñas no coinciden!");
      setMensajeTipo("error");
    } else {
      setMensajeFormulario("Cuenta creada exitosamente!");
      setMensajeTipo("success");
      setNombre("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }

    // Mostrar la alerta después de establecer los mensajes
    setMostrarAlerta(true);
  };

  return (
    <>
      <form onSubmit={validarDatos} className="container">
        <div>
          <input
            className="mi-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <input
            className="mi-input"
            type="email"
            name="email"
            placeholder="Tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="mi-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            className="mi-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Registrarse</button>
        </div>{" "}
        {mostrarAlerta && <Alert msg={mensajeFormulario} tipo={mensajeTipo} />}
      </form>
    </>
  );
};

export default Formulario;
