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

const courses = [
    { id: 1, title: "JavaScript", hours: 40, price: 12000 },
    { id: 2, title: "Python", hours: 48, price: 15000 },
    { id: 3, title: "PostgreSQL", hours: 32, price: 11000 }
];

const container = document.querySelector("#courses");

for (const course of courses) {
    container.append(createCourseCard(course));
}