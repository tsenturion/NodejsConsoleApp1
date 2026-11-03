function createCourseCard({ course, selected, onSelect }) {
    const card = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = course.title;

    const button = document.createElement("button");
    button.type = "button";

    button.textContent = selected
        ? "Выбран"
        : "Выбрать курс";

    button.disabled = selected;

    button.addEventListener("click", () => {
        onSelect(course.id);
    });

    card.append(title, button);

    return card;
}