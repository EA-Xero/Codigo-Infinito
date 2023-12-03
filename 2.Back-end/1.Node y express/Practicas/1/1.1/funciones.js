const fs = require('fs');
const vaciarJSON = (nombreDelArchivo) => {
fs.writeFileSync(nombreDelArchivo, '[]')
}
module.exports = { vaciarJSON }