// Find the frequency of elements in an integer array


const arr = [2, 6, 3, 4, 6, 8, 3, 6, 8, 2, 4, 5, 7, 8, 5, 3, 3, 2, 4, 5, 6];

const map = {}

for (let i of arr) {
    map[i] = (map[i] || 0) + 1
}
console.log("Frequency of:")
for (let i in map) {
    console.log(i, ":", map[i])
}