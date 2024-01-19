document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");
});

const readingWindow = document.getElementById("reading-window");
const fontSize = document.getElementById("font-size");

const updateFontSize = () => {
  const newFontSize = fontSize.value;

  let isValidSize = false;
  if (newFontSize >= 8 && newFontSize <= 60) {
    isValidSize = true;
  }

  if (isValidSize) {
    readingWindow.style.fontSize = newFontSize + "px";
  }
};
