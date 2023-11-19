document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
  initApp();
});

// Define variables
const startButton = document.getElementById("start-button");
const directionsContainer = document.getElementById("directions-container");
const gameGrid = document.getElementById("game-grid");
const gridElements = gameGrid.querySelectorAll(".grid-element");

const initApp = () => {
  console.log("initApp");
  startButton.addEventListener("click", (event) => {
    directionsContainer.style.display = "none";
    gameGrid.style.display = "grid"
    startGame();
  });
};


const startGame = () => {
  console.log("Game started");
  for (let i = 0; i < gridElements.length; i++) {
    let gridElement = gridElements[i];
    let randomNum = determineColor();

    randomNum === 1
      ? (gridElement.style.backgroundColor = "red")
      : gridElement.style.backgroundColor;
  }

  gridElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      element.style.backgroundColor === "red"
        ? (element.style.backgroundColor = "")
        : alert("Nuh uh!");
    });
  });
};


// Functions that are included in the game but not the game logic itself

const determineColor = () => {
  let randomNum = Math.floor(Math.random() * 5) + 1;
  return randomNum;
};
