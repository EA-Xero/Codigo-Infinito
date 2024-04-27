import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "./Alert";
const Formulario = ({ agregarColaborador }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeFormulario, setMensajeFormulario] = useState("");
  const [mensajeTipo, setMensajeTipo] = useState("");

  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    });
  };

  const validarDatos = (e) => {
    e.preventDefault();

    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setMensajeFormulario("Completa todos los campos!");
      setMensajeTipo("error");
    } else {
      setMensajeFormulario("Usuario agregado exitosamente!");
      setMensajeTipo("success");
      agregarColaborador(colaborador);

      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }

    setMostrarAlerta(true);
  };

  return (
    <>
      <Form onSubmit={validarDatos}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Nombre del Colaborador"
            onChange={handleChange}
            name="nombre"
            value={colaborador.nombre}
          />
          <Form.Control
            className="my-3"
            type="email"
            placeholder="Email del Colaborador"
            onChange={handleChange}
            name="correo"
            value={colaborador.correo}
          />
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Edad del Colaborador"
            onChange={handleChange}
            name="edad"
            value={colaborador.edad}
          />
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Cargo del Colaborador"
            onChange={handleChange}
            name="cargo"
            value={colaborador.cargo}
          />
          <Form.Control
            className="my-3"
            type="text"
            placeholder="Telefono del Colaborador"
            onChange={handleChange}
            name="telefono"
            value={colaborador.telefono}
          />

          <Button variant="primary" type="submit">
            Agregar Colaborador
          </Button>
        </Form.Group>
        {mostrarAlerta && <Alert msg={mensajeFormulario} tipo={mensajeTipo} />}
      </Form>
    </>
  );
};

export default Formulario;
