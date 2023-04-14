const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
    if (event.target.value === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = event.target.value;
    };
});