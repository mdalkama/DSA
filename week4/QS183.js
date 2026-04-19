// Valid Perfect Square



const num = 16

let ans = Math.sqrt(num)
if (Math.floor(ans) < ans || Math.ceil(ans) > ans) {
    console.log(false)
}
console.log(true)