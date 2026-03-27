// Concatenation of array

const arr = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

const finalArray = new Array(arr.length + arr2.length)

for (let i = 0; i < arr.length; i++) {
    finalArray[i] = arr[i]
}
for (let i = arr.length; i < arr.length + arr2.length; i++) {
    finalArray[i] = arr2[i - arr.length]
}
console.log(finalArray)