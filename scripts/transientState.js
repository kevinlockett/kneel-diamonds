export const transientState = new Map()
transientState.set("metalId", 1)
transientState.set("sizeId", 1)
transientState.set("styleId", 1)
transientState.set("typeId", 1)

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

export const setTypeChoice = (TypeChoice) => {
    transientState.set("typeId", TypeChoice)
    console.log(transientState)
}

export const submitOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(transientState))
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    transientState.set("metalId", 1)
    transientState.set("sizeId", 1)
    transientState.set("styleId", 1)
    transientState.set("typeId", 1)

    document.dispatchEvent(new CustomEvent("orderSubmitted"))
}
