const {
  obtenerequipamiento,
  agregarEquipamiento,
  modificarequipamiento,
  eliminarequipo,
} = require("./equipamiento.js");
const express = require("express");
const app = express();
app.use(express.json());
app.listen(3001, console.log("¡Servidor encendido!"));
app.get("/equipamientos", async (req, res) => {
  const equipamiento = await obtenerequipamiento();
  res.json(equipamiento);
});

app.post("/equipamientos", async (req, res) => {
  try {
    const { id, nombre } = req.body;
    await agregarEquipamiento(id, nombre);
    res.send("Equipo agregado con éxito");
  } catch (error) {
    const { code } = error;
    if (code == "23502") {
      res
        .status(400)
        .send(
          "Se ha violado la restricción NOT NULL en uno de los campos de la tabla"
        );
    } else {
      res.status(500).send(error);
    }
  }
});

app.put("/equipamientos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.query;
  try{
    await modificarequipamiento(nombre, id);
    res.send("Equipo modificado con exito");
  }
  catch({code,message}){
    res.status(code).send(message)
  }
});

app.delete("/equipamientos/:id", async (req, res) => {
  const { id } = req.params;
  await eliminarequipo(id);
  res.send("equipamiento eliminado con exito");
});
