const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'plan_de_viajes',
    password: "321",
    allowExitOnIdle: true

})

const getdate = async () => {
    const result = await pool.query('select now()')
    console.log(result.rows[0].now)
}

getdate()

const agregarViaje = async (destino, presupuesto) => {
    const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)"
    const values = [destino, presupuesto]
    const result = await pool.query(consulta, values)
    console.log("Viaje agregado")
}    

const obtenerViajes = async () => {
    const  {rows}  = await pool.query("SELECT * FROM viajes")
    console.log(rows)
    return rows
}
module.exports = { agregarViaje, obtenerViajes }
