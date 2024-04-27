import Formulario from "./Formulario";
import Socialbutton from "./SocialButton";

const Registro = () => {
  return (
    <div>
      <h1>Crea una cuenta</h1>
      <div className="containerRRSS">
        <div className="icn">
          <Socialbutton icon="fa-brands fa-facebook fa-3x" />
        </div>
        <div className="icn">
          <Socialbutton icon="fa-brands fa-github fa-3x" />
        </div>
        <div className="icn">
          <Socialbutton icon="fa-brands fa-linkedin fa-3x" />
        </div>
      </div>
      <h5> O usa tu email para registrarse</h5>
      <Formulario />
    </div>
  );
};

export default Registro;
