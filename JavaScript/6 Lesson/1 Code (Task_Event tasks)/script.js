// 1
document.querySelector('#nameAlert').addEventListener('click', () => alert("Benny"));

// 2
document.querySelector('#about').addEventListener('click', () => document.querySelector('#aboutMe').textContent = 'You so funny');

// 3
document.querySelector('#counterIncrease').addEventListener('click', () => document.querySelector('#counter').textContent++);

// 4
document.querySelector('#generateRandom').addEventListener('click', () => document.querySelector('#randomNumber').textContent = Math.floor(Math.random() * 100 + 1));

// 5
document.querySelector('#legalAge').addEventListener('click', () => document.querySelector('#beer').textContent = "Alus")
document.querySelector('#tooYoung').addEventListener('click', () => alert("Esate nepilnametis - nieko Jums parduoti neturime"))

// 6
let luckyNumber = Math.floor(Math.random() * 3 + 1)
console.log(luckyNumber);
const chosenNumbers = document.querySelectorAll('.luckyNumbers button')
for (let chosenNumber of chosenNumbers) {
    console.log(chosenNumber)
    chosenNumber.addEventListener('click', () => {
        parseInt(chosenNumber.textContent) === luckyNumber ? document.querySelector('#guess').textContent = "Yay!" : document.querySelector('#guess').textContent = "Nay..."
        }
    )
}

// 7
// querySelectorAll creates array of all selected elements, cannot apply one event to all
const buttons = document.querySelectorAll('div button');
for (let button of buttons) {
    button.addEventListener('click', () => document.querySelector('div h2').textContent = "NEKLAUŽADA")
}

// 8
document.addEventListener('mousemove', () => document.querySelector('#dontMove').textContent = "PRAŠĖME NEUŽJUDĖTI")
