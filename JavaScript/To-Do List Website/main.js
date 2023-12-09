document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM Content Loaded')
    initApp()
})

const body = document.getElementById("body")
const item = body.querySelectorAll(".item")

const initApp = () => {
    console.log('App')
    // when a string is passed into the input, then enter is pressed -> change display of input box to none, pass string into the inner html of the p element, change p element display to visible
    item.forEach((element) => {
        let textInput = element.querySelectorAll(".text-input")
        textInput = textInput[0]
        let toDoText = element.getElementsByClassName("to-do-text")
        toDoText = toDoText[0]
        

        textInput.addEventListener("keydown", (event) => {
            if (event.key === 'Enter') {
                console.log('enter pressed')
                textInput.style.display = "none"
                toDoText.innerHTML = textInput.value
                toDoText.style.display = "flex"
            }
        })

    })

    // when checkbox input is checked, add strikethrough decorator to p element, when it is unchecked, unstrikethrough
}