export function calculateCartTotal(items) {
    return items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}
//# sourceMappingURL=cart.js.map