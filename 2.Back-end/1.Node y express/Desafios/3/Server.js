const {leerposts,newpost} = require("./consultas")
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

/* app.post("./posts",async (req,res)=>{
    const { titulo, img, descripcion, likes } = req.body
    await newpost( titulo, img, descripcion, likes )
    res.send("Post agregado con exito")
}) */

app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    await newpost(titulo, img, descripcion, likes);
    res.send("Post agregado con éxito");
  });