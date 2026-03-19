// Question: Electricity Bill Calculator

// Ek electricity board units ke basis par bill charge karta hai:
// 0 – 100 units → ₹5 per unit
// 101 – 200 units → ₹7 per unit
// 201 – 300 units → ₹10 per unit
// Above 300 units → ₹15 per unit


function calculateBill(units){

    let billAmmnt = 0

    if(units > 300 ){
        billAmmnt += (units - 300) * 15
        units = 300
    }
    if(units > 200){
        billAmmnt += (units - 200) * 10
        units = 200
    }
        if(units > 100){
        billAmmnt += (units - 100) * 7
        units = 100
    }
    billAmmnt += units * 5
    return billAmmnt
}

console.log(calculateBill(250))