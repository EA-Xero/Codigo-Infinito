const fs = require('fs')

/* console.log('Hola Node Js 👋')
const fecha = new Date()
console.log(fecha) */

/* const tareas = `
1. Lavar la ropa
2. Hacer la cama
3. Comer`
fs.writeFileSync('tarea.txt',tareas) */

/* const tareas = [
    {Texto: 'Lavar la ropa'},
    {Texto: 'Hacer la cama'},
    {Texto: 'Comer'}
]
fs.writeFileSync('tarea.json',JSON.stringify(tareas)) */

/* const s = 'node es genial ;)'
fs.writeFileSync('saludo.doc',s) */

/* const s = 'Node Js \t Express Js'
fs.writeFileSync('test.xls',s)  */

/* const autos = [
    {
    marca: 'Susuki',
    modelo: 'Kicks',
    },
    {
    marca: 'Toyota',
    modelo: 'Corola',
    },
    {
    marca: 'GAC',
    modelo: 'GS4',
    }
]
fs.writeFileSync('autos.json',JSON.stringify(autos)) */

/* const tareas = [
{ text: 'Ir al gimnasio' },
{ text: 'Buscar al niño al colegio' },
{ text: 'Pagar los gastos comunes' },
{ text: 'Cargar bencina' }
]
fs.writeFileSync('tareas.json', JSON.stringify(tareas) ) */

/* const autos = [
    {
    marca: 'Susuki',
    modelo: 'Kicks',
    },
    {
    marca: 'Toyota',
    modelo: 'Corola',
    },
    {
    marca: 'GAC',
    modelo: 'GS4',
    },
    {
    marca: 'Changan',
    modelo: 'CS35 Plus',
    }
]
fs.writeFileSync('autos.json', JSON.stringify(autos)) */

/* const tareas = fs.readFileSync('tareas.json', 'utf8')
console.log(tareas)  */

/* const html = fs.readFileSync('index.html', 'utf8')
console.log(html)  */

/* const tareas = fs.readFileSync('tareas.json', 'utf8')
JSON.parse(tareas).forEach((tarea) => {
console.log(tarea)
}) */

/* const autos = fs.readFileSync('autos.json', 'utf8')
JSON.parse(autos).forEach((auto) => {
    console.log(auto)
}) */

/* const { saludar, darLasGracias } = require('./2/modales.js')
saludar('Edgar')
darLasGracias('Edgar') */

/* const {vaciarJSON} = require('./2/funciones.js')
vaciarJSON('autos.json') */

/* const {readFile,createFiles} = require('./2/operaciones')
readFile('tareas.json')
createFiles('hola.txt','micuchurrumin <3') */

/* const argumentos = process.argv.slice(2)
argumentos.forEach(argumento => {console.log(argumento)
}) */

/* const { saludar, darLasGracias } = require('./2/modales.js')
const argumentos = process.argv.slice(2)
const nombreParaSaludar = argumentos[0]
const nombreParaAgradecer = argumentos[1]
saludar(nombreParaSaludar)
darLasGracias(nombreParaAgradecer) */

/* const argumentos = process.argv.slice(2)
const {readFile} = require('./2/operaciones')
const P = argumentos[0]
readFile(P) */

const argumentos = process.argv.slice(2)
const {createFiles} = require('./2/operaciones')
const P = argumentos[0]
const Y = argumentos[1]
createFiles(P,Y)