import { setSizeChoice } from "./transientState.js"

const handleSizeChoice = (event) => {
    if (event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             setSize(parseInt(event.target.value))
//         }
//     }
//     )
    
export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)
    
    let sizeOptionsHTML = `
        <h2>Diamond Carat Sizes</h2>
        <ul>`

    const sizeArr = sizes.map(
        (size) => {

       
//      const sizeButton = getSizePreselector()
        
//         // Use .map() for converting objects to <li> elements
//      const listItems = sizes.map(size => {
            
//            if (size.id === sizeButton) {

//                 return `<li>
//                     <input type="radio" name="size" value="${size.id}" checked='checked'/> ${size.carets}
//                 </li>`
//             } else {

            return `
                <li>
                     <input type="radio" name="size" value="${size.id}" /> ${size.carats}
                 </li>`

        }
    )

     sizeOptionsHTML += sizeArr.join("")
     sizeOptionsHTML += "</ul>"

     return sizeOptionsHTML
}