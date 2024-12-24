import { getAPI } from '/utils/helpers.js'

const getData = async () => {
    console.log(getAPI('https://fortnite-api.com/v2/shop'));
    const shopJSON = await getAPI('https://fortnite-api.com/v2/shop')



    shopJSON.data.entries.forEach(obj => {
        if("bundle" in obj) {
                const img = document.createElement('img')
                if("image" in obj.bundle) {
                        img.src = obj.bundle.image
                        
                }

            
            document.body.appendChild(img)
        }
    });
} 

document.addEventListener("DOMContentLoaded", getData);