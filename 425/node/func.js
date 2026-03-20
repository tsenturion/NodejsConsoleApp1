import { useState } from "react";
function App() {
    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <div>
            <input
                name='name'
                value={form.name}
                onChange={handleChange}
            />
            <input
                name='email'
                value={form.email}
                onChange={handleChange}
            />
            <p>{form.name}</p>
            <p>{form.email}</p>
        </div>
    )
}


function App() {
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(text);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

<input type="text" />
<textarea 
    value={text}
    onChange={(event) => setText(event.target.value)}
/>

function App() {
    const [checked, setChecked] = useState(false);

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
        />
    )
}

function App() {
    const [value, setValue] = useState("apple");

    return (
        <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
        </select>
    )
}

import { useRef } from "react";
function App() {
    const inputRef = useRef();

    function handleSubmit() {
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

function App() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!email.includes("@")) {
            setError("Please enter a valid email address");
            return
        }

        setError("");
        console.log("Форма отправлена");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            {error && <p>{error}</p>}

            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const [items, setItems] = useState([""])

    function handleChange(index, value) {   
        const newItems = [...items]
        newItems[index] = value
        setItems(newItems)
    }

    function addField() {
        setItems([...items, ""])
    }

    return (
        <div>
            {items.map((item, index) => (
                <input
                    key={index}
                    value={item}
                    onChange={(event) => handleChange(index, event.target.value)}
                />
            ))}
            <button onClick={addField}>
                Add field
            </button>
        </div>
    )
}