const value = document.getElementById("value");
const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;

let counterValue = 0;

increment.addEventListener("click", () => {
    counterValue +=1;
    value.textContent = counterValue;
})

decrement.addEventListener("click", () => {
    counterValue -=1;
    value.textContent = counterValue;
})