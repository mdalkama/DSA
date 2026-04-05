// Check Two Strings are Anagram or Not (Anagrams words have the same word length & same character count. Examples of anagram words are arc and car, state and taste, night and thing etc.)

const s = "anagram";
const t = "nagaram"


if (s.length !== t.length) {
    console.log(false)
}

const tHash = {}
    const sHash = {}
for (let i = 0; i < s.length; i++) {
    if (tHash[t[i]]) {
        tHash[t[i]]++
    } else {
        tHash[t[i]] = 1
    }
    if (sHash[s[i]]) {
        sHash[s[i]]++
    } else {
        sHash[s[i]] = 1
    }
}

for(let i in sHash){
    if(sHash[i] !== tHash[i]){
        console.log(false)
    }
}

console.log(true)

console.log(sHash)
console.log(tHash)