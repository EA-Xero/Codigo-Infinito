const {obtenerinventario,HATE,obtenerinventarioconfiltros} = require("./consultas.js")
const express = require("express")
const app = express()

app.listen(3000,console.log("Server encendido"))

const middle = (req,res,next) => {
    const ruta = req.originalUrl
    console.log(`Se ha hecho una consulta a la ruta:${ruta}`)
    const send = res.send
    res.send = function(body){
        console.log(`La respuesta ha sido: ${body}`)
        send.call(this,body)
    }
    next()
}

app.use(middle)

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