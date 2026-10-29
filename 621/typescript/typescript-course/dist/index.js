import { calculateCartTotal } from "./cart.js";
const items = [
    {
        title: "Монитор",
        price: 15000,
        quantity: 2
    },
    {
        title: "Мышь",
        price: 1200,
        quantity: 1
    }
];
const total = calculateCartTotal(items);
console.log(`Общая стоимость: ${total} руб.`);
//# sourceMappingURL=index.js.map