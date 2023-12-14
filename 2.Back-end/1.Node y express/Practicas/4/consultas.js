const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "plan_de_viajes",
  password: "321",
  allowExitOnIdle: true,
});

const getdate = async () => {
  const result = await pool.query("select now()");
  console.log(result.rows[0].now);
};

getdate();

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)";
  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);
  console.log("Viaje agregado");
};

const obtenerViajes = async () => {
  const { rows } = await pool.query("SELECT * FROM viajes");
  console.log(rows);
  return rows;
};

const modificarpresupuesto = async (presupuesto, id) => {
  const consulta = "update viajes set presupuesto = $1 where id = $2 ";
  const values = [presupuesto, id];
  const { rowCount } = await pool.query(consulta, values);
  if (rowCount === 0) {
    throw { code: 404, message: "No se consiguió ningún viaje con este id" };
  }
};

const eliminarviaje = async (id) => {
  const consulta = "delete from viajes where id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
};

const obtenerviaje = async (id) => {
  const consulta = "SELECT * FROM viajes WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
  const [viaje] = result.rows;
  return viaje;
};

module.exports = {
  agregarViaje,
  obtenerViajes,
  modificarpresupuesto,
  eliminarviaje,
  obtenerviaje,
};
