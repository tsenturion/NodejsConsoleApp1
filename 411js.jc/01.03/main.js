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

const title = document.querySelector("h1");
title.style.color = "red";
title.style.fontSize = "32px";
//font-size

element.classList.add("active");

element.classList.remove("active");

element.classList.contains("active"); // true или false

element.classList.toggle("active");

const div = document.createElement("div");
div.textContent = "Новый элемент";
document.body.append(div);

/*
parent.append(child);
parent.prepend(child);
parent.before(newElement);
parent.after(newElement);
*/

element.remove();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("Кнопка была нажата!");
});