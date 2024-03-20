// import { KneelDiamonds } from "./KneelDiamonds.js"
import { MetalOptions } from "./MetalOptions.js"
import { OrderButton } from "./OrderButton.js"
import { Orders } from "./Orders.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const ordersHTML = await Orders()
    const placeOrderButton = OrderButton()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices choice__container">
            <section class="choices__metals options">
                ${metalOptionsHTML}
            </section>
            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>
            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>
        </article>
    
        <article class="choices__varieties">
                <h2>Varieties</h2>
        </article>
    
        <article class="orderButton">
            ${placeOrderButton}
        </article>
    
        <article class="customOrders">
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML

    document.addEventListener("newOrderCreated", event => {
        console.log("State of data has Changed. Regenerating HTML...")
        render()
    })
}

render()