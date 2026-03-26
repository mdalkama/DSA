// Move all the negative elements on the left side and positive elements on the right side O(n).

const arr = [0, -1, 2, -3]

let i = 0;
let j = arr.length - 1

while (i < j) {
    if (arr[i] >= 0 && arr[j] < 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--
    }
    if (arr[i] < 0) {
        i++
    }
    if (arr[j] >= 0) {
        j--
    }
}
console.log(arr)