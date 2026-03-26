// Binary Search. If element found print the index, else -1


const arr = [1, 3, 5, 6, 8, 12, 56, 78, 98, 101]
let key = 1011
let low = 0
let high = arr.length - 1
let mid = Math.floor((low + high) / 2)

while (low <= high) {
    if (arr[mid] == key) {
        console.log(`Element found at index: ${mid}`)
        break;
    }
    if (arr[mid] < key) {
        low = mid + 1;
        mid = Math.floor((low + high) / 2)
    } else {
        high = mid - 1;
        mid = Math.floor((low + high) / 2)
    }
}

if (low > high) {
    console.log(-1)
}