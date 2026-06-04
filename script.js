const moreButton = document.getElementById("more-btn");

let clickCounter = 0;

moreButton.addEventListener("click", () => {
  clickCounter++;
  const currBox = document.getElementById(`box${clickCounter}`);
  currBox.classList.remove("hidden");
})