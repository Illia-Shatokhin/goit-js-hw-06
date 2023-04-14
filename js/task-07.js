const fontSizeControl = document.getElementById("font-size-control");
fontSizeControl.value = fontSizeControl.min;
const text = document.getElementById("text");
fontSizeControl.addEventListener("input", (event) => {
    text.style.fontSize = `${event.target.value}px`;
});



// const fontSizeControl = document.getElementById("font-size-control");
// const text = document.getElementById("text");
// text.style.fontSize = `${fontSizeControl.value}px`;
// fontSizeControl.addEventListener("input", (event) => {
//     text.style.fontSize = `${event.target.value}px`;
// });