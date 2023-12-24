const {obternermedicamentos,obternerpersonal,obtenerMedicamentosPorFiltros,obternerpersonalPorFiltros,MHATEOAS,PHATEOAS} = require("./consultas.js")
const express = require('express')
const app = express()
app.listen(3000, console.log('klk'))


app.get('/medicamentos', async (req, res) => {
  const { limits, order_by,page} = req.query 
  const medicamentos = await obternermedicamentos({limits,order_by,page})
  const HATEOAS =  MHATEOAS(medicamentos)
  res.json(HATEOAS)
}) 

app.get('/medicamentos/filtros', async (req, res) => {
  const {stock_min,precio_max} = req.query
  const medicamentos = await obtenerMedicamentosPorFiltros({stock_min,precio_max})
  res.json(medicamentos)
}) 

app.get('/personal', async (req, res) => {
  const {limits,order_by,page} = req.query
  const personal = await obternerpersonal({limits,order_by,page})
  const HATEOAS =  PHATEOAS(personal)
  res.json(HATEOAS)
})

app.get('/personal/filtros', async (req,res)=>{
  const {salario_min,salario_max,rol} = req.query
  const personal = await obternerpersonalPorFiltros({salario_min,salario_max,rol})
  res.json(personal)
})

app.get("*", (req, res) => {
  res.status(404).send("Esta ruta no existe")
})  