// Accept a day number between 1-7 and print the corresponding day name.

function printDayName(day) {
    switch (day) {
        case 1:
            console.log("MONDAY")
            break;
        case 2:
            console.log("TUESDAY")
            break;
        case 3:
            console.log("WEDNESDAY")
            break;
        case 4:
            console.log("THURSDAY")
            break;
        case 5:
            console.log("FRIDAY")
            break;
        case 6:
            console.log("SATURDAY")
            break;
        case 7:
            console.log("SUNDAY")
            break;
        default:
            console.log("NOT A VALID DATE")
    }
}

printDayName(6)