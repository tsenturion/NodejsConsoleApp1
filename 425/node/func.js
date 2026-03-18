<Product name="Телефон" />
<Product price={1000} />

function Product({ name, price }) {
    return (
        <>
            <h2>{name}</h2>
            <p>Цена: {price} руб.</p>
        </>
    );
}

function App() {
    return (
        <Product name="Телефон" price={1000} />
    );
}

function User({ user }) {
    return (
        <>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
        </>
    );
}

functoin App() {
    const user = {
        name: 'Иван',
        role: 'Администратор'
    };

    return <User user={user} />;
}

function Button({ onClick }) {
    return <button onClick={onClick}>Нажми меня</button>;
}

function App() {
    function handleClick() {
        alert('Кнопка была нажата!');
    }

    return <Button onClick={handleClick} />;
}

function Card(props) {
    return (
        <>
            {props.children}
        </>
    );
}

function App() {
    return (
        <Card>
            <h2>Заголовок</h2>
            <p>Содержимое карточки</p>
        </Card>
    );
}

{
    children: (
        <>
            <h2>Заголовок</h2>
            <p>Содержимое карточки</p>
        </>
    )
}

function Button({ text = "Нажми меня" }) {
    return <button>{text}</button>;
}

<Button />
<Button text="Отправить" />