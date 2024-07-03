const input = document.querySelector('#number')
const p = document.createElement('p')
const form = document.querySelector('form')
let styleSheet = document.createElement("style")
let pStyling = `p {
    padding: 10px;
    }`
let green = `p {
    background-color: lightgreen;
    color: green
    }`
let red = `p {
    background-color: pink;
    color: red
    }`

input.addEventListener('blur', () => {
    let userInput = number.value
    console.log(userInput)
    if (+userInput >= 0 && +userInput < 100 && userInput !== "") {
        p.textContent = "Tai yra skaičius tarp 0 ir 99"
        form.prepend(p);
        styleSheet.textContent = green + pStyling
        document.head.appendChild(styleSheet)
    }
    else if (userInput == "") {
        p.textContent = `Nieko neįvedėte`
        form.append(p);
        styleSheet.textContent = red + pStyling
        document.head.appendChild(styleSheet)
    }
    else {
        p.textContent = `Tai yra ne skaičius ARBA mažesnis už 0 ARBA didesnis už 99, Jūs įvedėte ${userInput}`
        form.append(p);
        styleSheet.textContent = red + pStyling
        document.head.appendChild(styleSheet)
    }
})

