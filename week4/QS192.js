// Search a 2D Matrix


const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target = 3


function findWhichArrayHaveTheElement(arr, target) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        let first = arr[mid][0];
        let last = arr[mid][arr[mid].length - 1];

        if (target >= first && target <= last) {
            return binarySearch(arr[mid], target);
        }
        else if (last < target) {
            min = mid + 1;
        }
        else {
            max = mid - 1;
        }
    }

    return false;
}


function binarySearch(arr, target) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (arr[mid] < target) {
            min = mid + 1;
        } else if (arr[mid] > target) {
            max = mid - 1;
        } else {
            return true;
        }
    }

    return false;
}


console.log(findWhichArrayHaveTheElement(matrix, target))