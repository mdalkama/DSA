// Strong Password Checker II

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character.The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions(i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password.Otherwise, return false.


let password = "IloveLe3tcode!"
if (password.length < 8) return false;

let hasLower = false;
let hasUpper = false;
let hasDigit = false;
let hasSpecial = false;

const special = "!@#$%^&*()-+";

for (let i = 0; i < password.length; i++) {
    const ch = password[i];

    if (i > 0 && ch === password[i - 1]) return false;

    if (ch >= 'a' && ch <= 'z') hasLower = true;
    else if (ch >= 'A' && ch <= 'Z') hasUpper = true;
    else if (ch >= '0' && ch <= '9') hasDigit = true;
    else if (special.includes(ch)) hasSpecial = true;
}

console.log(hasLower && hasUpper && hasDigit && hasSpecial)
