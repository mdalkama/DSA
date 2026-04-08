// Find Resultant Array After Removing Anagrams

const words = ["abba", "baba", "bbaa", "cd", "cd"];
const result = [];

result.push(words[0]);

let i = 0;
let j = 1;

while (j < words.length) {

    let isAnagram = true;

    if (words[i].length === words[j].length) {
        let imap = {};
        let jmap = {};

        for (let k = 0; k < words[i].length; k++) {
            imap[words[i][k]] = (imap[words[i][k]] || 0) + 1;
            jmap[words[j][k]] = (jmap[words[j][k]] || 0) + 1;
        }

        for (let key in imap) {
            if (imap[key] !== jmap[key]) {
                isAnagram = false;
                break;
            }
        }
    } else {
        isAnagram = false;
    }

    if (!isAnagram) {
        result.push(words[j]);
        i = j;
    }
    j++;
}

console.log(result);