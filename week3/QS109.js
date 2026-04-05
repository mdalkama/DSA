// Maximum Number of Words Found in Sentences

const str = "alice and bob love leetcode";


const arr = str.split(" ")
let max = arr[0].length;


for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max) {
        max = arr[i].length
    }
}

console.log(max)