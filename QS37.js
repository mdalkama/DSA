// Accept a number and check if it is a palindromic number(If number and its reverse are equal, Ex: 12321 - Reverse - 12321)


function palindrome(num) {
    let pal = 0;
    while (num >= 1) {
        pal = pal * 10 + Math.floor(num % 10);
        num = num / 10
    }
    return pal
}

const num = 12321

const palindromeNum = palindrome(num)

if (palindromeNum == num) {
    console.log("This is palindrome")
} else {
    console.log("This is not a palindrome")
}