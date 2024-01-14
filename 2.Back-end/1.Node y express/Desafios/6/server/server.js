/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-spacing */
const express = require('express')
const cors = require('cors')
const { register, verificarCredenciales, profile } = require('./Function.js')
const app = express()
const jwt = require('jsonwebtoken')

app.listen(3000, console.log('Server On'))
app.use(cors())
app.use(express.json())

app.post('/usuarios', async (req, res) => {
  try {
    const user = req.body;
    register(user)
    res.send('Registrado con exito')
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = req.body
    const { email } = user
    verificarCredenciales(user)
    const t = jwt.sign(email, 'az_AZ')
    res.send(t)
  } catch (error) {
    res.status(error.code).send(error)
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const token = req.header('authorization').split('Bearer ')[1]
    jwt.verify(token, 'az_AZ');
    const email = jwt.decode(token);
    res.status(200).json(await profile(email));
  } catch (error) {
    console.log(`Ha ocurrido un  error ${error}`)
  }
})