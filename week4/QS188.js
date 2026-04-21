const nums = [1, 2, 3, 4, 5, 3, 1];
const target = 3;

function findPeak(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] < arr[mid + 1]) low = mid + 1;
        else high = mid;
    }

    return low;
}

function binarySearch(arr, low, high, target, isAsc) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = arr[mid];

        if (val === target) return mid;

        if (isAsc) {
            if (val < target) low = mid + 1;
            else high = mid - 1;
        } else {
            if (val > target) low = mid + 1;
            else high = mid - 1;
        }
    }
    return -1;
}

function findInMountainArray(target, arr) {
    const peak = findPeak(arr);

    const left = binarySearch(arr, 0, peak, target, true);
    if (left !== -1) return left;

    return binarySearch(arr, peak + 1, arr.length - 1, target, false);
}

console.log(findInMountainArray(target, nums));