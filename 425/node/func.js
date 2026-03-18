//App.jsx

import Button from "./Button";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((prev) => prev + 1);
    }
    return <Button onClick={handleClick} />;
}

export default App

//Button.jsx
function Button({ onClick }) {
    return (
        <button onClick={onClick}>Нажми меня</button>
    );
}

export default Button

//App.jsx
import { useCounter } from "./useCounter"; 
import Button from "./Button";

function App() {
    const { count, increment } = useCounter();
    return <Button onClick={increment} />;
}

//useCounter.js
import { useState } from "react";
export function useCounter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((prev) => prev + 1);
    }
    return { count, increment };
}

function App(){
    function handleClick() {
        console.log("кнопка нажата");
    }

    return (
        //неправильно
        // <button onClick={handleClick()}>Нажми меня</button>

        //правильно
        <button onClick={handleClick}>Нажми меня</button>
    );
}

<button onClick={() => console.log("кнопка нажата")}>
    Нажми меня
</button>    


function App(){
    function handleClick() {
        console.log("кнопка нажата");
    }

    return (
        <button onClick={() => handleClick('someArg')}>
            Нажми меня
        </button>
    );
}


function App() {
    function handleClick(event) {
        console.log(event);
    }
    return <button onClick={handleClick}>Нажми меня</button>;
}


function App() {
    function handleChange(event) {
        console.log(event.target.value);
    }
    return <input onChange={handleChange} />;
}

function App() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <button type="submit">Отправить</button>
        </form>
    );
}

import { useState } from "react";
function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Количество кликов: {count}</p>
            <button onClick={handleClick}>увеличить</button>
        </div>
    )
}

function App() {
    function handleMouseEnter() {
        console.log("курсор наведен");
    }

    function handleMouseLeave() {
        console.log("курсор ушел");
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>Курсор наведен</p>
        </div>
    )
}

function Button({ onClick }) {
    return (
        <button onClick={onClick}>Нажми меня</button>
    );
}

function App() {
    function handleClick() {
        console.log("кнопка нажата");
    }
    return <Button onClick={handleClick} />;
}

import { useState } from "react";

function App() {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(text);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleChange} />
            <button type="submit">Отправить</button>
        </form>
    );
}


function App() {
    function handleParrent() {
        console.log("родитель");
    }

    function handleChild(event) {
        event.stopPropagation();
        console.log("дочерний");
    }

    return (
        <div onClick={handleParrent}>
            <button onClick={handleChild}>Нажми меня</button>
        </div>
    );
}