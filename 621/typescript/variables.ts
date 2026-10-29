interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const user: User = {
    id: 10,
    name: "Мария",
    email: "maria@example.com",
    isActive: true
};

console.log(user.name);