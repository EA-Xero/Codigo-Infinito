const {obtenerinventario,HATE,obtenerinventarioconfiltros} = require("./consultas.js")
const express = require("express")
const app = express()

app.listen(3000,console.log("Server encendido"))

app.get("/joyas", async (req,res) => {
    try{
        const { limits, page , order_by } = req.query
        const joyas = await obtenerinventario({ limits, page , order_by })
        const HATEOAS = HATE(joyas)
        res.json(HATEOAS)
    }
    catch{console.error(error);}
})

app.get("/joyas/filtros",async (req,res) => {
    try {
        const {precio_max,metal,categoria,precio_min} = req.query
        const joyas = await obtenerinventarioconfiltros({precio_max,metal,categoria,precio_min})
        res.json(joyas)
    } catch (error) {
        console.log(error)
    }
})