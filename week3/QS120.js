// Largest 3-Same-Digit Number in String

const num = "6777133339"
let max = ""

for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
        let triple = num[i] + num[i] + num[i];

        if (triple > max) {
            max = triple;
        }
    }
}

console.log(max)