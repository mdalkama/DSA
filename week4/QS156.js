// First Letter to Appear Twice

const s = "abccbaacz"

const map = {}

for (let i of s) {
    if (map[i]) {
        console.log(i)
        break;
    }
    map[i] = (map[i] || 0) + 1
}



