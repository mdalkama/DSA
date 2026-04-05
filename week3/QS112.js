// Sort the words of the sentence

let str = "sentence4 a3 is2 This1";

const arr = str.split(" ")

arr.sort((a, b) => {
    return +a.split("")[a.length - 1] - +b.split("")[b.length - 1]
})

console.log(arr)