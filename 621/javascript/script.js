const state = {
    orders: [
        { id: 1, amount: 1000 },
        { id: 2, amount: 2000 }
    ]
};

const updatedState = state;

updatedState.orders[0].amount = 5000;

console.log(state.orders[0].amount); // 5000
console.log(updatedState === state); // true