const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(cors());
app.use(express.json());

app.listen(3000, console.log("server running"));
app.get("/canciones", (req, res) => {
  const canciones = JSON.parse(fs.readFileSync("canciones.json"));
  res.send(canciones);
});

app.post("/canciones", (req, res) => {
  const canciones = JSON.parse(fs.readFileSync("canciones.json"));
  canciones.push(req.body);
  fs.writeFileSync("canciones.json", JSON.stringify(canciones));
  res.send(canciones);
});

app.put("/canciones/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convertir id a tipo numérico
  const canciones = JSON.parse(fs.readFileSync("canciones.json"));
  const cancionActualizadaIndex = canciones.findIndex((c) => c.id === id);
  if (cancionActualizadaIndex !== -1) {
    canciones[cancionActualizadaIndex] = req.body;
    fs.writeFileSync("canciones.json", JSON.stringify(canciones));
    res.send(canciones);
  } else {
    res.status(404).send("Canción no encontrada");
  }
});

app.delete("/canciones/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convertir id a tipo numérico
  const canciones = JSON.parse(fs.readFileSync("canciones.json"));
  const cancionEliminadaIndex = canciones.findIndex((c) => c.id === id);
  if (cancionEliminadaIndex !== -1) {
        canciones.splice(cancionEliminadaIndex, 1);
        fs.writeFileSync("canciones.json", JSON.stringify(canciones));
        res.send(canciones);
  } else {
    res.status(404).send("Canción no encontrada");
  }
});
