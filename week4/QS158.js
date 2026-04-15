// Sort the People

const names = ["Mary", "John", "Emma"]
const heights = [180, 165, 170]

const map = {}
for (let i in names) {
    map[heights[i]] = names[i]
}
let k = 0
for (let i in map) {
    const j = names.length - 1 - k
    k++
    names[j] = map[i]
    heights[j] = i
}

console.log(names)
console.log(heights)