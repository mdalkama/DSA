// Maximum Number of Words Found in Sentences

const str = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]



let max = str[0].split(" ").length;


for (let i = 1; i < str.length; i++) {
    if (str[i].split(" ").length > max) {
        max = str[i].split(" ").length
    }
}

console.log(max)