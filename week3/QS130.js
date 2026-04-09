// Merge Sorted Array


let nums1 = [1]
let nums2 = []
let m = 1
let n = 0


let temp = [...nums1]

let i = 0;
let j = 0;
let k = 0;
console.log(temp)

while (j < m && k < n) {
    if (temp[j] < nums2[k]) {
        nums1[i] = temp[j]
        j++
        i++
    } else {
        nums1[i] = nums2[k]
        k++
        i++
    }
}
while (j < m) {
    nums1[i] = temp[j]
    j++
    i++
}
while (k < n) {
    nums1[i] = nums2[k]
    k++
    i++
}

console.log(nums1)