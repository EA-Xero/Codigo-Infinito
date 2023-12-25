const {obtenerinventario,HATE} = require("./consultas.js")
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