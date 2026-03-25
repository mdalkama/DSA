// Check if the number is Prime or not.

function isPrime(n) {
    let isPrime = false
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = true
            break
        }
    }
    return isPrime
}
if (isPrime(2)) {
    console.log("Not a prime Number")
} else {
    console.log("This is a prime number")
}