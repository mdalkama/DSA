// Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)


const str = 'Hello bhai kaise ho'
const arr = str.split(" ");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].slice(1))
}