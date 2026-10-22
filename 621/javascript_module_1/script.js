const invalidJson = "{name: Anna}";

try {
    const data = JSON.parse(invalidJson);

    console.log(data);
} catch (error) {
    console.log("Некорректный формат JSON");
}