const {Pool} = require("pg")

const pool = new Pool ({
    user:"postgres",
    host:"localhost",
    database:"plan_de_viajes",
    password:"321",
    allowExitOnIdle: true
})

const agregarEquipamiento = async (id, Equipo) => {
    const consulta = "INSERT INTO equipamiento values ($1, $2)"
    const values = [id, Equipo]
    const result = await pool.query(consulta, values)
    console.log("Equipaje agregado")
}  

const obtenerequipamiento = async () => {
    const {rows} = await pool.query("SELECT * FROM equipamiento")
    console.log(rows)
    return rows
}

module.exports = {
    agregarEquipamiento,
    obtenerequipamiento
}