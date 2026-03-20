// Mirrored Right Triangle Pattern

function mirrorStr(num) {
    let val = ""
    for (let i = 1; i <= num; i++) {
        val = " ".repeat(num - i) + "*".repeat(i)
        console.log(val)
        val = ""
    }
}
mirrorStr(5)