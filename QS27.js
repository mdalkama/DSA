// Sum up to n terms.

function sumOfNNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNNumbers(5);