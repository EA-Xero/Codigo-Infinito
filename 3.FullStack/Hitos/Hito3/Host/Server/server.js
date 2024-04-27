const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {
    getpizzas,
    newpizza,
    editpizza,
    deletepizzas,
    login,
    registrarUsuario,
    verify
} = require("./consultas.js")

app.use(cors());
app.use(express.json());

app.listen(3000, console.log("SERVER ON"));

app.post("/profile/login", async (req, res) => {
    try {
        const user = req.body;
        const U = await login(user)
        console.log(U)
        const token = jwt.sign({ user, U }, "az_AZ", { expiresIn: 600 });
        res.send(token)
    } catch (error) {
        res.status(error.code || 500).send(error);
    }
})

app.post("/profile/register", async (req, res) => {
    try {
        const user = req.body
        await registrarUsuario(user)
        res.send("Usuario creado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/", async (req, res) => {
    try {
        const pizzas = await getpizzas()
        res.status(200).json(pizzas)
    } catch (error) {
        console.log(`Se ha producido un error :${error}`)
        res.status(error.code).send(error)
    }
})

app.post("/pizza", async (req, res) => {
    try {
        if (req.headers.authorization) {
            const pizza = req.body
            token = req.headers.authorization
            const usuario = jwt.decode(token)
            if (await verify(usuario)) {
                await newpizza(pizza)
                res.status(200).send(`Se ha creado la pizza con exito por el usuario:${usuario.user.mail}`)
            }
        }
    } catch (error) {
        console.log(`Se ha producido un error :${error}`)
        res.status(error.code).send(error)
    }
})

app.put("/pizza", async (req, res) => {
    try {
        if (req.headers.authorization) {
            const pizza = req.body
            token = req.headers.authorization
            const usuario = jwt.decode(token)
            if (await verify(usuario)) {
                await editpizza(pizza)
                res.status(200).send(`Se ha encontrado y modificado la pizza con id:${pizza.id} por el usuario: ${usuario.user.mail}`)
            }
        }
        else {
            throw { code: 404, message: "No existe ese usuario" }
        }
    } catch (error) {
        res.status(error.code).send(error)
    }
})

app.delete("/pizza", async (req, res) => {
    try {
        if (req.headers.authorization) {
            const pizza = req.body
            token = req.headers.authorization
            const usuario = jwt.decode(token)
            if (await verify(usuario)) {
                await deletepizzas(pizza)
                res.status(200).send(`Eliminada la pizza con id ${pizza.id} por el usuario: ${usuario.user.mail}`)
            }
            else {
                throw { code: 401, message: "Email o contraseña incorrecta" }
            }
        }
    } catch (error) {
        console.log(`Se ha producido un error :${error}`)
        res.status(error.code).send(error)
    }
})

module.exports = app