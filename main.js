// export function getAPI(url) {
//     fetch(url).then((result) => result.json())
//     const prueba = fetch(url).then((result) => result.json())
//     console.log(prueba);
//   }

// // console.log(getAPI('https://fortnite-api.com/v2/cosmetics'))
// getAPI('https://fortnite-api.com/v2/cosmetics/')

// export function getAPIData(callback) {
  
// }

export const getAPI = async () => {
  try {
    const response = await fetch('https://fortnite-api.com/v2/cosmetics/')

    const data = response.json()

    console.log(data);
  }catch(error) {
    console.log(error);
  }
}

getAPI()