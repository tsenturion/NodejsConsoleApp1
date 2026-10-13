const productName = "Клавиатура";
const price = 3500;
const quantity = 2;

function calculateTotal(price, quantity) {
    return price * quantity;
}

function applyDiscount(total) {
    if (total >= 5000) {
        return total * 0.9;
    }

    return total;
}

const total = calculateTotal(price, quantity);
const finalPrice = applyDiscount(total);

console.log("Товар:", productName);
console.log("Количество:", quantity);
console.log("Стоимость без скидки:", total);
console.log("Стоимость с учётом скидки:", finalPrice);