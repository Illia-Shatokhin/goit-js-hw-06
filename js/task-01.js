const list = [...document.getElementById("categories").children];
console.log(`Number of categories: ${list.length}`);
list.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});