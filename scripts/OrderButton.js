import { placeOrder } from "./transientState.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
        placeOrder()
        }
    }
)

export const OrderButton = () => {
    return `<button id="orderButton">Create Custom Order</button>`
}