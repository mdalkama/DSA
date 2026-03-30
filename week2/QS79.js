// Maximum Number of Pairs in Array


const num = [1, 3, 2, 1, 3, 2, 2]

let pairCount = 0
let leftOver = 0

const map = {}

for (let i = 0; i < num.length; i++) {
    map[num[i]] = (map[num[i]] || 0) + 1;
}

for (let i in map) {
    pairCount += Math.floor(map[i] / 2);
    leftOver += map[i] % 2;
}

console.log([pairCount, leftOver])