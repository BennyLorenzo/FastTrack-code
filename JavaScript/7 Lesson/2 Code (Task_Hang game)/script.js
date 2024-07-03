const words = ["obuolys", "bananas", "mandarinas", "apelsinas","nektarinas", "citrina", "persimonas", "greipfrutas", "arbūzas"]
const hiddenWordSelector = document.querySelector('#hiddenWord')
let gameWord = words[Math.floor(Math.random() * words.length)].toUpperCase()
let gameWordArray = gameWord.split("");
let hiddenWord = ""
    for (let i = 0; i < gameWord.length; i++) {
        hiddenWord += "_"
    }
    hiddenWordSelector.textContent = hiddenWord
let hiddenWordArray = hiddenWord.split("");
console.log(gameWord)
console.log(hiddenWordArray)
console.log(gameWordArray)

let alphabet = ["A","Ą","B","C","D","E","Ę","Ė","F","G","H","I","Į","Y","J","K","L","M","N","O","P","R","S","Š","T","U","Ų","Ū","V","Z","Ž"];
let guessArray = []
let guessAllowance = 6
let hangerNumber = 1
let winner = false
document.querySelector('h4 span').textContent = guessAllowance
const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    let guess = ete.guess.value.toUpperCase()
    document.querySelector('h4 span').textContent = guessAllowance
    console.log(guess)
    console.log(!gameWordArray.includes(guess))
    guessing: if (guessArray.includes(guess)) {
        alert(`Šią raidę jau spėjote!`);
        break guessing;
    }
    else if (winner) {
        alert("Jūs laimėjote!")
        break guessing;
    }
    else if (alphabet.includes(guess)) {
        console.log("Zdarof")
        guessArray.push(guess);
        console.log(guessArray)
        document.querySelector('#guesses span').textContent += guess
        for (let i = 0; i < gameWordArray.length; i++) {
            if (gameWordArray[i] === guess) {
                hiddenWordArray[i] = guess
                hiddenWordSelector.textContent = hiddenWordArray.join("")
            }
        }
        if (!hiddenWordArray.includes("_")) {
            alert("Jūs laimėjote!")
            winner = true
            document.querySelector('#guess').disabled = true;
            document.querySelector('input[type="submit"]').disabled = true;
        }
        if (!gameWordArray.includes(guess)) {
            guessAllowance -= 1;
            document.querySelector('h4 span').textContent = guessAllowance
            console.log("VEIKIU")
            document.querySelector("#hanger").style.backgroundImage = `url(images/hang${hangerNumber}.png)`
            hangerNumber++
        }
        if (guessAllowance < 1) {
            alert("Jūs pralaimėjote!")
            document.querySelector('#guess').disabled = true;
            document.querySelector('button[type="submit"]').disabled = true;
        }
    }
    else {
        alert(`Įveskite raidę!`);
    }

})
