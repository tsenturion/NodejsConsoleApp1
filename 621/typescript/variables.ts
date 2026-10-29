type OrderStatus = "new" | "paid" | "cancelled";

function getStatusText(status: OrderStatus): string {
    switch (status) {
        case "new":
            return "Новый заказ";

        case "paid":
            return "Оплачен";

        case "cancelled":
            return "Отменён";

        default:
            const unexpected: never = status;
            return unexpected;
    }
}

console.log(getStatusText("paid")); // Оплачен