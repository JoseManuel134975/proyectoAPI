import { getAPI } from '/utils/helpers.js'

const getData = async () => {
    console.log(getAPI('https://fortnite-api.com/v2/shop'));
    const shopJSON = await getAPI('https://fortnite-api.com/v2/shop')



    shopJSON.data.entries.forEach(obj => {
        if ("bundle" in obj) {
            const sectionCards = document.querySelector('.cards')

            const card = document.createElement('article')
            card.className = 'card'

            const img = document.createElement('img')
            const name = document.createElement('h2')
            const regularPrice = document.createElement('p')
            const category = document.createElement('h3')

            if ("image" in obj.bundle) {
                img.src = obj.bundle.image
            }

            if ("name" in obj.bundle) {
                name.textContent = obj.bundle.name
            }

            if ("regularPrice" in obj) {
                regularPrice.textContent = `${obj.regularPrice} V-Bucks`
            }

            if ("layout" in obj) {
                if ("category" in obj.layout) {
                    category.textContent = obj.layout.category
                }
            }

            card.appendChild(img)
            card.appendChild(name)
            card.appendChild(regularPrice)
            card.appendChild(category)

            sectionCards.appendChild(card)
        }
    });
}

document.addEventListener("DOMContentLoaded", getData);