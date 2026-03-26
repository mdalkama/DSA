// Bubble Sort.


const arr = [5, 3, 6, 2, 8, 19, 34, 67, 45];
let n = arr.length
for (let i = 0; i < n - 1; i++) {
let swap = 0
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swap = 1
        }
    }
    if(!swap){
        break;
    }
}

console.log(arr)