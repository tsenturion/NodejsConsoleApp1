const users = [
    {
        name: "Анна",
        contact: {
            email: "anna@example.com"
        }
    },
    {
        name: "Иван"
    }
];

for (const user of users) {
    const email = user.contact?.email ?? "Почта не указана";

    console.log(`${user.name}: ${email}`);
}