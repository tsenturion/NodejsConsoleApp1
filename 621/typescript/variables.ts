type OrderStatus = "new" | "paid" | "cancelled";

interface Order {
    id: number;
    amount: number;
    status: OrderStatus;
}

const order: Order = {
    id: 101,
    amount: 5000,
    status: "new"
};

function getStatusMessage(order: Order): string {
    if (order.status === "paid") {
        return "Заказ оплачен";
    }

    if (order.status === "cancelled") {
        return "Заказ отменён";
    }

    return "Заказ создан";
}

console.log(getStatusMessage(order));