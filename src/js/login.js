import { getAPI } from "/utils/helpers.js";


const validateData = async (u, p) => {
    console.log(getAPI('../data/clients.json'));
    const usersJSON = await getAPI('../data/clients.json')
    if (usersJSON.users.find((e) => e.username == u && e.password == p)) {
        location.href = '../src/views/products.html'
    }
}




const main = () => {
    const submit = document.getElementById('login')

    submit.addEventListener("click", (event) => {
        const user = document.getElementById('user')
        const pass = document.getElementById('pass')
        event.preventDefault()
        validateData(user.value, pass.value)
    })
}

document.addEventListener("DOMContentLoaded", main);