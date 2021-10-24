import { getVarieties, setVariety, getVariety } from "./dataAccess.js"

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

    const varietyButton = getVariety()

    // Use .map() for converting objects to <li> elements
    const listItems = varieties.map(variety => {

        if (variety.id === varietyButton) {

            return `<input type="radio" name="variety" value="${variety.id}" checked = 'checked'/> ${variety.style}`

        } else {

            return `<input type="radio" name="variety" value="${variety.id}" /> ${variety.style}`

        }

    })

    html += listItems.join(" ")

    return html
    
}

