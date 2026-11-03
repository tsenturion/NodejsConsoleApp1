function getStatusText(isOnline) {
    return isOnline
        ? "Пользователь в сети"
        : "Пользователь не в сети";
}

console.log(getStatusText(true));
console.log(getStatusText(false));