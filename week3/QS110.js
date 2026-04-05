// Accept a string and print the frequency of each character present in the string


const str = "hello world";

const freq = {}

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        if (freq[str[i]]) {
            freq[str[i]]++
        } else {
            freq[str[i]] = 1
        }
    }
}


console.log(freq)

