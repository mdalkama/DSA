// Print the unique elements in an array


const arr = [1, 2, 2, 3, 4, 4, 5];
const map = {}
let result = []

for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1
}

for (let i in map) {
    if (map[i] == 1) {
        result.push(i)
    }
}

console.log(result)

