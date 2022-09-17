

export const fetchAllProducts = async () => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    return data
}