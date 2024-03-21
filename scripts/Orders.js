export const Orders = async () => {
    const response = await fetch(
        "http://localhost:8088/orders?_embed=metal&_embed=size&_embed=style"
    )
    const orders = await response.json()

    let ordersHTML = `
        <h2>Custom Jewelry Orders</h2>
        <ul>`

    const ordersArr = orders.map(
        (order) => {

            const orderPrice = order.metal.price + order.size.price + order.style.price

            const USDollar = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            })

            return `
            <div>
                <b>Order:</b> #${order.id} 
                <b>| Description:</b> A ${order.size.carats} carat diamond set in a ${order.style.style} style ${order.metal.metal} ring
                <b>| Cost:</b> ${USDollar.format(orderPrice)}
            </div>`
            
        }
    )

    ordersHTML += ordersArr.join("")
    ordersHTML += `</ul >`
        
    return ordersHTML
}