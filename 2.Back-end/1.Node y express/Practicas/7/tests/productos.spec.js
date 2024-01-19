const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD", () => {
    it("obteniendo un 200", async () => {
        const response = await request(server).get("/productos").send()
        const status = response.statusCode
        expect(status).toBe(200)
    })
    it("obteniendo un 404", async () => {
        const response = await request(server).get("/producto").send()
        const status = response.statusCode
        expect(status).toBe(404)
    })
    it("Obteniendo un producto", async () => {
        const { body } = await request(server).get("/productos/1").send();
        const producto = body;
        expect(producto).toBeInstanceOf(Object);
    });
    it("Obteniendo un producto", async () => {
        const { body } = await request(server).get("/productos/1").send();
        const producto = Array.from(body)
        expect(producto).toBeInstanceOf(Array);
    });
    it("Enviando un nuevo producto", async () => {
        const id = Math.floor(Math.random() * 999);
        const producto = { id, nombre: "Nuevo producto" };
        const { body: productos } = await request(server).post("/productos").send(producto);
        expect(productos).toContainEqual(producto);
    });
    it("Enviando un id erroneo", async () => {
        const id = -1
        const producto = { id }
        const res = await request(server).put("/productos").send(producto)
        const code = res.statusCode
        expect(code).toBe(404)
    })
    it("Eliminando un producto", async () => {
        const jwt = "token";
        const idDeProductoAEliminar = 4
        const { body: productos } = await request(server).delete(`/productos/${idDeProductoAEliminar}`).set("Authorization", jwt).send();
        const ids = productos.map(p => p.id)
        expect(ids).not.toContain(idDeProductoAEliminar);
    });
    it("Eliminando un producto", async () => {
        const idDeProductoAEliminar = 4
        const res = await request(server).delete(`/productos/${idDeProductoAEliminar}`).send();
        expect(res.statusCode).toBe(400);
    });
});
