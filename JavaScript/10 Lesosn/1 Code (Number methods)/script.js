// 1
const milkPrice = 3.677
Number.isInteger(milkPrice) ? console.log("Sveikas") : console.log(`Ne sveikas, reikės grąžos. Kaina: ${milkPrice.toFixed(2)}`)

// 2
const form = document.querySelector('form')
let h1 = document.createElement('h1')
form.addEventListener('submit', event => {
    h1.textContent = ''
    event.preventDefault()
    ete = event.target.elements
    let gasPrice = ete.gasPrice.value
    let liters = ete.liters.value
    console.log(gasPrice, liters)
    h1.textContent = `${gasPrice} Eur * ${liters} L = ${(gasPrice * liters).toFixed(2)}`
    form.append(h1)
})
