// Divide Array Into Equal Pairs

const num = [3, 2, 3, 2, 2, 2]
let flag = true

num.sort((a, b) => {
    return a - b
})

for (let i = 0; i < num.length; i += 2) {
    if (num[i] - num[i + 1] != 0) {
        flag = false
        break;
    }
}

console.log(flag)