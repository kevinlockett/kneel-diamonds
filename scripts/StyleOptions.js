import { setStyleChoice } from "./transientState.js"

const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChoice)
    
    let sizeOptionsHTML = `
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

    sizeOptionsHTML += stylesArr.join("")
    sizeOptionsHTML += "</ul>"

     return sizeOptionsHTML
}