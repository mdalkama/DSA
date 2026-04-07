// Check if Number Has Equal Digit Count and Digit Value

const num = "1210"

const map = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
}

for (let i = 0; i < num.length; i++) {
    map[num[i]]++
}
let flag = true
for (let i = 0; i < num.length; i++) {
    let times = num[i];
    if (times != map[i]) {
        flag = false
    }
}

console.log(flag)