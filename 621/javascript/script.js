const state = {
    orders: [
        { id: 1, amount: 1000 },
        { id: 2, amount: 2000 }
    ]
};

function updateOrderAmount(state, orderId, newAmount) {
    return {
        ...state,
        orders: state.orders.map(order => {
            if (order.id === orderId) {
                return {
                    ...order,
                    amount: newAmount
                };
            }

            return order;
        })
    };
}

const updatedState = updateOrderAmount(state, 1, 5000);

console.log(state.orders[0].amount);        // 1000
console.log(updatedState.orders[0].amount); // 5000

console.log(updatedState === state); // false