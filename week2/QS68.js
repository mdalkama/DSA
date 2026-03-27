// Special number using methods.

function specialNumber(digit) {
    let sum = 0;
    let prod = 1;
    let temp = digit

    while (temp > 0) {
        let rem = Math.floor(temp % 10)
        sum += rem;
        prod *= rem;
        temp = Math.floor(temp / 10)
    }

    return (sum + prod) == digit ? "YES" : "NO"
}

console.log(specialNumber(23))