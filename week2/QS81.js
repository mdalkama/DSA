// Keep Multiplying Found Values by Two

const nums = [5, 3, 6, 1, 12]
let original = 3


while (nums.find(elem => elem === original) != undefined) {
    original = original * 2
}

console.log(original)
