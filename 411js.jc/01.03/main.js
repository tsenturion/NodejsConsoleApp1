const element = document.querySelector("p");
/*
document.querySelector('#title');
document.querySelector('.menu');
document.querySelector('div');
*/
console.log(element);

const items = document.querySelectorAll("li");
console.log(items);

element.textContent = "Новый текст страницы";

element.innerHTML = "<strong>Новый текст страницы</strong>";