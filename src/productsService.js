

const handleErrors = (error) => {
    // all the error crap could be in here
}

const getProducts = async () => {
    await fetch("http://localhost:3001/products")
    console.log("response:", response) // this line won't run until after the response comes back
    const data = await response.json(); // unsmooshifies the data
    if(!repsonse.ok) {
        handleErrors(response.status)
    }
    console.log("data:", data)
}