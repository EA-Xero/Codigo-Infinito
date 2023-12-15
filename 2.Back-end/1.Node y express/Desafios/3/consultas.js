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
    console.log("Post agregado")
    console.log("Datos recibidos en newpost:", titulo, url, descripcion, likes);
}

const leerposts = async()=>{
    const {rows} = await pool.query("select * from posts")
    return rows
}

module.exports = {newpost,leerposts}