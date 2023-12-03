const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

app.listen(3000, console.log("¡Servidor encendido!"));
app.post("/productos", (req, res) => {
  const producto = req.body;
  const productos = JSON.parse(fs.readFileSync("productos.json"));
  productos.push(producto);
  fs.writeFileSync("productos.json",JSON.stringify(productos))
  res.send("Producto añadido")
});

app.delete("/productos/:id",(req,res) =>{
  const {id} = req.params
  const productos = JSON.parse(fs.readFileSync("productos.json"))
  const index = productos.findIndex(p => p.id == id)
  productos.splice(index,1)
  fs.writeFileSync("productos.json",JSON.stringify(productos))
  res.send("eliminado exitosamente")}
)

app.put("/productos/:id", (req, res) => {
  const { id } = req.params
  const producto = req.body
  const productos = JSON.parse(fs.readFileSync("productos.json"))
  const index = productos.findIndex(p => p.id == id)
  productos[index] = producto
  fs.writeFileSync("productos.json", JSON.stringify(productos))
  res.send("Producto modificado con éxito")
  }
)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
  }
)