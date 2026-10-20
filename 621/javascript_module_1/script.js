const account = {
    owner: "Алексей",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
    }
};

account.deposit(1500);

console.log(account.balance); // 6500