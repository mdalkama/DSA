// Check if All A's Appears Before All B's

const s = 'aaaabbbbb'
let a = -1
let b = null
for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") {
        a = i
    }
    if (s[i] == "b" && b == null) {
        b = i
    }

}

if (b == null) {
    console.log(true)
}

if (a < b) {
    console.log(true)
} else {
    console.log(false)
}
