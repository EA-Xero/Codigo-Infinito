const { Pool } = require('pg')
const bcrypt = require('bcryptjs')
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '321',
  database: 'softjobs',
  allowExitOnIdle: true
})

const register = async (user) => {
  const { email, password, rol, lenguage } = user
  const P = bcrypt.hashSync(password)
  const ins = 'insert into usuarios(email,password,rol,lenguage) values($1,$2,$3,$4)'
  const values = [email, P, rol, lenguage]
  await pool.query(ins, values)
}

const verificarCredenciales = async (user) => {
  const values = [user.email]
  const consulta = 'SELECT * FROM usuarios WHERE email = $1'
  const { rows: [usuario], rowCount } = await pool.query(consulta, values)
  const { password: passwordEncriptada } = usuario
  const passwordEsCorrecta = bcrypt.compareSync(user.password, passwordEncriptada)
  // eslint-disable-next-line no-throw-literal
  if (!passwordEsCorrecta || !rowCount) { throw { code: 401, message: 'Email o contraseña incorrecta' } }
}

const profile = async (email) => {
  const q = 'Select * from usuarios where email = $1'
  const values = [email]
  const { rows: [user] } = await pool.query(q, values)
  return user
}
module.exports = { register, verificarCredenciales, profile }
