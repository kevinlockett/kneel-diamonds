export const transientState = new Map()
transientState.set("metalId", 0)
transientState.set("sizeId", 0)
transientState.set("styleId", 0)
transientState.set("typeId", 0)

export const setMetalChoice = (metalChoice) => {
    transientState.set("metalId", metalChoice)
    console.log(transientState)
}

export const setSizeChoice = (sizeChoice) => {
    transientState.set("sizeId", sizeChoice)
    console.log(transientState)
}

export const setStyleChoice = (styleChoice) => {
    transientState.set("styleId", styleChoice)
    console.log(transientState)
}

export const setTypeChoice = (typeChoice) => {
    transientState.set("typeId", typeChoice)
    console.log(transientState)
}

export const submitOrder = async () => {
    const order = Object.fromEntries(transientState)
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    transientState.set("metalId", 0)
    transientState.set("sizeId", 0)
    transientState.set("styleId", 0)
    transientState.set("typeId", 0)

    document.dispatchEvent(new CustomEvent("orderSubmitted"))
}
