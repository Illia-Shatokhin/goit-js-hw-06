const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainer = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  fragment.appendChild(item);
});
listContainer.appendChild(fragment);