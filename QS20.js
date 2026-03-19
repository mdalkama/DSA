// Question: Shop Discount Calculator

// A shop offers discounts based on the total bill amount:
// ₹0 – ₹1000 → No discount
// ₹1001 – ₹5000 → 10% discount
// ₹5001 – ₹10000 → 20% discount
// Above ₹10000 → 30% discount

function calculatePercentage(percent, amount) {
    return (percent * amount) / 100
}

function calculateDiscount(amount) {
    if (amount > 10000) {
        return amount - calculatePercentage(30, amount)
    } else if (amount > 5000) {
        return amount - calculatePercentage(20, amount)
    } else if (amount > 1000) {
        return amount - calculatePercentage(10, amount)
    }else{
        return amount
    }
}

console.log(calculateDiscount(1000))