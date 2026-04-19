// Intersection of Two Arrays II

const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]


const count = new Map();
const result = [];

for (const num of nums1) {
    count.set(num, (count.get(num) || 0) + 1);
}

for (const num of nums2) {
    if (count.get(num) > 0) {
        result.push(num);
        count.set(num, count.get(num) - 1);
    }
}

console.log(result)