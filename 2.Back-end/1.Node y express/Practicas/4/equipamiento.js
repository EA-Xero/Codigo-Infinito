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

const modificarequipamiento = async (nombre,id) =>{
    const consulta = "Update equipamiento set nombre = $1 where id = $2"
    const values = [nombre,id]
    const {rowCount} = await pool.query(consulta,values)
    if(rowCount === 0){
        throw { code:404,message:"No se a encontrado equipo con ese id"}
    }
}

const eliminarequipo = async (id) =>{
    const consulta = "delete from equipamiento where id = $1"
    const values = [id]
    const result = await pool.query(consulta,values)
}

module.exports = {
    agregarEquipamiento,
    obtenerequipamiento,
    modificarequipamiento,
    eliminarequipo
}