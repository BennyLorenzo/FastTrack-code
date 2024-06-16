// 1
const firstForm = document.querySelector('#firstTaskForm')
firstForm.addEventListener('submit', event => {
    event.preventDefault()
    let bonus = 500
    const ete = event.target.elements
    let yearsWorked = +ete.tenure.value
    document.querySelector('#firstTaskForm p span').textContent = `${yearsWorked <= 2 ? bonus : yearsWorked >= 10 ? bonus + 1500 : bonus + 500} Eur`
})

// 2
const secondForm = document.querySelector('#secondTaskForm')
secondForm.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    let inputYear = +ete.leapYear.value
    document.querySelector('#secondTaskForm p span').textContent = `${inputYear % 100 === 0 && inputYear % 400 > 0 ? "Nea!" : inputYear % 100 === 0 && inputYear % 400 === 0 ? "Teip!" : inputYear % 4 === 0 ? "Teip!" : "Nea!"}`
})

// 3
const thirdForm = document.querySelector('#thirdTaskForm')
thirdForm.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    let temperature = +ete.temperature.value
    document.querySelector('#thirdTaskForm p span').textContent = `${(temperature * 9 / 5 +32).toFixed(1)}`
})

// 4
const fourthForm = document.querySelector('#fourthTaskForm')
fourthForm.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    let email = ete.email.value
    let checkBox = document.querySelector("#agree")
    document.querySelector('#fourthTaskForm p span').textContent = `${checkBox.checked ? `El. paštas ${email} sėkmingai užregistruotas!` : "Registracija nesėkminga."}`
})

// 5
const fifthForm = document.querySelector('#fifthTaskForm')
fifthForm.addEventListener('submit', event => {
    event.preventDefault()
    let ul = document.querySelector('ul');
    ul.innerHTML = ''
    const ete = event.target.elements
    let freeText = ete.freeText.value
    let listItemAmount = +ete.listItemAmount.value
    for (let i = 0; i < listItemAmount; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(freeText));
        ul.appendChild(li);
    }
})

// 6
const sixthForm = document.querySelector('#sixthTaskForm')
sixthForm.addEventListener('submit', event => {
    event.preventDefault()
    let div = document.querySelector('#triangle');
    div.innerHTML = ''
    let flake = '*'
    const ete = event.target.elements
    let triangleSize = +ete.triangleSize.value
    for (let i = 0; i < triangleSize; i++) {
        div.innerHTML += `<p>${flake}</p>`
        flake += '*'
    }
})
