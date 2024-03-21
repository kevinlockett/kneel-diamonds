import { setMetalChoice } from "./transientState.js"

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)
    
    let metalOptionsHTML = `
        <h2>Precious Metals</h2>
        <ul>`

    const metalsArr = metals.map(
        (metal) => {

            return `
                <li>
                    <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
                </li>`
        }
    )

    metalOptionsHTML += metalsArr.join("")
    metalOptionsHTML += "</ul>"

    return metalOptionsHTML

}    
