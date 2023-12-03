const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json());
app.listen(3000, console.log("¡Servidor encendido!"))
app.use(express.json())
app.get("/fecha",(req,res) => {
    const fecha = new Date()
    res.send(`"${fecha}"`)
})
app.post("/usuarios", (req,res) => {
    const usuarios = JSON.parse(fs.readFileSync("usuarios.json"))
    const usuario = req.body
    usuarios.push(usuario)
    fs.writeFileSync("usuarios.json",JSON.stringify(usuarios))
    res.send("Usuario creado correctamente! ")
})
//fallo desconocido
app.delete("/usuarios/:id",(res,req) =>{
    const {id} = req.params
    const usuarios = JSON.parse(fs.readFileSync("productos.json"))
    const index = usuarios.findIndex(u => u.id == id)
    usuarios.splice(index,1)
    fs.writeFileSync("usuarios.json",JSON.stringify(usuarios))
    res.send("Usuario eliminado exitosamente")}
  )