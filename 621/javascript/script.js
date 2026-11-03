const selectPlanAction = {
    type: "plan/selected",
    payload: "premium"
};

const changeMonthsAction = {
    type: "months/changed",
    payload: 6
};

const toggleDiscountAction = {
    type: "discount/toggled"
};

console.log(selectPlanAction);
console.log(changeMonthsAction);
console.log(toggleDiscountAction);