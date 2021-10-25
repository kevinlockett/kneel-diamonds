import { getMetals, setMetal, getMetalPreselector } from "./dataAccess.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    const metalButton = getMetalPreselector()

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {

        if (metal.id === metalButton) {
            
            html += `<li>
                <input type="radio" name="metal" value="${metal.id}" checked='checked' /> ${metal.metal}
            </li>`

        } else {

            html += `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        }
    }

    html += "</ul>"
    return html

}
