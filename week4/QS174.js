// First Missing Positive

const nums = [7, 8, 9, 11, 12]

nums.sort((a, b) => a - b)

let count = 1

for (let i of nums) {
    if (count == i) {
        count++
    } else if (count < i){
        break
    }
}
console.log(count)