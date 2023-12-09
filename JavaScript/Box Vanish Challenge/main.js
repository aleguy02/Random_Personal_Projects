document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
  initApp();
});

// Define variables
const startButton = document.getElementById("start-button");
const directionsContainer = document.getElementById("directions-container");
const gameGrid = document.getElementById("game-grid");
const gridElements = gameGrid.querySelectorAll(".grid-element");
const winScreenContainer = document.getElementById("win-screen-container");
console.log(gridElements);

const initApp = () => {
  console.log("initApp");
  startButton.addEventListener("click", (event) => {
    directionsContainer.style.display = "none";
    gameGrid.style.display = "grid";
    defineGameElements();

    checkForWin();
  });
};

const defineGameElements = () => {
  console.log("Game started");
  for (let i = 0; i < gridElements.length; i++) {
    let gridElement = gridElements[i];
    let randomNum = determineColor();

    randomNum === 1
      ? (gridElement.style.backgroundColor = "red")
      : gridElement.style.backgroundColor;

    gridElement.addEventListener("click", (event) => {
      gridElement.style.backgroundColor === "red"
        ? (gridElement.style.backgroundColor = "")
        : alert("Nuh uh!");
    });
  }
};

const checkForWin = () => {
  // every time the game grid is clicked, build a new array of backgroundColors. Then, if 'red' is not in the array, switch screens
  gameGrid.addEventListener("click", (event) => {
    let backgroundColorArray = [];
    gridElements.forEach((item) => {
      backgroundColorArray.push(item.style.backgroundColor);
    });
    if (backgroundColorArray.includes("red")) {
      console.log("There is still a red box");
    } else {
      console.log("There are no red boxes");
      gameGrid.style.display = "none";
      winScreenContainer.style.display = "flex";
    }
  });
};

const determineColor = () => {  // included in the game but not the game logic itself
  let randomNum = Math.floor(Math.random() * 5) + 1;
  return randomNum;
};
