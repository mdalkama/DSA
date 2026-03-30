// Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: a) The First element is replaced by the multiplication of the first and second. b) The last element is replaced by multiplication of the last and second last. (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})


const num = [2, 3, 4, 5, 6]
const arr = []
for (let i = 0; i < num.length; i++) {
    if (i == 0) {
        arr[i] = num[i] * num[i + 1]
    } else if (i == num.length - 1) {
        arr[i] = num[i] * num[i - 1]
    } else {
        arr[i] = num[i - 1] * num[i + 1]
    }
}


console.log(arr)
