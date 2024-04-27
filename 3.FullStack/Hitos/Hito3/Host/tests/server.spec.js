const server = require('../Server/server.js')
const request = require('supertest')

describe("Operaciones pizzeria", () => {
    var id = 30
    var T = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1haWwiOiJlZGdhckBlZGdhci5jb20iLCJwYXNzd29yZCI6IjEyMzQ1In0sIlUiOiJhZG1pbiIsImlhdCI6MTcwODQzOTY0NCwiZXhwIjoxNzA4NDQwMjQ0fQ.5Gm_DFy00EYwMf7Y5miebb6JQ4qUt-Qi4aNltNgaRtA"
    it("Ruta get funciona como corresponde",async () =>{
        const response = await request(server).get("/")
        const status = response.statusCode
        expect(status).toBe(200)
    })
    it("Subida nueva pizza",async()=>{
        const newpizza = {
            id: id,
            name:"Carbonara", 
            description:"Hola", 
            img:"html...", 
            ingredientes:"Carbonara", 
            price:7000
        }
        const response = await request(server).post("/pizza").send(newpizza).set("Authorization",T)
        const status = response.statusCode
        expect(status).toBe(200)
    })
    it("edicion de pizza existente",async()=>{
        const pizza = {
            id:id,
            name:"peldon", 
            description:"Hola", 
            img:"html...", 
            ingredientes:"hacking", 
            price:9999
        }
        const response = await request(server).put("/pizza").send(pizza).set("Authorization",T)
        expect(response.statusCode).toBe(200)
    })
    it("borrar pizza existente",async()=>{
        const pizza = {
            id:id
        }
        const response = await request(server).delete("/pizza").send(pizza).set("Authorization",T)
        expect(response.statusCode).toBe(200)
    })
});