let number = prompt("Enter a number: ")
number = parseInt(number);

function checkNumber (number) {
    // if (number >= 18) {
    //     alert("The number is 18 or higher!")
    // }
    // else {
    //     confirm("Please confirm if the number is over 18!")
    // }

    number >= 18 ? alert("The number is 18 or higher!") :
    confirm("Please confirm if the number is over 18!")
}



checkNumber(number);