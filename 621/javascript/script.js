function createCourseTitle({ title, level }) {
    const heading = document.createElement("h2");

    heading.textContent = `${title} — ${level}`;

    return heading;
}

const firstTitle = createCourseTitle({
    title: "JavaScript",
    level: "Базовый"
});

const secondTitle = createCourseTitle({
    title: "React",
    level: "Продвинутый"
});

console.log(firstTitle.textContent);
console.log(secondTitle.textContent);