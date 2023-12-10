/* eslint-disable no-undef */
const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'likeme',
    password:'321',
    allowExitOnIdle: true
})

const newpost = async (titulo,img,descripcion,likes) =>{
    const consulta = "insert into posts values (Default,$1,$2,$3,$4)"
    const values = [titulo,img,descripcion,likes]
    const result = await pool.query(consulta,values)
    console.log(result)
    console.log("Post agregado")
}

const leerposts = async()=>{
    const {rows} = await pool.query("select * from posts")
    console.log(rows)
    return rows
}

module.exports = {newpost,leerposts}