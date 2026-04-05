// Extend the previous question and capitalize the first & last character of each word in the sentence and print the new sentence (Ex - Hello bhai Kaise ho a, Output - HellO BhaI KaisE HO A)


const str = 'Hello bhai kaise ho'
const arr = str.split(" ");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].slice(1, -1) + arr[i][arr[i].length - 1].toUpperCase())
}