function createBadge(text, color = "#eeeeee") {
    const badge = document.createElement("span");

    badge.textContent = text;
    badge.style.backgroundColor = color;
    badge.style.padding = "5px 10px";
    badge.style.borderRadius = "5px";

    return badge;
}