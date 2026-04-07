// Remove Digit From Number to Maximize Result

let number = "2918247756338836829948259212259612948986573547572133445495998236287245768816987491842618661"
let digit = "9"

let arr = []

for (let i = 0; i < number.length; i++) {
    if (number[i] == digit) {
        let j = 0
        let str = ""
        while (j < number.length) {
            if (j != i) {
                str += number[j]
            }
            j++
        }
        arr.push(str)
    }
}

console.log(arr.sort((a, b) => b.localeCompare(a))[0])