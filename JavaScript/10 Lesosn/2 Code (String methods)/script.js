// 1
convertToUpperCase = text => console.log(text.toUpperCase())
convertToUpperCase("Labas")

// 2
extractSubstring = text => console.log(text.substring(2, 7))
extractSubstring("Laba diena, kaip sekasi?")

// 3
function capitalizeFirstLetter (text) {
    let splitText = text.toLowerCase().split(' ');
    for (let i = 0; i < splitText.length; i++) {
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);     
    }
    console.log(splitText.join(' ')); 
 }
capitalizeFirstLetter("Laba diena, prašome užeiti.")

// 4
const form = document.querySelector('form')
let h1 = document.createElement('h1')

form.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    let name = ete.name.value
    let number = +ete.number.value
    if (Number.isInteger(number)) {
        h1.textContent = (name + " ").repeat(number)
        form.append(h1)
    }
    else {
        alert("Įvedėte ne sveiką skaičių!")
    }
})


