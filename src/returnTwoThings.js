
function getMeal() {
    const main = "spaghetti";
    const drink = "water";
    const side = { size: "xl", type: "doritos" }
    return [main, drink, side]
}

const [theHealthyPart, theBoringPart, theExcitingPart] = getMeal(); // ["spaghetti", "water", "chips"]

const { size, type } = theExcitingPart

console.log(type)