const {Pool} = require('pg')
const bcrypt = require('bcrypt')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '321',
    database: 'pizzeria',
    allowExitOnIdle: true
})

const users = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '321',
    database: 'users',
    allowExitOnIdle: true
})

const registrarUsuario = async (user) => {
    let { email, password ,pais,direccion,telefono,nombre,apellido } = user
    const passwordEncriptada = bcrypt.hashSync(password,10)
    const values = [nombre, apellido,email,passwordEncriptada,telefono,pais,direccion]
    const consulta = "INSERT INTO usuarios values ($1, $2, $3, $4, $5, $6, $7)"
    await users.query(consulta, values)
}

const login = async(user)=>{
    let {mail,password} = user
    const values = [mail]
    const consulta = "select * from usuarios where email = $1"
    const { rows: usuario } = await users.query(consulta,values)
    const p = usuario[0].password
    const passwordEsCorrecta = bcrypt.compareSync(password, p)
    if (!passwordEsCorrecta)
        throw { code: 401, message: "Email o contraseña incorrecta" }
    return usuario[0].rol
}

const getpizzas = async () => {
    const { rows: pizzas } = await pool.query("SELECT * FROM pizzas")
    return pizzas
}

const newpizza = async (pizza) => {
    const consulta = "Insert Into pizzas (id, name, description, img, ingredientes, price) values (Default,$1,$2,$3,$4,$5)"
    let { name, description, img, ingredientes, price } = pizza
    const values = [name, description, img, ingredientes, price]
    await pool.query(consulta, values)
}

const editpizza = async (pizza) =>{
    let { id, name, description, img, ingredientes, price } = pizza
    const values = [id,name,description,img,ingredientes,price]
    const consulta = "Update pizzas Set name = $2,description = $3, img = $4, ingredientes = $5, price = $6 where id = $1 "
    await pool.query(consulta, values)
}

const deletepizzas = async (pizza) =>{
    let { id } = pizza
    const values = [id]
    const consulta = "Delete from pizzas where id = $1"
    await pool.query(consulta, values)
}

const verify = async (usuario) => {
    let {mail,password} = usuario.user
    let {U} = usuario
    const consulta = "select * from usuarios where email = $1"
    const values = [mail]
    const { rows: user } = await users.query(consulta,values)
    const p = user[0].password
    const passwordEsCorrecta = bcrypt.compareSync(password, p)
    if (passwordEsCorrecta){
        if (user[0].rol == U & user[0].email == mail){
            return true, mail
        }
    }
} 

module.exports = { getpizzas,newpizza,editpizza,deletepizzas,login,registrarUsuario,verify}