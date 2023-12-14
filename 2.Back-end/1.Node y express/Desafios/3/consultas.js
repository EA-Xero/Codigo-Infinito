/* eslint-disable no-undef */
const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'likeme',
    password:'321',
    allowExitOnIdle: true
})

const newpost = async (titulo,url,descripcion,likes) =>{
    const consulta = "insert into posts values (Default,$1,$2,$3,$4)"
    const values = [titulo,url,descripcion,likes]
    const result = await pool.query(consulta,values)
}

const leerposts = async()=>{
    const {rows} = await pool.query("select * from posts")
    return rows
}

const eliminarpost = async(id) =>{
        const consulta = "delete from posts where id = $1"
        const values = [id]
        const {rowCount} = await pool.query(consulta,values)
        if (rowCount === 0){
            throw {code:404,message:"No se encuentra un posts con el id asociado"}
        }
}

module.exports = {newpost,leerposts,eliminarpost}