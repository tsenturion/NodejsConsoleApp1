function createValueManager() {
    let value = 10;

    return {
        getValue() {
            return value;
        },

        setValue(newValue) {
            value = newValue;
        }
    };
}

const manager = createValueManager();

console.log(manager.getValue()); // 10

manager.setValue(50);

console.log(manager.getValue()); // 50