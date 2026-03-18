function App() {
    const isAuth = true;
    if (isAuth) {
        return <h1>Добро пожаловать</h1>;
    }
    return <h1>Пожалуйста, авторизуйтесь</h1>;
}

function App() {
    const isAuth = true;

    return (
        <>
            {isAuth && <p>Добро пожаловать</p>}
        </>
    )
}

function App() {
    const isAuth = true;

    return (
        <>
            {isAuth ? <p>Добро пожаловать</p> : <p>Пожалуйста, авторизуйтесь</p>}
        </>
    )
}

function App() {
    const isLoading = true;

    return (
        <>
            {isLoading ? <p>Загрузка</p> : <p>Данные загружены</p>}
        </>
    )
}

function Message({ isVisible }) {
    if (!isVisible) {
        return null;
    }
    return <p>Привет</p>;
}

function App() {
    const items = [];

    return (
        <>
        {items.length === 0
            ? <p>В корзине нет товаров</p>
            : <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        }
        </>
    )
}

function App() {
    const status = 'error';

    return (
        <div>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'error' && <p>Error</p>}
            {status === 'success' && <p>Success</p>}
        </div>
    )
}


function App() {
    const status = 'loading';

    let content;
    
    if (status === 'loading') {
        content = <p>Loading...</p>;
    } else if (status === 'error') {
        content = <p>Error</p>;
    } else if (status === 'success') {
        content = <p>Success</p>;
    }
    
    return (
        <div>
            {content}
        </div>
    )
}


import { useState } from 'react';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <button onClick={() => setIsVisible(!isVisible)}>
                Показать / скрыть
            </button>
            {isVisible && <p>Привет</p>}
        </>
    )
}

function App() {
    const [user, setUser] = useState(null);

    return (
        <>
            {user
                ? <p>Привет, {user.name}</p>
                : <button>Войти</button>
            }
        </>
    )
}