// Calculate Digit Sum of a String

let s = "3465"
let k = 3
let newStr = s

while (newStr.length > k) {
    let str = ""
    let i = 0
    while (i < newStr.length) {
        let j = 0
        let num = 0
        while (j < k && i < newStr.length) {
            num += +newStr[i]
            j++
            i++
        }
        str += num
    }
    newStr = str
}
console.log(newStr)
