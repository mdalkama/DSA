// Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix. (Example - Input: words = [\pay\"

const arr = ['pay', 'play', 'player', 'payroll', 'payment', 'payable', 'payback', 'paycheck', 'payday', 'payee'];
const pref = 'pa'
let regex = new RegExp("^" + pref, "i");

let count = 0

for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
        count++
    }
}

console.log(count)