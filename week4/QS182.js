// Find Smallest Letter Greater Than Target

const letters = ["c", "f", "j"]
const target = "c"
const targetCode = target.charCodeAt(0)
let result = letters[0]

for(let i of letters){
    if(i.charCodeAt(0) > targetCode){
        result = i
        break
    }
}
console.log(result)