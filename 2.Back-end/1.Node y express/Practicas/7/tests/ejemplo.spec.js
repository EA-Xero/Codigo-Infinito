const sumar = (a, b) => a + b
const multiplicar = (a, b) => a * b
describe('Testing unitario con Jest', () => {
    it("Comprobando el resultado de una sumatoria", () => {
        const n1 = 4
        const n2 = 5
        const resultado = sumar(n1, n2)
        expect(resultado).toBe(9)
    })
    it("comprobando resultado de una multiplicacion", () => {
        const n1 = 4
        const n2 = 5
        const resultado = multiplicar(n1, n2)
        expect(resultado).toBe(20)
    })
})
