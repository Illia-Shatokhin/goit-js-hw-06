function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.getElementById("boxes");
const controlsContainer = document.getElementById("controls");
let inputValue = 0;
let width = 30;
let height = 30;



controlsContainer.firstElementChild.addEventListener("input", () => {
  inputValue = Number(controlsContainer.firstElementChild.value);
});
controlsContainer.children[1].addEventListener("click", () => createBoxes(inputValue));
controlsContainer.lastElementChild.addEventListener("click", () => destroyBoxes());



function createBoxes(amount) {
  let str = "";
  for (let i = 0; i < amount; i++) {
    const hexColor = getRandomHexColor();
    str += `<div style="background-color: ${hexColor}; width: ${width}px; height: ${height}px;">a</div>`;
    width += 10;
    height += 10;
  }
  boxContainer.insertAdjacentHTML("beforeend", str);
};

function destroyBoxes() {
  boxContainer.innerHTML = "";
  width = 30;
  height = 30;
};