import { getSizes, setSize, getSizePreselector } from "./dataAccess.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
    )
    
    export const DiamondSizes = () => {
        let html = "<ul>"
        
        const sizeButton = getSizePreselector()
        
        // Use .map() for converting objects to <li> elements
        const listItems = sizes.map(size => {
            
            if (size.id === sizeButton) {

                return `<li>
                    <input type="radio" name="size" value="${size.id}" checked='checked'/> ${size.carets}
                </li>`
            } else {

                return `<li>
                    <input type="radio" name="size" value="${size.id}" /> ${size.carets}
                </li>`

            }
        
        })

    html += listItems.join("")
    html += "</ul>"

    return html
}

