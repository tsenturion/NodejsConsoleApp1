const settings = {
    volume: 0,
    darkMode: false,
    username: ""
};

console.log(settings.volume ?? 50);       // 0
console.log(settings.darkMode ?? true);   // false
console.log(settings.username ?? "Гость"); // ""