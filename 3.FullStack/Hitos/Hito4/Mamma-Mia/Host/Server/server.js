const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {
    getpizzas,
    newpizza,
    prof,
    deletepizzas,
    login,
    registrarUsuario,
    verify,
    modify,
    produc
} = require("./consultas.js")

app.use(cors());
app.use(express.json());

app.listen(3000, console.log("SERVER ON"));

app.put("/user", async (req, res) => {
    try {
        if (req.headers.authorization) {
            const user = req.body
            T = req.headers.authorization.split('Bearer ')
            const token = T[1]
            const usuario = jwt.decode(token)
            if (await verify(usuario)) {
                modify(user,usuario)
                res.status(200).send(`se a modificado con exito el usuario con email:${usuario.user.email}`)
            }
        }else{
            throw {code:404,message:"No se a encontrado usuario con las credenciales, o no ha iniciado sesion"}
        }
    }
    catch(error){
        console.log(error)
        res.status(response.error.code || 500).send(`A ocurrido un error ${error}`)
    }
})

app.post("/profile/login", async (req, res) => {
    try {
        const user = req.body;
        const U = await login(user)
        const token = jwt.sign({user,U}, "az_AZ", { expiresIn: 600 });
        res.send(token)
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);
        res.status(500).send("Error en el servidor o credenciales incorrectas");
    }
})

app.post("/profile/register", async (req, res) => {
    try {
        const user = req.body
        await registrarUsuario(user)
        res.send("Usuario creado con éxito")
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);
        res.status(500).send("Error en el servidor");
    }
})

app.post("/", async (req, res) => {
    try {
        if (req.headers.authorization) {
            T = req.headers.authorization.split('Bearer ')
            const token = T[1]
            const usuario = jwt.decode(token)
            const a = await verify(usuario)
            if(a == 'admin'){
                const pizzas = await getpizzas();
                const data = 
                [rol = 'admin',pizzas]
                res.send(data);
            }
            if(a == 'user') {
                const pizzas = await getpizzas();
                const data = 
                [rol = 'user',pizzas]
                res.send(data);
            }
        }
        else{
            const pizzas = await getpizzas();
            const data = 
                [rol = 'Usuario sin rol',pizzas]
            res.send(data);
        }
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);
        res.status(500).send("Error en el servidor");
    }
});

app.post("/pizza", async (req, res) => {
    try {
        if (req.headers.authorization) {
            const pizza = req.body
            T = req.headers.authorization.split('Bearer ')
            const token = T[1]
            const usuario = jwt.decode(token)
            if (await verify(usuario)) {
                await newpizza(pizza)
                res.status(200).send(`Se ha creado la pizza con exito por el usuario:${usuario.user.email}`)
            }
        }
    } catch (error) {
        console.log(`Se ha producido un error :${error}`)
        res.status(error.code).send(error)
    }
})

app.post("/profile/log", async (req, res) => {
    try {
        if (req.headers.authorization) {
            T = req.headers.authorization.split('Bearer ')
            const token = T[1]
            const usuario = jwt.decode(token)
            const data = await prof(usuario)
            if (data) {
                res.status(200).send(data)
            }
        }
        else {
            return
        }
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);
        res.status(500).send("Error en el servidor");
    }
})

app.delete("/pizza/:id", async (req, res) => {
    try {
        if (req.headers.authorization) {
            const pizza = req.params.id
            T = req.headers.authorization.split('Bearer ')
            const token = T[1]
            const usuario = jwt.decode(token)
            if (await verify(usuario)) {
                await deletepizzas(pizza)
                res.status(200).send(`Eliminada la pizza con id ${pizza} por el usuario: ${usuario.user.email}`)
            }
            else {
                throw { code: 401, message: "Email o contraseña incorrecta" }
            }
        }
    } catch (error) {
        console.log(`Se ha producido un error: ${error}`);
        res.status(500).send("Error en el servidor");
    }
})

app.post("/compra",async (req,res) =>{
    try {
        if(req.headers.authorization){
            const pedido = req.body
            T = req.headers.authorization.split('Bearer ')
                const token = T[1]
                const usuario = jwt.decode(token)
                if (await verify(usuario)) {
                    await produc(usuario,pedido)
                    console.log(`se ha realizado la compra con el usuario ${usuario.user.email},`)
                    res.status(200).send(`Pedido en camino!`)
                }
    
        }
        else{
            res.send(`Compra cancelada, usuario no existe o a expirado la sesion `)
        }
    } catch (error) {
        console.log(error)
        res.statusCode(500).send(error)
    }
})

module.exports = app