function createBadge(text, color = "#eeeeee") {
    const badge = document.createElement("span");

    badge.textContent = text;
    badge.style.backgroundColor = color;
    badge.style.padding = "5px 10px";
    badge.style.borderRadius = "5px";

    return badge;
}

function createCourseCard(course) {
    const card = document.createElement("article");

    const title = document.createElement("h2");
    title.textContent = course.title;

    const levelBadge = createBadge(
        course.level,
        course.level === "Начальный"
            ? "#d5f5d5"
            : "#ffe7b3"
    );

    card.append(title, levelBadge);

    return card;
}