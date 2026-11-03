function calculateDiscount(price, percent) {
    return price * (1 - percent / 100);
}

console.log(calculateDiscount(1000, 10)); // 900
console.log(calculateDiscount(1000, 10)); // 900

let discount = 10;

function calculatePrice(price) {
    return price * (1 - discount / 100);
}

console.log(calculatePrice(1000)); // 900

discount = 20;

console.log(calculatePrice(1000)); // 800


const user = {
    name: "Анна",
    visits: 0
};

function getUserInfo(user) {
    user.visits++;

    return `${user.name}: ${user.visits}`;
}

console.log(getUserInfo(user)); // Анна: 1
console.log(getUserInfo(user)); // Анна: 2