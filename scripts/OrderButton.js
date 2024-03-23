import { submitOrder } from "./transientState.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
        submitOrder()
        }
    }
)

export const OrderButton = () => {
    return `<button id="orderButton">Create Custom Order</button>`
}