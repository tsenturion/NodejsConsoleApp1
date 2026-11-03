const prices = {
    basic: 3000,
    premium: 5000
};

function calculateTotal(state) {
    const monthlyPrice = prices[state.plan];

    const subtotal = monthlyPrice * state.months;

    return state.discount
        ? subtotal * 0.9
        : subtotal;
}

const state = {
    plan: "premium",
    months: 6,
    discount: true
};

console.log(calculateTotal(state)); // 27000