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

module.exports = {obtenerinventario,HATE}