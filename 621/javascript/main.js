function calculateTotal(price, quantity) {
    debugger;

    const subtotal = price + quantity;
    return subtotal;
}

const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    const total = calculateTotal(500, 3);
    result.textContent = total;
});