// Print the unique elements in an array

const arr = [2, 6, 3, 4, 6, 8, 3, 6, 8, 2, 4, 5, 7, 8, 5, 3, 3, 2, 4, 5, 6,];

arr.sort((a, b) => a - b)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
        console.log(arr[i])
    }
}