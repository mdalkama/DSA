// Sort the words of the sentence

let str = "Banana apple Mango";

let result = str
    .split(" ")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join(" ");

console.log(result);