// /*

// This module contains all get*() and set*() functions for data.

// */

// import { database } from "./database.js"

// export const addCustomOrder = () => {
//     // Copy the current state of user choices
//     const newOrder = {...database.orderBuilder}
    
//     // Add a new primary key to the object
//     if ( database.customOrders.length === 0 ) {
//         newOrder.id = 1
//     } else {
//         const lastIndex = database.customOrders.length - 1
//         newOrder.id = database.customOrders[lastIndex].id + 1
//     }
    
//     // Add a timestamp to the order
//     const date = new Date()
//     newOrder.timestamp = date.toLocaleDateString
    
//     // Add the new order object to custom orders state
//     database.customOrders.push(newOrder)
    
//     // Reset the temporary state for user choices
//     database.orderBuilder = {}
    
//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// export const getCustomOrders = () => {
//     return database.customOrders.map(customOrder => ({...customOrder}))
// }

// export const getMetals = () => {
//     return database.metals.map(metal => ({...metal}))
// }

// export const setMetal = (id) => {
//     database.orderBuilder.metalId = id
    
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// export const getMetalPreselector = () => {
//     return database.orderBuilder.metalId
// }

// export const getSizes = () => {
//     return database.sizes.map(size => ({...size}))
// }

// export const setSize = (id) => {
//     database.orderBuilder.sizeId = id
    
//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// export const getSizePreselector = () => {
//     return database.orderBuilder.sizeId
// }

// export const getStyles = () => {
//     return database.styles.map(style => ({...style}))
// }

// export const setStyle = (id) => {
//     database.orderBuilder.styleId = id

//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// export const getStylePreselector = () => {
//     return database.orderBuilder.styleId
// }

// export const getVarieties = () => {
//     return database.varieties.map(variety => ({...variety}))
// }

// export const setVariety = (id) => {
//     database.orderBuilder.varietyId = id

//     document.dispatchEvent(new CustomEvent("stateChanged"))
// }

// export const getVarietyPreselector = () => {
//     return database.orderBuilder.varietyId
// }
