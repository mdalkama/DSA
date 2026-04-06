// Rearrange Characters to Make Target String


let s = 'aaaaaaaaaaaaaaaaaaaaaaaaaa'

let target = "aaaaaaaaa"
let map = {}
let tMap = {}


for (let i = 0; i < s.length; i++) {
    if (target.includes(s[i])) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }
}

for (let i = 0; i < target.length; i++) {
    if (tMap[target[i]]) {
        tMap[target[i]]++
    } else {
        tMap[target[i]] = 1
    }
}

let freq = Infinity
for (let i in tMap) {
    tMap[i] = (map[i] || 0) / (tMap[i] || 0)
    if (tMap[i] < freq) {
        freq = tMap[i]
    }
}


console.log(Math.floor(freq))

