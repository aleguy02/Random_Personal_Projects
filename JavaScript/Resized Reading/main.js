document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded")
    initApp();
})

const readingWindow = document.getElementById('reading-window')
const fontSize = document.getElementById('fontSize');
console.log(fontSize)

const initApp = () => {
    console.log('initApp')
    updateFontSize()
}

const updateFontSize = () => {

    const enteredSize = fontSize.value;
    console.log(enteredSize)
    /// TO DO: FINISH THIS FUNCTION
    /*
    const isValidSize = /^\d+$/.test(enteredSize);

    if(isValidSize) {
        output.style.fontSize = enteredSize + 'px';
    }
    */
}


