// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
// Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    let firstInput = loginForm.children[0].firstElementChild;
    let secondInput = loginForm.children[1].firstElementChild;
    if (firstInput.value === "" || secondInput.value === "") {
        alert ("fill in all fields");
    } else {
        let firstInputName = firstInput.name;
        let secondInputName = secondInput.name;
        const obj = {
            [firstInputName] : firstInput.value,
            [secondInputName] : secondInput.value,
        };
        console.log(obj);
        loginForm.reset();
    }
});