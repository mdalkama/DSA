// Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

const str = 'AcgDfD'
const arr = str.split("")

for (let i = 0; i < arr.length; i++) {
    if (str.charCodeAt(i) <= 90) {
        arr[i] = String.fromCharCode(str.charCodeAt(i) + 32)
    } else {
        arr[i] = String.fromCharCode(str.charCodeAt(i) - 32)
    }
}

console.log(str)
console.log(arr)
