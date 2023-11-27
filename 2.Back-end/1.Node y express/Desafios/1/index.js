const {leer,registrar,vaciar} = require('./operaciones')
arg = process.argv.slice(2)

//leer archivos
if (arg[0] == 'leer'){
    leer(arg[1])
}

//registrar archivos
else if (arg[0] == 'registrar') {
    // Condicionante para que este código funcione tanto para JSON como para otros tipos de extensiones
    if (arg[1].split('.').pop() == 'json') {
        contenido = {
            'nombre': arg[2],
            'edad': arg[3],
            'animal': arg[4],
            'color': arg[5],
            'enfermedad': arg[6]
        };
        registrar(arg[1], [contenido]); // Envolver contenido en un arreglo
    } else {
        registrar(arg[1], arg[2]);
    }
}


//vaciar archivos
else if (arg[0] == 'vaciar'){
    vaciar(arg[1])
}

//Fallo de tipeo
else{
    console.log('Argumento invalido')
}