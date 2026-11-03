function createCourseCard(course) {
    const card = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = course.title;

    const duration = document.createElement("p");
    duration.textContent = `Продолжительность: ${course.hours} ч.`;

    const price = document.createElement("p");
    price.textContent = `Стоимость: ${course.price} руб.`;

    card.append(title, duration, price);

    return card;
}