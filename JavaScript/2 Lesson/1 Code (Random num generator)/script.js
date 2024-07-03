randomNumber = Math.random()

// generating rand from 0 to 10
// console.log(randomNumber * 11); 

// testing to see output
// for (let i = 0; i < 500; i++) {
//     console.log(Math.floor(Math.random() * 11));
// }

// rounding the random number
// console.log(Math.round(randomNumber)); 

// flooring the random number (preffered)
// console.log(Math.floor(randomNumber * 11)); 

// generating rand from 1 to 10
// console.log(Math.floor(randomNumber * 10) + 1); 

let luckyNumber = Math.floor(randomNumber * 5) + 1
console.log(luckyNumber)

winningNumber = Math.floor(Math.random() * 5) + 1
console.log(winningNumber)

if (luckyNumber === winningNumber) {
    console.log("Congratulations, you have won!")
}
else {
    console.log("Better luck next time!")
}





