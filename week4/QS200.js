// Intersection of Two Arrays


const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]


let result = new Set()
let map = {}

for(let i of nums1.length <= nums2.length ? nums1 : nums2){
    map[i] = 1
}

for (let i of nums1.length > nums2.length ? nums1 : nums2){
    if(map[i]){
        result.add(i)
    }
}
console.log([...result])