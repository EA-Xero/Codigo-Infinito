const {Pool} = require('pg')
const bcrypt = require('bcrypt')
const pool = new Pool({
    host: 'dpg-cncd2tmn7f5s73bfmfv0-a.oregon-postgres.render.com',
    port: '5432',
    user: 'pizzeria_xoru_user',
    password: '8UIJUEldXwz9rs1JcoKeRrgMNQqKaR6W',
    database: 'pizzeria_xoru',
    ssl:true,
    allowExitOnIdle: true
})

const registrarUsuario = async (user) => {
    let { email, password ,pais,direccion,telefono,nombre,apellido } = user
    const passwordEncriptada = bcrypt.hashSync(password,10)
    const values = [nombre, apellido,email,passwordEncriptada,telefono,pais,direccion]
    const consulta = "INSERT INTO users values ($1, $2, $3, $4, $5, $6, $7)"
    await pool.query(consulta, values)
}

const login = async(user)=>{
    let {email,password} = user
    const values = [email]
    const consulta = "select * from users where email = $1"
    const usuario = await pool.query(consulta,values)
    const p = usuario.rows[0].password
    const passwordEsCorrecta = bcrypt.compareSync(password, p)
    if (!passwordEsCorrecta)
        throw { code: 401, message: "Email o contraseña incorrecta" }
    return usuario.rows[0].rol
}

const getpizzas = async () => {
    try {
        const pizzas = await pool.query("SELECT * FROM pizzas");
        return pizzas.rows;
    } catch (error) {
        throw error;
    }
};

const newpizza = async (pizza) => {
    const consulta = "Insert Into pizzas (id,name,description,img,ingredientes,price) values (default,$1,$2,$3,$4,$5)"
    let { name, description, img, ingredientes, price } = pizza
    const values = [name, description, img, ingredientes, price]
    await pool.query(consulta, values)
}


const modify = async(user,usuario)=>{
    let consulta = "update users set nombre = $1, apellido = $2, password = $4, telefono = $5, pais= $6, direccion = $7 where email = $3"
    let {email} = usuario.user
    const passwordEncriptada = bcrypt.hashSync(user.password,10)
    let values = [user.nombre, user.apellido, email, passwordEncriptada, user.telefono, user.pais, user.direccion]
    await pool.query(consulta,values)
}

const deletepizzas = async (id) =>{
    const values = [id]
    const consulta = "Delete from pizzas where id = $1"
    await pool.query(consulta, values)
}

const verify = async (usuario) => {
    let {email,password} = usuario.user
    let {U} = usuario
    const consulta = "select * from users where email = $1"
    const values = [email]
    const { rows: user } = await pool.query(consulta,values)
    const p = user[0].password
    const passwordEsCorrecta = bcrypt.compareSync(password, p)
    if (passwordEsCorrecta){
        if (U == "admin" & user[0].rol == U & user[0].email == email){
            return true, usuario, "admin" 
        }
        if(user[0].rol == U & user[0].email == email){

            return 'user'
        }
    }
}

const prof = async (usuario) => {
    let {email,password} = usuario.user
    const consulta = "select * from users where email = $1"
    const values = [email]
    const { rows: user } = await pool.query(consulta,values)
    const p = user[0].password
    const passwordEsCorrecta = bcrypt.compareSync(password, p)
    if (passwordEsCorrecta){
        const u = {
            apellido: user[0].apellido,
            direccion: user[0].direccion,
            email: user[0].email,
            nombre: user[0].nombre,
            pais: user[0].pais,
            telefono: user[0].telefono
        }
        return true, u
    }
}

const produc = async (usuario,pedido) =>{
    let {email} = usuario.user
    const datosPedido = pedido.pizzas.map(({ nombre, cantidad }) => ({ nombre, cantidad }));
    const total = pedido.Total;
    const consulta = 'insert into operaciones values (default,$1,$2,$3)'
    const values = [email,total,JSON.stringify(datosPedido)]
    await pool.query(consulta,values)
    return true
}

module.exports = { getpizzas,newpizza,deletepizzas,login,registrarUsuario,verify,prof,modify,produc}