const { agregarViaje, obtenerViajes } = require("./consultas");
const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000, console.log("SERVIDOR ENCENDIDO"));
app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});


app.post("/viajes", async (req, res) => {
    const { destino, presupuesto } = req.body
    await agregarViaje(destino, presupuesto)
    res.send("Viaje agregado con éxito")
    })