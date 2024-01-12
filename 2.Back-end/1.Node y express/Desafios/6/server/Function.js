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
  console.log(user)
  const { email, password, rol, lenguage } = user
  const P = bcrypt.hashSync(password)
  const ins = 'insert into usuarios(email,password,rol,lenguage) values($1,$2,$3,$4)'
  const values = [email, P, rol, lenguage]
  await pool.query(ins, values)
}

module.exports = { register }
