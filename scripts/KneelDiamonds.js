
import { CustomOrders } from "./CustomOrders.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { OrderButton } from "./OrderButton.js"
import { Varieties } from "./Varieties.js"

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article class="choices__varieties">
            ${Varieties()}
        </article>

        <article class="orderButton">
            ${OrderButton()}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${CustomOrders()}
        </article>
    `
}

