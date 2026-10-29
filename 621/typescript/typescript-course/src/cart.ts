export type CartItem = {
    title: string;
    price: number;
    quantity: number;
};

export function calculateCartTotal(items: CartItem[]): number {
    return items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}