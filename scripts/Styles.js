import { setStyleChoice } from "./transientState.js"
import { buildChoicesHTML } from "./buildHTML.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}

export const Styles = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)
    
/* 
    let sizesHTML = `
        <h2>Jewelry Styles</h2>
        <ul>`

    const stylesArr = styles.map(
        (style) => {

            return `
                <li>
                    <input type="radio" name="style" value="${style.id}" /> ${style.style}
                </li>`

        }
    )

    sizesHTML += stylesArr.join("")
    sizesHTML += "</ul>"

     return sizesHTML
*/
    const html = buildChoicesHTML("Jewelry Styles", styles, "styleId", "style", "style", "")

    return html
}