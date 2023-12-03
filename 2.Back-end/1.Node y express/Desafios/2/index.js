const express = require("express")
const app = express()
const cors = require("cors")
const fs = require("fs")
app.use(cors())
app.use(express.json())

app.listen(3000,console.log("server running"))
app.get("/canciones",(req,res)=>{
    const canciones = JSON.parse(fs.readFileSync("canciones.json"))
    res.send(canciones)
})

app.post("/canciones",(req,res)=>{
    const canciones = JSON.parse(fs.readFileSync("canciones.json"))
    canciones.push(req.body)
    fs.writeFileSync("canciones.json",JSON.stringify(canciones))
    res.send(canciones)
})

app.put("/canciones/:id",(req,res)=>{
    const canciones = JSON.parse(fs.readFileSync("canciones.json"))
    canciones[req.params.id] = req.body
    fs.writeFileSync("canciones.json",JSON.stringify(canciones))
    res.send(canciones)
})