function App() {
    const fruits = ["яблоко", "банан", "груша"];

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    )
}

const items = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const items = ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"];




function App() {
    const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Mike" },
        { id: 3, name: "Sara" }
    ]

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

function App() {
    const products = [
        { id: 1, name: "Телефон", price: 500 },
        { id: 2, name: "Ноутбук", price: 1200 },
        { id: 3, name: "Наушники", price: 150 },
        { id: 4, name: "Клавиатура", price: 90 }
    ]

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Цена: {product.price}</p>
                </div>
            ))}
        </div>
    )
}

function Product({ product }) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Цена: {product.price}</p>
        </div>
    )
}

function App() {
    const prioducts = [
        { id: 1, name: "Телефон", price: 500 },
        { id: 2, name: "Ноутбук", price: 1200 },
        { id: 3, name: "Наушники", price: 150 },
        { id: 4, name: "Клавиатура", price: 90 }
    ]

    return (
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}


function App() {
    const items = [];

    return (
        <div>
            {items.length === 0
                ? <p>Список пуст</p>
                : items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))
            }
        </div>
    )
}

function App() {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            {numbers
                .filter((n) => n % 2 === 0)
                .map((n) => (
                    <p key={n}>{n}</p>
                ))
            }
        </div>
    )
}

function App() {
    const categories = [
        {
            id: 1,
            name: "Музыка",
            items: ["Альбом 1", "Альбом 2", "Альбом 3"]
        },
        {
            id: 2,
            name: "Видео",
            items: ["Видео 1", "Видео 2", "Видео 3"]
        }
    ]

    return (
        <div>
            {categories.map((category) => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                    <ul>
                        {category.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}