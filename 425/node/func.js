import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    );
}

<p>Счетчик: {count}</p>
<button onClick={() => setCount(count + 1)}>
    </button>

//неправильно 
count = count + 1;

//правильно
setCount(count + 1);

//неправильно 
setCount(count + 1);
setCount(count + 1);

setCount((prevCount) => prevCount + 1);
setCount((prevCount) => prevCount + 1);


//state хранит
const [name, setName] = useState('Alice');
const [items, setItems] = useState([]);
const [user, setUser] = useState({ name: 'Alice', age: 25 });

//неправильно 
user.name = 'Bob';
setUser(user);

//правильно 
setUser({ ...user, name: 'Bob' });


//неправильно
items.push('New Item');
setItems(items)

//правильно
setItems([...items, 'New Item']);

import { useState } from "react";
function Form() {
    const [text, setText] = useState('');

    return (
        <>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>You typed: {text}</p>
        </>
    );
}

function User() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    reutnr (
        <>
            <input onChange={(e) => setName(e.target.value)} />
            <input onChange={(e) => setAge(Number(e.target.value))} />
            <p>Name: {name}, Age: {age}</p>
        </>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

function App() {
    return (
        <>
            <Counter />
            <Counter />
        </>
    );
}


function Counter() {
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Counter count={count} setCount={setCount} />
            <Counter count={count} setCount={setCount} />
        </>
    );
}