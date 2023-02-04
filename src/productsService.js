export const getAllProducts = async () => {
    const response = await fetch("http://localhost:3001/products")
    const data = await response.json() // unsmooshes the data
    return data
}