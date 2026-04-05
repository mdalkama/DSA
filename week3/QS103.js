// Palindromic String using method and Two pointer algorithm (hint: Array reverse algo)

const str = "madam";

const arr = str.split("")


let i = 0;
let j = arr.length - 1


while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++;
    j--
}

const revStr = arr.join("")

if (str == revStr) {
    console.log("This is palindrome")
} else {
    console.log("This is not a palindrome")
}