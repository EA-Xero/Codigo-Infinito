const fs = require('fs')

function leer(archivo){
    const klk = fs.readFileSync(archivo, 'utf-8')
    //condicionante para que este codigo funcione tanto para json como para otros tipos de extensiones
    if (archivo.split('.').pop() == 'json') {
        JSON.parse(klk).forEach(item => {
            console.log(item);
        })
        return
    } else {
        console.log(klk);
        return
    }
}

function registrar(archivo, contenido) {
    try {
        // Leer el contenido existente del archivo
        let contenidoExistente = '';
        if (fs.existsSync(archivo)) {
            contenidoExistente = fs.readFileSync(archivo, 'utf8');
        }

        // Verificar la extensión del archivo
        const extension = archivo.split('.').pop();

        // Agregar el nuevo contenido dependiendo de la extensión
        let contenidoActualizado = '';
        if (extension === 'json' && contenidoExistente) {
            let arregloExistente = JSON.parse(contenidoExistente);
            arregloExistente.push(...contenido);
            contenidoActualizado = JSON.stringify(arregloExistente);
        } else {
            contenidoActualizado = contenidoExistente + contenido;
        }

        // Escribir el contenido actualizado en el archivo
        fs.writeFileSync(archivo, contenidoActualizado);

        console.log(`Se ha agregado con éxito el contenido en el archivo con nombre ${archivo}`);
    } catch (error) {
        console.error(`Se produjo un error al agregar contenido al archivo: ${error}`);
    }
}
function vaciar(archivo){
    if (archivo.split('.').pop() == 'json') {
        fs.writeFileSync(archivo, "[]")
    } else {
        fs.writeFileSync(archivo, "")
    }
    console.log(`Se vacio con exito el contenido en el archivo con nombre ${archivo}`)
}

module.exports = {leer,registrar,vaciar}