// Accept an English alphabet from user and check if it is a consonant or a vowel.

const vowel = ["a", "e", "i", "o", "u"];

function checkVowel(char) {
    const isVowel = vowel.includes(char);
    if (isVowel) console.log(`${char} is a vowel`);
    else console.log(`${char} is not vowel`);
}

checkVowel("i");
