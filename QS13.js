// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

function sayGreetings(gender) {
    switch (gender.toLowerCase()) {
        case "m":
            console.log(`Good Morning Sir`)
            break;
        case "f":
            console.log(`Good morning Mam`)
            break;
        default:
            console.log(`Good Morning`)
    }
}

sayGreetings("")