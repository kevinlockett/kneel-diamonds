import { getVarieties, setVariety } from "./database.js"

const varieties = getVarieties()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "variety") {
            setVariety(parseInt(event.target.value))
        }
    }
)

export const Varieties = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = varieties.map(variety => {
        return `<li>
            <input type="radio" name="variety" value="${variety.id}" /> ${variety.style}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

