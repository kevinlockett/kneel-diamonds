import { Metals } from "./Metals.js"
import { OrderButton } from "./OrderButton.js"
import { Orders } from "./Orders.js"
import { Sizes } from "./Sizes.js"
import { Styles } from "./Styles.js"
import { Types } from "./Types.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalsHTML = await Metals()
    const ordersHTML = await Orders()
    const buttonHTML = OrderButton()
    const sizesHTML = await Sizes()
    const stylesHTML = await Styles()
    const typesHTML = await Types()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices choice__container">
            <section class="choices__metals options">
                ${metalsHTML}
            </section>
            <section class="choices__sizes options">
                ${sizesHTML}
            </section>
            <section class="choices__styles options">
                ${stylesHTML}
            </section>
        </article>
    
        <article class="choices__types">
            ${typesHTML}
        </article>
    
        <article class="orderButton">
            ${buttonHTML}
        </article>
    
        <article class="customOrders">
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML

}

render()

document.addEventListener("orderSubmitted", event => {
    console.log("Order Submitted. Regenerating HTML...")
    render()
})

document.addEventListener("stateChanged", event => {
    console.log("State of data has Changed. Regenerating HTML...")
    render()
})