interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin extends User {
    permissions: string[];
}

const admin: Admin = {
    id: 1,
    name: "Алексей",
    email: "alex@example.com",
    permissions: ["read", "write", "delete"]
};

console.log(admin.name);
console.log(admin.permissions);