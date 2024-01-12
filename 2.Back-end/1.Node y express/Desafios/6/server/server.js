/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable comma-spacing */
const express = require('express')
const cors = require('cors')
const { register } = require('./Function.js')
const app = express()

app.listen(3000, console.log('Server On'))
app.use(cors())
app.use(express.json())

app.post('/usuarios', async (req, res) => {
  try {
    const user = req.body;
    console.log(user)
    register(user)
    res.send('Registrado con exito')
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});