const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Ruta get funciona como corresponde",async () =>{
        const R = await request(server).get("/cafes").send()
        expect(R.statusCode).toBe(200)
        expect(JSON.parse(R.text).length).toBeGreaterThanOrEqual(1)
    })
    it("intentando eliminar cafe con id no existente", async ()=>{
        const T = "token"
        const id = 5
        const cafe = await request(server).delete(`/cafes/${id}`).set("Authorization", T).send();
        expect(cafe.statusCode).toBe(404)
    })
    it("Subiendo nuevo cafe", async () => {
        const id = Math.floor(Math.random() * 999)
        const newcofe = {
            "id":`${id}`,
            "nombre":"largo"
        }
        const R = await request(server).post("/cafes").send(newcofe)
        const T = JSON.parse(R.text)
        expect(T).toContainEqual(newcofe)
        expect(R.statusCode).toBe(201)
    })
    it("Enviando id del payload diferente al del parametro",async () => {
        const id = Math.floor(Math.random() * 999)
        const TrueID = 4
        const Editcofe = {
            "id": `${id}`,
            "nombre": "Cafe con leche"
        }
        const R = await request(server).put(`/cafes/${TrueID}`).send(Editcofe)
        expect(R.statusCode).toBe(400)
    })
});
