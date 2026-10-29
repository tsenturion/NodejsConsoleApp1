interface User {
    id: number;
    name: string;
    phone?: string;
}

const user1: User = {
    id: 1,
    name: "Анна"
};

const user2: User = {
    id: 2,
    name: "Иван",
    phone: "+79990000000"
};

console.log(user1.phone ?? "Телефон не указан");
console.log(user2.phone);