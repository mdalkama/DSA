//Count Equal and Divisible Pairs in an Array

const arr = [3, 1, 2, 2, 2, 1, 3]
let k = 2

const hash = {}
let count = 0
for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] != undefined) {
        for (let j = 0; j < hash[arr[i]].length; j++) {
            if ((hash[arr[i]][j] * i) % k == 0) {
                count++
            }
        }
        hash[arr[i]] = [...hash[arr[i]], i]
    } else {
        hash[arr[i]] = [i]
    }
}
console.log(count)