const {leerposts,newpost,eliminarpost} = require("./consultas")
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000,()=>{
    console.log("Servidor encendido")
})

app.get("/posts",async (req,res)=>{
    const posts = await leerposts()
    res.json(posts)
})


app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion, likes } = req.body;
    await newpost(titulo, url, descripcion, likes);
    res.send("Post agregado con éxito");
});

app.delete("/posts/:id",async(req,res) =>{
    try{
        const {id} = req.params
        await eliminarpost(id)
        res.send("post eliminado con exito")
    }catch({code,message}){
        res.status(code).send(message)
    }
})