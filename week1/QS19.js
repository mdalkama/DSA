// Accept a year and check if it a leap year or not (google to find out what's a leap year)


function leapYear(year){
    if((year % 4 ===  0 && year%100 !== 0) || year%400 === 0){
        console.log("leap year")
    }else{
        console.log("Not a leap year")
    }
}

leapYear(1600)