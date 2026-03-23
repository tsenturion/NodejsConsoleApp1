import { useCallback, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

import { useState, useEffect } from "react"
function App()  {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Компонент обновился");
    });

    return (
        <button onClick={() => setCount(count + 1)}>{count}</button>
    );
}

useEffect(() => {
    console.log("Изменился count");
}, [count]);

useEffect(() => {
    console.log("Компонент создан");
}, []);

useEffect(() => {
    const id = setInterval(() => {
        console.log("Прошло 1 секунду");
    }, 1000);

    return () => clearInterval(id);
}, []) 


import { useRef } from "react";
function App() {
    const inputRef = useRef();
    function focusInput() {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus input</button>
        </div>
    );
}

import { useMemo } from "react";

function App({ number }) {
    const squared = useMemo(() => {
        return number * number;
    }, [number]);
    return (
        <div>
            <p>{number}</p>
            <p>{squared}</p>
        </div>
    );
}

import { useCallback } from "react";
function App() {
    const handleClick = useCallback(() => {
        console.log("Клик");
    }, []);
    return (
        <button onClick={handleClick}>Клик</button>
    );
}

import { useState, useEffect } from "react";

function useTimer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time
}

function App() {
    const time = useTimer();
    return <p>{time}</p>
}


//ошибка
if (condition) {
    useState()
}

//вызываем только на верхнем уровне 
function App() {
    useState();
}