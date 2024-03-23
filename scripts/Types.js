import { setTypeChoice } from "./transientState.js"
import { buildTypesHTML } from "./buildHTML.js"

const handleTypeChoice = (event) => {
    if (event.target.name === "type") {
        setTypeChoice(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}

export const Types = async () => {
    const response = await fetch("http://localhost:8088/types")
    const types = await response.json()

    document.addEventListener("change", handleTypeChoice)
    
/*
    let typesHTML = `
        <h2>Jewelry types</h2>
        <div class="types">`

    const typeArr = types.map(
        (type) => {

            return `
                <div class="type">
                     <input type="radio" name="type" value="${type.id}" /> ${type.style}
                 </div>`

        }
    )

            typesHTML += typeArr.join("")
        typesHTML += '</div>'
     return typesHTML
*/
    const html = buildTypesHTML("Jewelry Types", types)

    return html
}
