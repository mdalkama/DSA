// Greatest English Letter in Upper and Lower Case


let s = "arRAzFif"


let low = Array.from({ length: 26 }).fill(0)
let up = Array.from({ length: 26 }).fill(0)

for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
        low[s.charCodeAt(i) - 'a'.charCodeAt(0)] = 1
    }
    if (s[i] >= 'A' && s[i] <= 'Z') {
        up[s.charCodeAt(i) - 'A'.charCodeAt(0)] = 1
    }
}
let char = ""
for (let i = up.length - 1; i >= 0; i--) {
    if (up[i] != 0 && low[i] != 0) {
        char = String.fromCharCode(65 + i)
        break
    }
}


console.log(char)