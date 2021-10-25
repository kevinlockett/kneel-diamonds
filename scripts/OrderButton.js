
import { addCustomOrder } from "./dataAccess.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
        addCustomOrder()
        }
    }
)

export const OrderButton = () => {
    return `<button id="orderButton">Create Custom Order</button>`
}

