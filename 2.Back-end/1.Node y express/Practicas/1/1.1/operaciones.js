const fs = require('fs')

function createFiles(nombre,contenido) {
    fs.writeFileSync(`${nombre}`,`${contenido}`)
}

function readFile(nombre){
    const data = fs.readFileSync(nombre,'utf8')
    console.log(data)
}
module.exports = {readFile, createFiles};