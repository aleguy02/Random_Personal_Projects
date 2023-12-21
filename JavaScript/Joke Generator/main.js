const getJoke = async (element) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  let joke = await response.json();
  joke = joke.value;
  element.innerHTML = joke;
};

// DOM processes
addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
  initApp();
});

const initApp = () => {
  console.log("initApp");
  randomizeButton.addEventListener("click", (event) => {
    getJoke(jokeLine);;
  });
};

// I'm gonna define the DOM variables all at the bottom for the sake of organization
const jokeLine = document.getElementById("joke-line");
const randomizeButton = document.getElementById("randomize-button");
