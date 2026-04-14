// Check if the Sentence Is Pangram

const sentence = "thequickbrownfoxjumpsoverthelazydog"
let map = new Array(26).fill(0);
if (sentence.length < 26) {
    return false;
}
for (let i = 0; i < sentence.length; i++) {
    map[sentence.charCodeAt(i) - 97]++;
}
for (let i = 0; i < map.length; i++) {
    if (map[i] === 0) {
        console.log(false)
    }
}
console.log(true)
