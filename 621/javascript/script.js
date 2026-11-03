const initialState = {
    plan: "basic",
    months: 1,
    discount: false
};

function reducer(state, action) {
    switch (action.type) {
        case "plan/selected":
            return {
                ...state,
                plan: action.payload
            };

        case "months/changed":
            return {
                ...state,
                months: action.payload
            };

        case "discount/toggled":
            return {
                ...state,
                discount: !state.discount
            };

        default:
            return state;
    }
}

const firstState = reducer(initialState, {
    type: "plan/selected",
    payload: "premium"
});

const secondState = reducer(firstState, {
    type: "months/changed",
    payload: 6
});

console.log(initialState);
console.log(firstState);
console.log(secondState);