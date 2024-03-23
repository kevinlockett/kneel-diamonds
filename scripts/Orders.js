export const Orders = async () => {
    const response = await fetch(
        "http://localhost:8088/orders?_embed=metal&_embed=size&_embed=style&_embed=type"
    )
    const orders = await response.json()

    let ordersHTML = `
        <h2>Custom Jewelry Orders</h2>
        <ul>`

    const ordersArr = orders.map(
        (order) => {

            var subTotalPrice = order.metal.price + order.size.price + order.style.price

            const totalPrice = subTotalPrice * order.type.priceAdjustment

            const USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })

            return `
            <div>
                <b>Order:</b> #${order.id} 
                <b>| Description:</b> A ${order.size.carats} carat diamond set in a ${order.style.style} style ${order.metal.metal} ${order.type.style}
                <b>| Cost:</b> ${USDollar.format(totalPrice)}
            </div>`
            
        }
    )

    ordersHTML += ordersArr.join("")
    ordersHTML += `</ul >`
        
    return ordersHTML
}
