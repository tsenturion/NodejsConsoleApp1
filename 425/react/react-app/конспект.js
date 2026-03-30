import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Главная</h1>;
}

function About() {
  return <h1>О нас</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}


import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
    </nav>
  );
}

function Users() {
  return (
    <div>
      <h1>Пользователи</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
<Route path="/users" element={<Users />}>
  <Route path="profile" element={<h2>Профиль</h2>} />
</Route>
import { Outlet } from "react-router-dom";

function Users() {
  return (
    <div>
      <h1>Пользователи</h1>
      <Outlet />
    </div>
  );
}

<Route path="/users/:id" element={<User />} />
import { useParams } from "react-router-dom";

function User() {

  const { id } = useParams();

  return <h1>Пользователь {id}</h1>;
}

import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <button onClick={goHome}>
      На главную
    </button>
  );
}

<Route path="*" element={<h1>Страница не найдена</h1>} />


function PrivateRoute({ isAuth, children }) {
  return isAuth ? children : <h1>Нет доступа</h1>;
}
<Route
  path="/profile"
  element={
    <PrivateRoute isAuth={true}>
      <h1>Профиль</h1>
    </PrivateRoute>
  }
/>

/search?q=react
import { useSearchParams } from "react-router-dom";

function Search() {

  const [params] = useSearchParams();

  const query = params.get("q");

  return <p>Поиск: {query}</p>;
}

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
];

<Route path="/users/:id" element={<User />} />