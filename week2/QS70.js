// Build Array from Permutation

const arr = [5, 0, 1, 2, 3, 4]
const resultArr = []

for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[arr[i]]
}

console.log(resultArr)