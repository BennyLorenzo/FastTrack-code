// // function declaration
// function sayHello() {
//     return "Hello!"
// }
// console.log(sayHello())

// // function expression
// let doHello = function() {
//     return "Hello!";
// }

// console.log(doHello())

// Task
// document.addEventListener("click", function () {
//     document.querySelector('#demo').textContent = "Howdy!";
// })

// arrow function
// const arrowHello = () => {
//     return "Howdy!"
// }

// console.log(arrowHello());

// sugar arrow function

// const arrowSugar = () => "Howderinjo!"
// console.log(arrowSugar())

// document.addEventListener("click", () => document.querySelector('#demo').textContent = "Howdy!");

// one parameter arrow function (no need for paranthesis)
const helloNameArrow = name => `Hello, ${name}, how you doin?`
console.log(helloNameArrow("Benny"))