/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000,()=>{
    console.log("Servidor encendido")
})

