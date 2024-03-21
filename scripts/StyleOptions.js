import { setStyleChoice } from "./transientState.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "style") {
//             setStyle(parseInt(event.target.value))
//         }
//     }
// )

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)
    
    let sizeOptionsHTML = `
        <h2>Jewelry Styles</h2>
        <ul>`

    const stylesArr = styles.map(
        (style) => {

//     const styleButton = getStylePreselector()
    
//     // Use .map() for converting objects to <li> elements
//     const listItemsArray = styles.map(style => {
            
//         if (style.id === styleButton) {

//             return `<li>
//                 <input type="radio" name="style" value="${style.id}" checked='checked'/> ${style.style}
//             </li>`
    
//         } else {

            return `
                <li>
                    <input type="radio" name="style" value="${style.id}" /> ${style.style}
                </li>`

        }
    )

    sizeOptionsHTML += stylesArr.join("")
    sizeOptionsHTML += "</ul>"

     return sizeOptionsHTML
}