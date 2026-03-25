// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.


function sayGreetings(gender) {
    switch (gender.toLowerCase()) {
        case "m":
            console.log(`Good Morning Sir`)
            break;
        case "f":
            console.log(`Good morning Mam`)
            break;
        default:
            console.log(`Wrong Input`)
    }
}

sayGreetings("F")