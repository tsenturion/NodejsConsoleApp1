localStorage.setItem("quantity", 12);
localStorage.setItem("notifications", false);

const quantity = Number(
    localStorage.getItem("quantity")
);

const notifications =
    localStorage.getItem("notifications") === "true";

console.log(quantity);      // 12
console.log(notifications); // false