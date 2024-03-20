// const buildOrderListItem = (order) => {

//     const customOrders = getCustomOrders()

//     if ( customOrders.length >= 0 ) {

//         const metals = getMetals()

//         // Remember that the function you pass to find() must return true/false
//         const foundMetal = metals.find(
//             (metal) => {
//                 return metal.id === order.metalId
//             }
//         )

//         const sizes = getSizes()

//         const foundSize = sizes.find(
//             (size) => {
//                 return size.id === order.sizeId
//             }
//         )

//         const styles = getStyles()

//         const foundStyle = styles.find(
//             (style) => {
//                 return style.id === order.styleId                
//             }
//         )

//         const varieties = getVarieties()
        
//         const foundVariety = varieties.find(
//             (variety) => {
//                 return variety.id === order.varietyId
//             }
//         )

//         const totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * foundVariety.priceAdjustment
            
//         const costString = totalCost.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD"
//         })

//         return `<li>
//             Order #${order.id}: ${foundMetal.metal} ${foundStyle.style} ${foundVariety.style} with ${foundSize.carets} caret diamond costs ${costString}
//         </li>`
//     }
// }


export const Orders = async () => {
    const response = await fetch(
        "http://localhost:8088/orders?_expand=metal&_expand=size&_expand=style"
    )
    const orders = await response.json()

    let ordersHTML = `
        <h2>Custom Jewelry Orders</h2>
        <ul>`

    const ordersArr = orders.map(
        (order) => {

            return `
            <li>
                Order #${order.id}
            </li>`
            
        }
    )

    ordersHTML += ordersArr.join("")
    ordersHTML += `</ul >`
        
    return ordersHTML
}