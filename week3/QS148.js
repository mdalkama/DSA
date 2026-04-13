// Best Time to Buy and Sell Stock (Hint - Kadane's Algo)


const prices = [7, 1, 5, 3, 6, 4];

let buyPrice = prices[0];
let profit = 0;

for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
        buyPrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - buyPrice);
}

console.log(profit);