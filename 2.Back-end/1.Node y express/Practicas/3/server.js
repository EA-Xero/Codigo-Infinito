const {obtenerequipamiento,agregarEquipamiento} = require('./equipamiento.js');
const express = require('express');
const app = express()
app.use(express.json());
app.listen(3001, console.log("¡Servidor encendido!"));  
app.get("/equipamientos", async (req, res) => {
    const equipamiento = await obtenerequipamiento();
    res.json(equipamiento);
})

app.post("/equipamientos", async (req, res) => {
    const { id, nombre } = req.body
    await agregarEquipamiento(id, nombre)
    res.send("Equipo agregado con éxito")
})