// Count Asterisks

const s = "yo|uar|e**|b|e***au|tifu|l"

let pipe = false;
let result = 0;

for (let i = 0; i < s.length; i++) {

    if (s[i] == "|") {
        pipe = !pipe;
    }

    else if (s[i] == "*" && !pipe) {
        result++;
    }
}

console.log(result)