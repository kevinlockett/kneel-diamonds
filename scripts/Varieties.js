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
    let html = ""

    // Use .map() for converting objects to <li> elements
    const listItems = varieties.map(variety => {
        return `<input type="radio" name="variety" value="${variety.id}" /> ${variety.style}`
    })

    html += listItems.join(" ")

    return html
}

