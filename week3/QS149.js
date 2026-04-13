// Best Time to Buy and Sell Stock II


const prices = [7, 1, 5, 3, 6, 4]

let total = 0;


for (let i = 1; i < prices.length; i++){
    if (prices[i] - prices[i-1] > 0){
        total += prices[i] - prices[i - 1] 
    }
}

console.log(total)