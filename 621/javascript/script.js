const products = [
    { id: 1, title: "Ноутбук", category: "computers", available: true },
    { id: 2, title: "Монитор", category: "computers", available: false },
    { id: 3, title: "Телефон", category: "phones", available: true },
    { id: 4, title: "Планшет", category: "phones", available: true }
];

const state = {
    category: "computers",
    onlyAvailable: true,
    search: ""
};

function getVisibleProducts(products, state) {
    return products.filter(product => {
        const matchesCategory =
            state.category === "all" ||
            product.category === state.category;

        const matchesAvailability =
            !state.onlyAvailable || product.available;

        const matchesSearch = product.title
            .toLowerCase()
            .includes(state.search.toLowerCase());

        return (
            matchesCategory &&
            matchesAvailability &&
            matchesSearch
        );
    });
}

console.log(getVisibleProducts(products, state));