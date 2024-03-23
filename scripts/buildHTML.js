import { transientState } from "./transientState.js"

export const buildChoicesHTML = (
    header,
    selectedArray,
    stateId,
    stateType,
    stateSelector,
    innerHTMLExtras
) => {
    const currentId = transientState.get(stateId)
    let html = `
        <h2>${header}</h2>
        <ul>`
    const itemsArray = selectedArray.map(
        (item) => {

            return `
                <li>
                    <input
                        type="radio"
                        name="${stateType}" 
                        id=${stateType}--${item.id}" 
                        value="${item.id}" 
                        ${(item.id === currentId) ? ' checked' : ''}
                    />
                    <label for="${stateType}--${item.id}">
                        ${item[stateSelector]}${innerHTMLExtras}
                    </label>
                </li>
            `
        }
    )

    html += itemsArray.join("")
    html += `</ul>`    
    return html
}

export const buildTypesHTML = (
    header,
    typesArray
) => {
    const currentId = transientState.get("typeId")
    let html = `
        <h2>${header}</h2>
        <div class="types">
    `
    const typeArr = typesArray.map(
        (type) => {
            return `
                <div class="type">
                    <input
                        type="radio"
                        name="type"
                        id="type--${type.id}"
                        value="${type.id}"
                        ${(type.id === currentId) ? ' checked' : ''}
                    />
                    <label for="type--${type.id}">
                        ${type.style}
                    </label>
                </div>
            `
        }
    )

    html += typeArr.join("")
    html += `</div>`
    return html
}