const { Pool } = require("pg")
const format = require("pg-format")

const pool = new Pool({
    host: "localhost",
    password: "321",
    user: "postgres",
    database: "joyas",
    port: 5432,
    allowExitOnIdle: true
})

const obtenerinventario = async ({limits = 10,page = 0,order_by = "id_ASC"}) =>{
    const [campo,direccion] = order_by.split("_")
    const offset = page * limits
    const queryy = format("select * from inventario order by %s %s limit %s offset %s",campo,direccion,limits,offset)
    const { rows: inventario } = await pool.query(queryy)
    return inventario
}

const HATE =  (inventario) =>{
    const results = inventario.map((m) =>{
        return{
            name: m.nombre,
            categoria:m.categoria,
            precio:m.precio,
            stock:m.stock,
            href: `/inventario/joya/${m.id}`
        }
    }).slice(0,3)
    const total = inventario.lenght
    const HATEOAS = {
        total, results
    }
    return HATEOAS
}

const obtenerinventarioconfiltros = async ({categoria,precio_max,precio_min,metal}) => {
    let filtros = []
    let valores = []
    const agregarfiltro =  (campo,comparador,valor) => {
        valores.push(valor)
        const { length  } = filtros
        if (typeof valor === 'string'){
            filtros.push(`${campo} ${comparador} ${valor}`)
        }
        else {
            filtros.push(`${campo} ${comparador} $${length + 1}`)
          }
    }
    if (categoria){agregarfiltro('categoria ','= ',`'${categoria}' `)}
    if (precio_max){agregarfiltro('precio ','<= ',`${precio_max} `)}
    if (precio_min){agregarfiltro('precio ','>= ',`${precio_min} `)}
    if (metal){agregarfiltro('metal ','= ',`'${metal}'`)}

    let consulta = "select * from inventario"

    if (filtros.length > 0){
        filtros = filtros.join(" AND ")
        consulta += ` Where ${filtros}`
    }
    
    const client = await pool.connect()
    try {
      const { rows: inventario } = await client.query(consulta)
      return inventario
    } finally {
      client.release()
    }
  }

module.exports = {obtenerinventario,HATE,obtenerinventarioconfiltros}