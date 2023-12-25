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

module.exports = {obtenerinventario}