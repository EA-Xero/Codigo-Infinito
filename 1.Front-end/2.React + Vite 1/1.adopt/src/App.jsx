import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import Mycard from "./Mycard";
import React from "react";
import Footer from "./footer";
function App() {
  return (
    <>
      <Header titulo="Adopta un Perrito" />
      <div className="container">
        <Mycard
          image="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Morkie1.jpg?h=f708a346&itok=dtiJqpm3"
          title="Morkie"
          tb="Adopt"
          tc="success"
          ba = "Hogareño"
          bg="dark"
          texto="Morkies, unos peculiares perritos que surgen del cruce entre yorkshire terrier y bichón maltés. Estos perros tienen unas características muy especiales como, por ejemplo, son una de las razas caninas consideradas más leales y audaces"
        />
        <Mycard
          image="https://t2.ea.ltmcdn.com/es/posts/3/2/9/curiosidades_del_pastor_aleman_23923_600_square.jpg"
          title="Pastor Aleman"
          tb="Adopt"
          tc="warning"
          bg="dark"
          ba = "Perro de caza"
          texto ="Pastor alemán, pocas personas se detienen a pensar que fue criado para conducir y proteger rebaños. La mayoría de la gente ve en el pastor alemán a un perro policía, al entrañable amigo de los niños, al compañero fiel capaz de dar la vida por su familia, al lazarillo que ve por su amigo ciego, al rescatista que arriesga su vida por personas que no conoce y al héroe canino por excelencia."
        />
        <Mycard
          image="https://soyunperro.com/wp-content/uploads/2017/10/tipos-de-chihuahua.jpg"
          title="Chihuahua"
          tb="Adopt"
          tc="danger"
          bg="dark"
          ba = "Hogareño"
          texto="El Perro chihuahua o chihuahueño es una raza de perro pequeña muy popular por su reducido tamaño. Además de ser una mascota adorable se trata de un compañero inteligente, inquieto y curioso que ofrecerá todo su amor a quienes cuiden de él."
        />
        <Mycard
          image="https://www.animalfiel.com/wp-content/uploads/2021/03/tipos-de-beagle.jpg"
          title="Beagle"
          tb="Adopt"
          tc="primary"
          bg="dark"
          ba = "Perro Guardian"
          texto="Beagle es una raza de perro muy popular por su gran inteligencia, buen temperamento y gran capacidad de trabajo."
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
