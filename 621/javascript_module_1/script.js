const words = ["JavaScript", "может", "быть", "удобным"];

const sentence = words.reduce((text, word) => {
    return text === "" ? word : text + " " + word;
}, "");

console.log(sentence);
// JavaScript может быть удобным