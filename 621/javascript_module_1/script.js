function loadProducts() {
    try {
        const saved = localStorage.getItem("products");

        if (saved === null) {
            return [];
        }

        const data = JSON.parse(saved);

        if (!Array.isArray(data)) {
            return [];
        }

        return data;
    } catch (error) {
        console.log("Не удалось загрузить товары");
        return [];
    }
}

const products = loadProducts();

console.log(products);