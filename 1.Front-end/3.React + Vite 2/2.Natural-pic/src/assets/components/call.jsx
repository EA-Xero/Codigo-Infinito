export default async function Call() {
    try {
        const response = await fetch("fotos.json");
        const data = await response.json()
        return data
    } catch (error) {
        alert(`Error al cargar la pagina: ${error}`);
    }
}

