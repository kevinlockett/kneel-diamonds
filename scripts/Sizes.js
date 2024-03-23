import { setSizeChoice } from "./transientState.js"
import { buildChoicesHTML } from "./buildHTML.js"

const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}
    
export const Sizes = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)
/*    
    let sizesHTML = `
        <h2>Diamond Carat Sizes</h2>
        <ul>`

    const sizeArr = sizes.map(
        (size) => {

            return `
                <li>
                     <input type="radio" name="size" value="${size.id}" /> ${size.carats}
                 </li>`

        }
    )

     sizesHTML += sizeArr.join("")
     sizesHTML += "</ul>"

     return sizesHTML
*/
    const html = buildChoicesHTML("Diamond Carat Sizes", sizes, "sizeId", "size", "carats", " carats")

    return html
}