const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    const ete = event.target.elements
    let age = ete.age.value
    let checkBox = document.querySelector("#criminalRecord")
    document.querySelector('form p span').textContent = `${age >= 18 && age <= 30 ? (checkBox.checked ? "Galite būti pašauktas į kariuomenę!" : "Negalite būti pašauktas į kariuomenę, turite kriminalinį įrašą") : "Negalite būti pašauktas į kariuomenę, tinkamas amžius 18-30 metų"}`
})
