function App() {
  const [user, setUser] = useState(null);

  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Header user={user} />;
}

function Header({ user }) {
  return <Profile user={user} />;
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

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function App() {

  const [user, setUser] = useState("Анна");

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {

  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}


import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
    </div>
  );
}

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

function App() {

  const { count, increment } = useStore();

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
}

const state = {
  users: {
    1: { id: 1, name: "Анна" },
    2: { id: 2, name: "Иван" }
  }
};


useEffect(() => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);