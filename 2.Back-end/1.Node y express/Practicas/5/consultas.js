const { Pool } = require("pg");
const format = require("pg-format")
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "321",
    database: "farmacia",
    port: 5432,
    allowExitOnIdle: true
});

const obternermedicamentos = async ({ limits = 10, order_by = "id_ASC",page = 0}) => {
    const [campo, direccion] = order_by.split("_")
    const offset = page * limits
    const formatedquery = format('Select * from medicamentos order by %s %s LIMIT %s OFFSET %s',campo,direccion,limits,offset)
    const { rows: medicamentos } = await pool.query(formatedquery)
    return medicamentos
}

const obtenerMedicamentosPorFiltros = async ({ stock_min, precio_max }) => {
    let filtros = []
    if (precio_max) filtros.push(`precio <= ${precio_max}`)
    if (stock_min) filtros.push(`stock >= ${stock_min}`)
    let consulta = "SELECT * FROM medicamentos"
    if (filtros.length > 0) {
    filtros = filtros.join(" AND ")
    consulta += ` WHERE ${filtros}`
    }
    const { rows: medicamentos } = await pool.query(consulta)
    return medicamentos
   }


const obternerpersonal = async ({limits = 10,order_by = "id_ASC",page=0}) => {
    const [campo, direccion] = order_by.split("_")
    const offset = page * limits
    const query = format("Select * from personal order by %s %s LIMIT %s OFFSET %s",campo,direccion,limits,offset)
    const {rows:personal} = await pool.query(query) 
    return personal
}

const obternerpersonalPorFiltros = async ({salario_min,salario_max,rol}) =>{
    let filtros = []
    if (salario_min){filtros.push(`salario >= ${salario_min}`)}
    if (salario_max){filtros.push(`salario <= ${salario_max}`)}
    if (rol){filtros.push(`rol = '${rol}'`)}
    let consulta = "select * from personal"
    if (filtros.length > 0){
        filtros = filtros.join(" AND ")
        consulta += ` Where ${filtros}`
    }
    const {rows:personal} = await pool.query(consulta)
    return personal
}

const MHATEOAS = (medicamentos )=>{
    const results = medicamentos.map((m)=>{
        return {
            name:m.nombre,
            href: `/medicamentos/medicamento/${m.id}`
        }
    }).slice(0,5)
    const total = medicamentos.lenght
    const HATEOAS = {
        total, results
    }
    return HATEOAS
}

const PHATEOAS = (personal) =>{
    const results = personal.map((p)=>{
        return {
            name:p.nombre,
            href: `/personal/Empleado/${p.id}`
        }
    }).slice(0,5)
    const total = personal.lenght
    const HATEOAS = {
        results,total
    }
    return HATEOAS
}
module.exports = {obternermedicamentos,obternerpersonal,obtenerMedicamentosPorFiltros,obternerpersonalPorFiltros,PHATEOAS,MHATEOAS}