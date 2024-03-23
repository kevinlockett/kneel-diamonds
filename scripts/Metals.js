import { setMetalChoice } from "./transientState.js"
import { buildChoicesHTML } from "./buildHTML.js"


const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}


export const Metals = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    
    document.addEventListener("change", handleMetalChoice)
    
    const html = buildChoicesHTML("Precious Metals", metals, "metalId", "metal", "metal", "")

    return html
}