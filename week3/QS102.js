// Check if the string is Palindromic or not

const str = "mam"

const revStr = str.split("").reverse().join("")

if (str == revStr) {
    console.log("This is palindrome")
} else {
    console.log("This is not a palindrome")
}