document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded')
    initApp()
})

const initApp = () => {
    console.log('App initialized')

    const interactButton = document.getElementById("interact-button")
    interactButton.addEventListener('click', (event) => {
        const container = document.getElementById("container")
        const numContainer = container.querySelector("#number-container")
        const number = numContainer.querySelectorAll('h1')
        for (let i = 0; i < number.length; i++) {
            number[i].textContent = Math.floor(Math.random() * 10)
        }
    })
}
