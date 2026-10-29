export function calculateTotal(price, quantity, discount) {
    const subtotal = price * quantity;
    const discountAmount = subtotal * discount / 100;

    return subtotal - discountAmount;
}