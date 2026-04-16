// Kth Distinct String in an Array

const arr = ["d", "b", "c", "b", "c", "a"]
const k = 2

const map = {}

for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1
}
let count = 0

for(let i in map){

    if(map[i] == 1){
        count++
    }

    if(count == k){
        console.log(i)
    }
}
console.log("")