// Print the sum of all factors of a number(Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)


function sumFactor(n) {
    let sum = n
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            sum += i
        }
    }
    console.log(sum)
}

sumFactor(24)