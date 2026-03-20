// Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2 ^ 5 = 32)

function power(a, b) {
    let pow = 1
    for (let i = 1; i <= b; i++) {
        pow *= a
    }
    console.log(pow)
}
power(3, 3)