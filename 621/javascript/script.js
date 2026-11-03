const initialState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1
            };

        case "decrement":
            return {
                ...state,
                count: state.count - 1
            };

        case "reset":
            return initialState;

        default:
            return state;
    }
}

let state = initialState;

function dispatch(action) {
    state = reducer(state, action);
    console.log("Текущее состояние:", state);
}

dispatch({ type: "increment" });
dispatch({ type: "increment" });
dispatch({ type: "decrement" });
dispatch({ type: "reset" });