let money = 950;
let price = 250;
let count = 0;

while (money >= price) {
    money -= price;
    count++;
}

console.log("Куплено товаров:", count);
console.log("Осталось денег:", money);