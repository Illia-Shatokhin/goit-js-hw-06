const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", (event) => {
    if (event.target.value.length === Number(validationInput.dataset.length)) {
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.add("invalid");
    }
});

validationInput.addEventListener("focus", (event) => {
    const className = validationInput.classList.value;
    if (className !== "") {
        validationInput.classList.remove(className);
    };
});